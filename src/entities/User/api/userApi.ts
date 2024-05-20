import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserDataById: build.query<User, string>({
            query: (userId) => ({
                url: `/user/init/${userId}`,
                method: 'GET',
            }),
        }),
    }),
});

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
