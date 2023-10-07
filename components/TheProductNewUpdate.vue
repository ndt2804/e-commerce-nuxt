<script setup>
const { data } = await useAsyncData(async () => {
    try {
        const response = await $fetch("http://localhost:8090/api/v1/product/sort");
        return response;
    } catch (error) {
        throw error;
    }
});
</script>
<template>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Truyện mới cập nhật</h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8  ">
            <div v-for="newProduct in data" :key="newProduct.id" class="group relative ">
                <div
                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img :src="newProduct.cover" :alt="newProduct.cover"
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div
                    class="hover:text-gray-700 text-gray-500 mt-4  justify-between decoration-primary-400 font-condensed font-black">
                    <div class="">
                        <h3 class="text-sm w-[215px]  whitespace-nowrap overflow-hidden overflow-ellipsis">
                            <a :href="'/products/' + newProduct.slug">
                                <span aria-hidden="true" class="absolute inset-0 " />
                                {{ newProduct.name }}
                            </a>
                        </h3>

                        <!-- <p class="text-sm   ">{{
                        newProduct.price }}&nbsp;₫</p> -->
                    </div>
                    <div class="mt-2">
                        <p class="text-sm">Tập 1</p>
                    </div>
                    <div class="mt-2">
                        <p class="text-sm">{{
                            newProduct.price }}&nbsp;₫</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>