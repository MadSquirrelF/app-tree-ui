import { Page } from '@/widgets/Page';
import LoginTreeIcon from '@/shared/assets/images/tree_login.svg';
import { LoginForm } from '@/features/Auth';
import styles from './LoginPage.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

const LoginPage = () => {
    const t = 1;
    return (
        <Page>
            <HStack
                max
                justify="center"
                gap="50"
                align="center"
                className={classNames('block', {}, [styles.LoginPage])}
            >
                <LoginTreeIcon className={styles.tree} />

                <LoginForm />
            </HStack>
        </Page>
    );
};

export default LoginPage;
