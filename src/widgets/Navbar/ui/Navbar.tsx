import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import Logo from '@/shared/assets/icons/logo.svg';

import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { getUserAuthData, userActions } from '@/entities/User';
// import { HStack } from '@/shared/ui/Stack';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/Stack';
import { NotificationsActions } from '@/features/Notifications';
import { Text } from '@/shared/ui/Text/Text';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const authData = useSelector(getUserAuthData);

    const dispatch = useAppDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        dispatch(NotificationsActions.addNotification({
            type: 'success',
            label: 'Выход',
            text: 'Вы успешно вышли из аккаунта',
        }));
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(styles.Navbar, {}, [className])}>
                <HStack gap="0" align="center" max justify="between">
                    <AppLink to="/">
                        <Logo className={styles.logo} />
                    </AppLink>

                    <Button type="button" theme={ThemeButton.DEFAULT} onClick={onLogout}>
                        Выйти
                    </Button>
                </HStack>

            </header>
        );
    }

    return (
        <header className={classNames(styles.Navbar, {}, [className])}>
            <HStack gap="0" align="center" max justify="between">
                <AppLink to="/">
                    <Logo className={styles.logo} />
                </AppLink>

                <Text gap="4" title="Почта: test@mail.ru" text="Пароль: 123test" />
            </HStack>

        </header>
    );
});
