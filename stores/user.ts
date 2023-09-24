import { defineStore } from 'pinia';
import { User, Profile } from '~/types/user';
export const useUserStore = defineStore('user', () => {
    const user = ref();
    const token = useCookie('userLogin', {
        maxAge: 60 * 60,
    })

    const setToken = (data?: string) => (token
        .value = data);
    const setUser = (data?: any) => (user
        .value = data);

    const SignIn = async (data: any) => {
        try {
            const res = await $fetch<User>('http://localhost:8090/api/v1/login/', {
                method: "POST",
                body: data,
                withCredentials: true,
            });
            setToken(res.token);
        } catch (error) {
            setToken();
            setUser();
            console.log(error);
        }
    }
    const useUSer = async () => {
        if (token.value) {
            try {
                const res = await $fetch<Profile>('http://localhost:8090/api/v1/user/profile', {
                    withCredentials: true,
                });
                setUser(res);
            } catch (error) {
                setUser();
                console.log(error);
            }
        }
    }
    return { user, token, SignIn, useUSer, setToken, setUser }
});