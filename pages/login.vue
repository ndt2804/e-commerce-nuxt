<script lang="ts" setup >
import { useUserStore } from '@/stores/user'
definePageMeta({
    layout: "custom"
})
useHead({
    title: 'Login'
})
const email = ref('');
const password = ref('');
const userStore = useUserStore();
const signIn = async () => {
    try {
        await userStore.SignIn({
            email: email.value,
            password: password.value,
        });
        await navigateTo('/profile', { replace: true });
    } catch (error) {
        console.error('Lỗi đăng nhập:', error);
    }
}
</script>

<template>
    <div class="bg-white relative lg:py-20">
        <div class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
            xl:px-5 lg:flex-row">
            <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
                <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                    <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                        <img src="~/assets/img/book-shop.png" class="btn" />
                    </div>
                </div>
                <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                    <form @submit.prevent="signIn" class=" flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
                        relative z-10">
                        <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                            <h2 class="mb-5 w-full text-4xl font-medium text-center leading-snug font-serif">Đăng nhập</h2>
                            <div class="relative  mb-4">
                                <label for="full-name"
                                    class="text-sm leading-7 text-gray-600 bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium absolute">Email</label>
                                <input v-model="email" type="email" id="email" name="email"
                                    class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
                                    required />

                            </div>
                            <div class="relative mt-2 mb-4 pb-5">
                                <label for="password"
                                    class="text-sm leading-7 text-gray-600 bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium absolute">Password</label>
                                <input v-model="password" id="password" name="password" type="password"
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

                    <svg viewbox="0 0 91 91" class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
                  fill-current">
                        <g stroke="none" strokewidth="1" fillrule="evenodd">
                            <g fillrule="nonzero">
                                <g>
                                    <g>
                                        <circle cx="3.261" cy="3.445" r="2.72" />
                                        <circle cx="15.296" cy="3.445" r="2.719" />
                                        <circle cx="27.333" cy="3.445" r="2.72" />
                                        <circle cx="39.369" cy="3.445" r="2.72" />
                                        <circle cx="51.405" cy="3.445" r="2.72" />
                                        <circle cx="63.441" cy="3.445" r="2.72" />
                                        <circle cx="75.479" cy="3.445" r="2.72" />
                                        <circle cx="87.514" cy="3.445" r="2.719" />
                                    </g>
                                    <g transform="translate(0 12)">
                                        <circle cx="3.261" cy="3.525" r="2.72" />
                                        <circle cx="15.296" cy="3.525" r="2.719" />
                                        <circle cx="27.333" cy="3.525" r="2.72" />
                                        <circle cx="39.369" cy="3.525" r="2.72" />
                                        <circle cx="51.405" cy="3.525" r="2.72" />
                                        <circle cx="63.441" cy="3.525" r="2.72" />
                                        <circle cx="75.479" cy="3.525" r="2.72" />
                                        <circle cx="87.514" cy="3.525" r="2.719" />
                                    </g>
                                    <g transform="translate(0 24)">
                                        <circle cx="3.261" cy="3.605" r="2.72" />
                                        <circle cx="15.296" cy="3.605" r="2.719" />
                                        <circle cx="27.333" cy="3.605" r="2.72" />
                                        <circle cx="39.369" cy="3.605" r="2.72" />
                                        <circle cx="51.405" cy="3.605" r="2.72" />
                                        <circle cx="63.441" cy="3.605" r="2.72" />
                                        <circle cx="75.479" cy="3.605" r="2.72" />
                                        <circle cx="87.514" cy="3.605" r="2.719" />
                                    </g>
                                    <g transform="translate(0 36)">
                                        <circle cx="3.261" cy="3.686" r="2.72" />
                                        <circle cx="15.296" cy="3.686" r="2.719" />
                                        <circle cx="27.333" cy="3.686" r="2.72" />
                                        <circle cx="39.369" cy="3.686" r="2.72" />
                                        <circle cx="51.405" cy="3.686" r="2.72" />
                                        <circle cx="63.441" cy="3.686" r="2.72" />
                                        <circle cx="75.479" cy="3.686" r="2.72" />
                                        <circle cx="87.514" cy="3.686" r="2.719" />
                                    </g>
                                    <g transform="translate(0 49)">
                                        <circle cx="3.261" cy="2.767" r="2.72" />
                                        <circle cx="15.296" cy="2.767" r="2.719" />
                                        <circle cx="27.333" cy="2.767" r="2.72" />
                                        <circle cx="39.369" cy="2.767" r="2.72" />
                                        <circle cx="51.405" cy="2.767" r="2.72" />
                                        <circle cx="63.441" cy="2.767" r="2.72" />
                                        <circle cx="75.479" cy="2.767" r="2.72" />
                                        <circle cx="87.514" cy="2.767" r="2.719" />
                                    </g>
                                    <g transform="translate(0 61)">
                                        <circle cx="3.261" cy="2.846" r="2.72" />
                                        <circle cx="15.296" cy="2.846" r="2.719" />
                                        <circle cx="27.333" cy="2.846" r="2.72" />
                                        <circle cx="39.369" cy="2.846" r="2.72" />
                                        <circle cx="51.405" cy="2.846" r="2.72" />
                                        <circle cx="63.441" cy="2.846" r="2.72" />
                                        <circle cx="75.479" cy="2.846" r="2.72" />
                                        <circle cx="87.514" cy="2.846" r="2.719" />
                                    </g>
                                    <g transform="translate(0 73)">
                                        <circle cx="3.261" cy="2.926" r="2.72" />
                                        <circle cx="15.296" cy="2.926" r="2.719" />
                                        <circle cx="27.333" cy="2.926" r="2.72" />
                                        <circle cx="39.369" cy="2.926" r="2.72" />
                                        <circle cx="51.405" cy="2.926" r="2.72" />
                                        <circle cx="63.441" cy="2.926" r="2.72" />
                                        <circle cx="75.479" cy="2.926" r="2.72" />
                                        <circle cx="87.514" cy="2.926" r="2.719" />
                                    </g>
                                    <g transform="translate(0 85)">
                                        <circle cx="3.261" cy="3.006" r="2.72" />
                                        <circle cx="15.296" cy="3.006" r="2.719" />
                                        <circle cx="27.333" cy="3.006" r="2.72" />
                                        <circle cx="39.369" cy="3.006" r="2.72" />
                                        <circle cx="51.405" cy="3.006" r="2.72" />
                                        <circle cx="63.441" cy="3.006" r="2.72" />
                                        <circle cx="75.479" cy="3.006" r="2.72" />
                                        <circle cx="87.514" cy="3.006" r="2.719" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <svg viewbox="0 0 91 91" class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500
                  fill-current">
                        <g stroke="none" strokewidth="1" fillrule="evenodd">
                            <g fillrule="nonzero">
                                <g>
                                    <g>
                                        <circle cx="3.261" cy="3.445" r="2.72" />
                                        <circle cx="15.296" cy="3.445" r="2.719" />
                                        <circle cx="27.333" cy="3.445" r="2.72" />
                                        <circle cx="39.369" cy="3.445" r="2.72" />
                                        <circle cx="51.405" cy="3.445" r="2.72" />
                                        <circle cx="63.441" cy="3.445" r="2.72" />
                                        <circle cx="75.479" cy="3.445" r="2.72" />
                                        <circle cx="87.514" cy="3.445" r="2.719" />
                                    </g>
                                    <g transform="translate(0 12)">
                                        <circle cx="3.261" cy="3.525" r="2.72" />
                                        <circle cx="15.296" cy="3.525" r="2.719" />
                                        <circle cx="27.333" cy="3.525" r="2.72" />
                                        <circle cx="39.369" cy="3.525" r="2.72" />
                                        <circle cx="51.405" cy="3.525" r="2.72" />
                                        <circle cx="63.441" cy="3.525" r="2.72" />
                                        <circle cx="75.479" cy="3.525" r="2.72" />
                                        <circle cx="87.514" cy="3.525" r="2.719" />
                                    </g>
                                    <g transform="translate(0 24)">
                                        <circle cx="3.261" cy="3.605" r="2.72" />
                                        <circle cx="15.296" cy="3.605" r="2.719" />
                                        <circle cx="27.333" cy="3.605" r="2.72" />
                                        <circle cx="39.369" cy="3.605" r="2.72" />
                                        <circle cx="51.405" cy="3.605" r="2.72" />
                                        <circle cx="63.441" cy="3.605" r="2.72" />
                                        <circle cx="75.479" cy="3.605" r="2.72" />
                                        <circle cx="87.514" cy="3.605" r="2.719" />
                                    </g>
                                    <g transform="translate(0 36)">
                                        <circle cx="3.261" cy="3.686" r="2.72" />
                                        <circle cx="15.296" cy="3.686" r="2.719" />
                                        <circle cx="27.333" cy="3.686" r="2.72" />
                                        <circle cx="39.369" cy="3.686" r="2.72" />
                                        <circle cx="51.405" cy="3.686" r="2.72" />
                                        <circle cx="63.441" cy="3.686" r="2.72" />
                                        <circle cx="75.479" cy="3.686" r="2.72" />
                                        <circle cx="87.514" cy="3.686" r="2.719" />
                                    </g>
                                    <g transform="translate(0 49)">
                                        <circle cx="3.261" cy="2.767" r="2.72" />
                                        <circle cx="15.296" cy="2.767" r="2.719" />
                                        <circle cx="27.333" cy="2.767" r="2.72" />
                                        <circle cx="39.369" cy="2.767" r="2.72" />
                                        <circle cx="51.405" cy="2.767" r="2.72" />
                                        <circle cx="63.441" cy="2.767" r="2.72" />
                                        <circle cx="75.479" cy="2.767" r="2.72" />
                                        <circle cx="87.514" cy="2.767" r="2.719" />
                                    </g>
                                    <g transform="translate(0 61)">
                                        <circle cx="3.261" cy="2.846" r="2.72" />
                                        <circle cx="15.296" cy="2.846" r="2.719" />
                                        <circle cx="27.333" cy="2.846" r="2.72" />
                                        <circle cx="39.369" cy="2.846" r="2.72" />
                                        <circle cx="51.405" cy="2.846" r="2.72" />
                                        <circle cx="63.441" cy="2.846" r="2.72" />
                                        <circle cx="75.479" cy="2.846" r="2.72" />
                                        <circle cx="87.514" cy="2.846" r="2.719" />
                                    </g>
                                    <g transform="translate(0 73)">
                                        <circle cx="3.261" cy="2.926" r="2.72" />
                                        <circle cx="15.296" cy="2.926" r="2.719" />
                                        <circle cx="27.333" cy="2.926" r="2.72" />
                                        <circle cx="39.369" cy="2.926" r="2.72" />
                                        <circle cx="51.405" cy="2.926" r="2.72" />
                                        <circle cx="63.441" cy="2.926" r="2.72" />
                                        <circle cx="75.479" cy="2.926" r="2.72" />
                                        <circle cx="87.514" cy="2.926" r="2.719" />
                                    </g>
                                    <g transform="translate(0 85)">
                                        <circle cx="3.261" cy="3.006" r="2.72" />
                                        <circle cx="15.296" cy="3.006" r="2.719" />
                                        <circle cx="27.333" cy="3.006" r="2.72" />
                                        <circle cx="39.369" cy="3.006" r="2.72" />
                                        <circle cx="51.405" cy="3.006" r="2.72" />
                                        <circle cx="63.441" cy="3.006" r="2.72" />
                                        <circle cx="75.479" cy="3.006" r="2.72" />
                                        <circle cx="87.514" cy="3.006" r="2.719" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
