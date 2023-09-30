<template>
    <section class="w-full">
        <Disclosure v-slot="{ open }">
            <DisclosureButton
                class="flex w-full mb-4 items-center  justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 bg-primary-700 hover:bg-primary-800 focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <span>Category</span>
                <Icon :class="open ? 'rotate-90 transform' : ''" class="h-5 w-5 text-purple-500"
                    name="heroicons:chevron-right-20-solid" />
            </DisclosureButton>
            <DisclosurePanel class="px-4 pt-4 pb-5 text-sm text-gray-500">
                <div v-for="category in  categories" class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ category.name }}
                    </label>
                </div>

            </DisclosurePanel>
        </Disclosure>
        <Disclosure v-slot="{ open }">
            <DisclosureButton
                class="flex w-full mb-4 items-center  justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 bg-primary-700 hover:bg-primary-800 focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <span>Publisher</span>
                <Icon :class="open ? 'rotate-90 transform' : ''" class="h-5 w-5 text-purple-500"
                    name="heroicons:chevron-right-20-solid" />
            </DisclosureButton>
            <DisclosurePanel class="px-4 pt-5 pb-5 text-sm text-gray-500 ">
                <div v-for="publisher in  publishers" class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{
                        publisher.name }}
                    </label>
                </div>

            </DisclosurePanel>
        </Disclosure>
    </section>
</template>

<script setup >
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
const publishers = ref([]);

const { data: publisher } = await useAsyncData(async () => {
    try {
        const response = await $fetch("http://localhost:8090/api/v1/publisher");
        return response;
    } catch (error) {
        throw error;
    }
});
publishers.value = publisher.value;

const categories = ref([]);

const { data: category } = await useAsyncData(async () => {
    try {
        const response = await $fetch("http://localhost:8090/api/v1/category");
        return response;
    } catch (error) {
        throw error;
    }
});
categories.value = category.value;

</script>
  