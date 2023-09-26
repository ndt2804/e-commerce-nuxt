import { defineStore } from 'pinia';
import { User, Profile } from '~/types/user';
export const useUserStore = defineStore('user', () => {
    const token = useCookie('userLogin', {
        maxAge: 60 * 60,
    })
    const setToken = (data?: string) => (token
        .value = data);
    const user = ref();
    const setUser = (data?: any) => (user
        .value = data);
    const SignIn = async (email: string, password: string, rememberMe: boolean) => {
        try {
            const res = await $fetch<User>('http://localhost:8090/api/v1/login/', {
                headers: useRequestHeaders(["cookie"]) as HeadersInit,
                method: "POST",
                body: {
                    email,
                    password,
                    rememberMe,
                },
            });
            await setToken(res.token);
            await me();

        } catch (error) {
            setToken();
            setUser();
            console.log(error);
        }
    };
    const register = async (name: string, email: string, password: string, confirmPassword: string) => {
        try {
            const res = await $fetch<User>('http://localhost:8090/api/v1/register/', {
                headers: useRequestHeaders(["cookie"]) as HeadersInit,
                method: "POST",
                body: {
                    name,
                    email,
                    password,
                    confirmPassword,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };
    const signOut = async () => {
        try {
            const response = await fetch('http://localhost:8090/api/v1/logout', {
                method: 'POST',
            });

            if (response.ok) {
                setToken();
                setUser();
                console.log('Logged out successfully');
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const me = async () => {
        if (token.value) {
            try {
                const res = await $fetch("http://localhost:8090/api/v1/user/profile", {
                    headers: useRequestHeaders(["cookie"]) as HeadersInit,
                    credentials: 'include',
                });
                if (res) {
                    await setUser(res);
                } else {

                    console.log("Dữ liệu người dùng không hợp lệ từ máy chủ");
                }
            } catch (error) {
                setUser();
                console.log(error);
            }

        }
        else {
            console.log("chưa đăng nhập bạn ơi")
        }
    };

    return { user, token, setToken, setUser, me, SignIn, signOut, register }
});