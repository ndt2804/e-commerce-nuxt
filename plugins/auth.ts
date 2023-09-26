import { useUserStore } from '@/stores/user'

export default defineNuxtPlugin(async (nuxtApp) => {
    const userStore = useUserStore();

    await userStore.me();


});