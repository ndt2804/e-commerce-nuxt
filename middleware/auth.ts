import { useUserStore } from '@/stores/user'
export default defineNuxtRouteMiddleware(() => {
    const userStore = useUserStore();
    if (!userStore.user) {
        return navigateTo({ name: "login" });
    }
});