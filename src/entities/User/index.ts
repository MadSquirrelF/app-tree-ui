export {
    userReducer,
    userActions,
} from './model/slice/userSlice';

export type { User, UserSchema, UserRole } from './model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { getUserRoles, isUserAdmin } from './model/selectors/roleSelector/roleSelector';
export { initAuthData } from './model/services/initAuthData';
