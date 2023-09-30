<script setup>

const { data } = await useAsyncData(async () => {
    try {
        const response = await $fetch("http://localhost:8090/api/v1/category/");
        return response;
    } catch (error) {
        throw error;
    }
});
</script>
<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <div v-for="callout in data" :key="callout.name" class="group relative">
                    <div
                        class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                        <img :src="callout.cover" :alt="callout.cover" class="h-full w-full object-cover object-center" />
                    </div>
                    <h3
                        class="flex items-center justify-center mt-6 text-xl text-gray-500 group-hover:decoration-primary-400 group-hover:font-condensed group-hover:font-black group-hover:decoration-[.2rem]">
                        <a :href="callout.href">
                            <span class="absolute inset-0 " />
                            {{ callout.name }}
                        </a>
                    </h3>
                    <!-- <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p> -->
                </div>
            </div>
        </div>
    </div>
</template>