import { RouteProps } from 'react-router-dom';

import {
    AppRoutes,
    getRouteForbidden,
    getRouteLogin,
    getRouteTree,
} from '@/shared/const/router';
import { UserRole } from '@/entities/User';
import { LoginPage } from '@/pages/LoginPage';
import { TreePage } from '@/pages/TreePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
    notAuthOnly?: boolean;
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.LOGIN]: {
        path: getRouteLogin(),
        element: <LoginPage />,
    },
    [AppRoutes.TREE]: {
        path: getRouteTree(),
        element: <TreePage />,
        authOnly: true,
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
