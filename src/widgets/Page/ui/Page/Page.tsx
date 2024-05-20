import {
    memo, ReactNode,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Page.module.scss';
import { Notifications } from '@/features/Notifications';

interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page = memo((props: PageProps) => {
    const { className, children } = props;

    return (
        <main
            className={classNames(styles.Page, {}, [className])}
        >
            {children}

            <Notifications />
        </main>
    );
});
