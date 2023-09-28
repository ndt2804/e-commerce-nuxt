<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const emit = defineEmits(["success"]);
const userStore = useUserStore();
const form = reactive({
    data: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',

    },
    error: "",
    pending: false,
});
async function onLoginClick() {
    try {
        form.error = "";
        form.pending = true;
        await userStore.register(
            form.data.name,
            form.data.email,
            form.data.password,
            form.data.confirmPassword,
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
    <form @submit.prevent="onLoginClick" class=" flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
                        relative z-10">
        <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <h2 class="mb-5  w-full text-4xl font-medium text-center leading-snug font-serif">Đăng Ký</h2>
            <div class="relative mb-4">
                <label for="full-name"
                    class="text-sm leading-7 text-gray-600 bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium absolute">Email</label>
                <input v-model="form.data.email" type="email" id="email" name="email"
                    class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                    required />
            </div>
            <div class="relative mb-4">
                <label for="full-name"
                    class="text-sm leading-7 text-gray-600 bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium absolute">Username</label>
                <input v-model="form.data.name" type="username" id="username" name="username"
                    class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                    required />
            </div>
            <div class="relative mb-4">
                <label for="full-name"
                    class="text-sm leading-7 text-gray-600 bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium absolute">Password</label>
                <input v-model="form.data.password" id="password" name="password" type="password"
                    class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                    required />
            </div>
            <div class="relative mb-4">
                <label for="full-name"
                    class="text-sm leading-7 text-gray-600 bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium absolute">Confirm
                    Password</label>
                <input v-model="form.data.confirmPassword" id="ConfirmPassword" name="ConfirmPassword" type="password"
                    class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                    required />
            </div>

            <div class="relative">
                <button type="submit"
                    class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center  bg-indigo-500
                                duration-200 hover:bg-indigo-600 ease rounded border-0  py-2 px-8 font-sans  text-white transition-colors   focus:outline-none">
                    <div class="text-button">Sign in</div>
                </button>
            </div>

            <div class="mt-2">
                <p class="mt-3 text-sm">Do you have an account yet?</p>
                <NuxtLink to="/login"
                    class="  text-sm   hover:text-gray-800 float-left rounded border-0  py-2 px-4 font-sans font-bold transition-colors duration-500  focus:outline-none w-fit text-[#aac8e4]">
                    Login
                </NuxtLink>
            </div>
        </div>

    </form>
</template>