import { Suspense, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserInited, initAuthData } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Navbar } from '@/widgets/Navbar';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';

const App = memo(() => {
    const dispatch = useAppDispatch();

    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return (
            <div className={classNames('app', {}, [])}>
                <AppLoaderLayout />
            </div>
        );
    }

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <MainLayout
                    header={<Navbar />}
                    content={<AppRouter />}
                />
            </Suspense>
        </div>
    );
});

export default App;
