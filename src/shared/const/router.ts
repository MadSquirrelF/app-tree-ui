export enum AppRoutes {
    TREE = 'tree',
    LOGIN = 'login',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteLogin = () => '/';
export const getRouteTree = () => '/tree';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteTree()]: AppRoutes.TREE,
    [getRouteLogin()]: AppRoutes.LOGIN,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
