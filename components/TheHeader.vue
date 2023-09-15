<template>
    <div class="min-h-full">
        <!-- component -->
        <div class="bg-white">
            <div class="border py-3 px-6">
                <div class="flex justify-between">
                    <div class="flex items-center ">
                        <TheLogo />
                    </div>
                    <div class="ml-6 flex flex-1 gap-x-3">
                        <input type="text" class="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
                            value="DJI phantom" />
                    </div>

                    <div class="ml-2 flex">

                        <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                            <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span
                                    class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span>
                            </div>
                            <span class="text-sm font-medium">Cart</span>
                        </div>
                        <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="text-sm font-medium">Thông báo</span>
                        </div>


                        <div class="flex cursor-pointer items-center gap-x-1 rounded-md  py-2 px-4 hover:bg-gray-100">
                            <Menu as="div" class="relative ml-3 ">
                                <div>
                                    <MenuButton
                                        class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span class="absolute -inset-1.5" />
                                        <span class="sr-only">Open user menu</span>
                                        <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                                    </MenuButton>
                                </div>
                                <transition enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                        <a :href="item.href"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{
                                                item.name }}</a>
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>


                    </div>
                </div>

                <div class="mt-4 flex items-center justify-between">
                    <div class="flex gap-x-2 py-1 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm font-medium">California</span>
                    </div>

                    <div class="flex gap-x-8">
                        <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Best
                            seller</span>
                        <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">New
                            Releases</span>
                        <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Books</span>
                        <span
                            class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Computers</span>
                        <span
                            class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Fashion</span>
                        <span
                            class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Health</span>
                        <span
                            class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Pharmacy</span>
                        <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Toys &
                            Games</span>
                    </div>

                    <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Becoma a
                        seller</span>
                </div>
            </div>
        </div>


    </div>
</template>
  
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
</script>