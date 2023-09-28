<script setup lang="ts">

import { useUserStore } from '@/stores/user'

const emit = defineEmits(["success"]);
const userStore = useUserStore();

// const { login } = useAuth();

const form = reactive({
    data: {
        email: '',
        password: '',
        rememberMe: false,
    },
    error: "",
    pending: false,
});
async function onLoginClick() {
    try {
        form.error = "";
        form.pending = true;
        await userStore.SignIn(
            form.data.email,
            form.data.password,
            form.data.rememberMe
        );
        emit("success");
    } catch (error: any) {
        console.error(error);

        // if (error.data.message) form.error = error.data.message;
    } finally {
        form.pending = false;
    }
}
</script>
<template>
    <p v-if="form.error" class="mb-3 text-red-500">
        {{ form.error }}
    </p>
    <form @submit.prevent="onLoginClick" class=" flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
    relative z-10">
        <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <h2 class="mb-5 w-full text-4xl font-medium text-center leading-snug font-serif">Đăng nhập</h2>
            <div class="relative  mb-4">
                <label for="full-name"
                    class="text-sm leading-7 text-gray-600 bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium absolute">Email</label>
                <input v-model="form.data.email" type="email" id="email" name="email"
                    class="pt-4 pr-5 pb-4 pl-5 bg-opacity-20 w-full rounded border  bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                    required />

            </div>
            <div class="relative mt-2 mb-4 pb-5">
                <label for="password"
                    class="text-sm leading-7 text-gray-600 bg-white  pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium absolute">Password</label>
                <input v-model="form.data.password" id="password" name="password" type="password"
                    class="pt-4 pr-5 pb-4 pl-5 bg-opacity-20 w-full rounded border  bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                    required />
            </div>
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                    <input v-model="form.data.rememberMe" id="remember" type="checkbox" value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <div class="relative">
                <button type="submit"
                    class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center  bg-indigo-500
            duration-200 hover:bg-indigo-600 ease rounded border-0  py-2 px-8 font-sans  text-white transition-colors   focus:outline-none">
                    <div class="text-button">Sign in</div>
                </button>
            </div>

            <div class="mt-3 text-xs ">
                <NuxtLink to="/forgot-password"
                    class=" float-left  hover:text-gray-800 rounded border-0  py-2 px-4 font-sans font-bold transition-colors duration-500  mx-auto focus:outline-none w-fit text-[#aac8e4] justify-center items-center ">
                    Forgot password?
                </NuxtLink>
                <NuxtLink to="/register"
                    class="  hover:text-gray-800 float-right rounded border-0  py-2 px-4 font-sans font-bold transition-colors duration-500  mx-auto focus:outline-none w-fit text-[#aac8e4] justify-center items-center ">
                    Create new account
                </NuxtLink>
            </div>
        </div>

    </form>
</template>