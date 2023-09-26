import { Profile } from '~/types/user';
export const useAuthUser = () => {
    return useState<Profile | null>("user", () => null);
};
