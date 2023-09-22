<script setup>
useHead({
    title: 'Register'
})

definePageMeta({
    layout: "custom",
});
</script>
<template>
    <main>
        <section
            class="container relative mx-auto flex flex-wrap items-center justify-center px-5 py-24 text-[#213547]  z-10">
            <form class="bg-opacity-50 mt-10 flex w-full flex-col rounded-lg bg-white p-8 md:mt-0 md:w-1/2 lg:w-2/6">
                <h2 class="mb-5 text-4xl font-bold ">Đăng kí</h2>

                <div class="relative mb-4">
                    <label for="email" class="text-sm leading-7 text-gray-400">Email</label>
                    <input type="email" id="email" name="email" placeholder="Haneko.dev@gmail.com"
                        class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-[#42d392] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                        required />
                </div>
                <div class="relative mb-4">
                    <label for="username" class="text-sm leading-7 text-gray-400">Username</label>
                    <input type="username" id="username" name="username" placeholder="nduytan"
                        class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-[#42d392] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                        required />
                </div>
                <div class="relative mb-4">
                    <label for="password" class="text-sm leading-7 text-gray-400">Password</label>
                    <input type="password" id="password" name="password"
                        class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-[#42d392] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                        required />
                </div>
                <div class="relative mb-4 pb-5">
                    <label for="confirmPassword" class="text-sm leading-7 text-gray-400">Confirm password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword"
                        class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-[#42d392] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                        required />
                </div>
                <button type="submit"
                    class=" rounded focus:outline-nonerounded border-0 bg-[#42b883] py-2 px-8   font-sans font-bold text-[#213547] transition-colors duration-500 hover:bg-[#42d392] focus:outline-none">
                    <div class="">Đăng kí</div>


                </button>

                <div class="mt-2">
                    <p class="mt-3 text-sm">Do you have an account yet?</p>
                    <NuxtLink to="/login"
                        class="  text-sm   hover:text-gray-800 float-left rounded border-0  py-2 px-4 font-sans font-bold transition-colors duration-500  focus:outline-none w-fit text-[#aac8e4]">
                        Login
                    </NuxtLink>
                </div>

            </form>
        </section>
    </main>
</template>
