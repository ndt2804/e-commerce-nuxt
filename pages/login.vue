<script setup lang="ts">
definePageMeta({
    layout: "custom"
})
useHead({
    title: 'Login'
})
</script>

<template>
    <div class="container relative flex flex-wrap items-center justify-center px-5 py-24 mx-auto text-[#213547] z-10 ">
        <form
            class="bg-opacity-50 mt-10 flex  flex-col rounded-lg  p-8 md:mt-0 md:w-1/2 lg:w-2/6  max-w-75 w-full bg-white">
            <h2 class="mb-5 text-4xl font-bold ">Đăng nhập</h2>
            <div class=" mb-4">
                <label for="full-name" class="text-sm leading-7 text-gray-600">Email</label>
                <input type="email" id="email" name="email"
                    class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                    required />
            </div>
            <div class="mb-4 pb-5">
                <label for="password" class="text-sm leading-7 text-gray-600">Password</label>
                <input id="password" name="password" type="password"
                    class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                    required />
            </div>
            <button type="submit"
                class="rounded border-0 bg-[#42b883] py-2 px-8 font-sans font-bold text-[#213547] transition-colors duration-500  hover:bg-[#42d392] focus:outline-none">
                <div class="text-button">Sign in</div>
            </button>

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
        </form>
    </div>
</template>
