<script setup >
const productss = ref([]);
const { data: products } = await useAsyncData(async () => {
    try {
        const response = await $fetch("http://localhost:8090/api/v1/product");
        return response;
    } catch (error) {
        throw error;
    }
});

</script>
<template>
    <div>
        <div class="container mx-auto 2xl:pb-12">
            <img class="w-full " src="~/assets/img/manga-fes.png" />
        </div>
        <div class="container flex flex-wrap justify-items items-center justify-between space-y-1 mx-auto">
            <div class="flex flex-col gap-6 md:flex-row-reverse">
                <div class="">
                    <div
                        class="flex items-center flex-1 snap-x snap-mandatory gap-6 overflow-x-scroll  sm:overflow-x-hidden sm:px-6 pb-5 font-lexend text-2xl font-bold  underline  decoration-[.2rem] underline-offset-[.2rem]">
                        <label for="voice-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input v-model="query" type="text" id="search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search  License ..." required>
                        </div>
                    </div>
                    <div class="bg-white">
                        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                <div v-for="product in products" :key="product._id" class="group relative ">
                                    <div
                                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img :src="product.cover" :alt="product.cover"
                                            class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div
                                        class="hover:text-gray-700 text-gray-500 mt-4 flex justify-between decoration-primary-400 font-condensed font-black ">
                                        <div>
                                            <h3
                                                class="text-sm w-[200px]  whitespace-nowrap overflow-hidden overflow-ellipsis  ">
                                                <a :href="'/products/' + product.slug">
                                                    <span aria-hidden="true" class="absolute inset-0 " />
                                                    {{ product.name }}
                                                </a>
                                            </h3>
                                        </div>
                                        <p class="text-sm   ">{{
                                            product.price }}&nbsp;₫</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class=" flex justify-center items-center mx-auto pb-5 py-5  ">
                        <button
                            class="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 5H1m0 0 4 4M1 5l4-4" />
                            </svg>
                            Previous
                        </button>
                        <button
                            class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div class="basis-56 lg:basis-72">
                    <div class="top-6 space-y-3 sm:sticky">
                        <form>
                            <TheFilter />
                            <div class="mb-4 mt-10">
                                <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                    class="bg-primary-700 bg-amber-400  text-sm w-48 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    type="button">
                                    Chưa lọc được :(
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>