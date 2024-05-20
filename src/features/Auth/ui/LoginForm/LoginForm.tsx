import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextBold, TextSize } from '@/shared/ui/Text/Text';
import { getLoginEmail } from '../../model/selectors/getLoginEmail/getLoginEmail';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginActions } from '../../model/slice/loginSlice';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Loader, ThemeLoader } from '@/shared/ui/Loader/Loader';
import { loginByEmail } from '../../model/services/loginByEmail';
import { Input } from '@/shared/ui/Input/Input';
import { VStack } from '@/shared/ui/Stack';
import styles from './LoginForm.module.scss';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import { getRouteTree } from '@/shared/const/router';
import { NotificationsActions } from '@/features/Notifications';
import { Error } from '@/shared/ui/Error/Error';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const forceUpdate = useForceUpdate();

    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const isEmailInvalid = !email || !email.length;

    const isPasswordInvalid = !password || !password.length;

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value.trim()));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value.trim()));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByEmail({ email, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            forceUpdate();
            dispatch(NotificationsActions.addNotification({
                type: 'success',
                label: 'Авторизация',
                text: 'Вы успешно вошли в аккаунт',
            }));
            navigate(getRouteTree());
        }
    }, [dispatch, email, forceUpdate, navigate, password]);

    return (
        <form className={classNames(styles.LoginForm, {}, [className])}>
            <VStack gap="32" justify="center" align="start">
                <Text
                    title="Вход на сайт"
                    bold={TextBold.BOLD}
                    size={TextSize.L}
                    gap="16"
                    className={styles.title}
                    text="Чтобы перейти к дереву подразделений, нужно авторизоваться"
                />

                <Input
                    autofocus
                    label="Почта"
                    placeholder="Введите вашу почту"
                    type="text"
                    required
                    onChange={onChangeEmail}
                    value={email}
                    className={styles.input}
                />
                <Input
                    label="Пароль"
                    placeholder="Введите ваш пароль"
                    isPassword
                    isForgetPassword
                    type="password"
                    className={styles.input}
                    onChange={onChangePassword}
                    required
                    value={password}
                />

                <Checkbox
                    label="Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением"
                    checked={checked}
                    id="loginCheck"
                    onToggle={handleChange}
                />

                <Button
                    disabled={isLoading || isEmailInvalid || isPasswordInvalid || !checked}
                    className={styles.loginBtn}
                    theme={ThemeButton.DEFAULT}
                    onClick={onLoginClick}
                >
                    {
                        isLoading ? <Loader theme={ThemeLoader.BTN_LOADER} /> : <span>Войти</span>
                    }
                </Button>
                {
                    error && (
                        <Error error={error} className={styles.msgError} />
                    )
                }
            </VStack>

        </form>
    );
});
