import { memo } from 'react';
import { useSelector } from 'react-redux';
import { NotificationList } from '../NotificationList/NotificationList';
import { selectNotifications } from '../../model/selectors/getNotificationsSelector';
import { NotificationItem } from '../NotificationItem/NotificationItem';

export const Notifications = memo(() => {
    const notifications = useSelector(selectNotifications);

    return (
        <NotificationList>
            {notifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
            ))}
        </NotificationList>
    );
});
