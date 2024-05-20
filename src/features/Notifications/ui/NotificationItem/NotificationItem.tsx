/* eslint-disable consistent-return */
/* eslint-disable default-case */

import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './NotificationItem.module.scss';
import { Notification } from '../../model/types/NotificationsSchema';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import SuccessIcon from '@/shared/assets/icons/success-icon.svg';
import ErrorIcon from '@/shared/assets/icons/error-icon.svg';
import { selectNotificationDuration } from '../../model/selectors/getNotificationsSelector';
import { NotificationsActions } from '../../model/slices/NotificationsSlice';
import { Text, TextSize } from '@/shared/ui/Text/Text';

interface NotificationItemProps {
  className?: string;
  notification: Notification;
}

export const NotificationItem = memo(({ className, notification }: NotificationItemProps) => {
    const dispatch = useAppDispatch();

    const duration = useSelector(selectNotificationDuration);

    const [showToast, setShowToast] = useState(() => true);

    const [isClosing, setIsClosing] = useState(() => false);

    const [isProgress, setIsProgress] = useState(() => true);

    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const closeNotification = () => {
        setIsClosing(true);

        const timeoutUnmountNotification = setTimeout(() => {
            dispatch(NotificationsActions.dismissNotification(notification.id));

            setIsClosing(false);
        }, 1000);

        return () => clearTimeout(timeoutUnmountNotification);
    };

    const handleMouseLeave = useCallback(() => {
        setIsProgress(true);

        const timeoutId = setTimeout(() => {
            setIsClosing(true);

            const timeoutUnmountNotification = setTimeout(() => {
                dispatch(NotificationsActions.dismissNotification(notification.id));

                setIsClosing(false);
            }, 1000);

            return () => clearTimeout(timeoutUnmountNotification);
        }, 3000);

        setTimer(timeoutId);
    }, [dispatch, notification.id]);

    const handleMouseEnter = useCallback(() => {
        if (timer) {
            clearTimeout(timer);
            setIsProgress(false);
        }
    }, [timer]);

    useEffect(() => {
        handleMouseLeave();
    }, [handleMouseLeave]);

    useEffect(() => () => {
        if (timer) {
            clearTimeout(timer);
        }
    }, [timer]);

    const renderIcon = useCallback(
        (status: 'success' | 'error') => {
            switch (status) {
            case 'success':
                return <SuccessIcon className={styles.icon} />;
            case 'error':
                return <ErrorIcon className={styles.icon} />;
            }
        },
        [],
    );

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={classNames(styles.NotificationItem, { [styles.hide]: isClosing }, [className])}
        >
            <div className={classNames(styles.iconContainer, { [styles.error]: notification.type === 'error' }, [])}>
                {renderIcon(notification.type)}
            </div>

            <div className={styles.info}>
                <Text
                    title={notification.label}
                    gap="0"
                    size={TextSize.M}
                    text={notification.text}
                    className={styles.text}
                />
                <div
                    className={styles.progressBar}
                >
                    <div className={classNames(styles.progress, { [styles.start]: isProgress }, [])} />
                </div>
            </div>

        </div>
    );
});
