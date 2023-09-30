<script setup lang="ts">
import type { Product } from '~/types/product';
const index = ref(0);
const swiperEl = ref();
defineProps<{
    data: Product[];
}>();
</script>

<template>
    <swiper ref="swiperEl" :slides-per-view="5" :spaceBetween="30" :pagination="{
        clickable: true,
    }" class="rounded-lg" @slide-change="(swiper) => (index = swiper.activeIndex)">
        <swiper-slide v-for="product in data" class="relative overflow-hidden rounded-lg h-fit bg-gray-200  ">
            <div
                class="relative overflow-hidden rounded-md h-fit shadow-md  hover:shadow-lg transition-shadow duration-150 ease-linear aspect-h-1 aspect-w-1 w-full  xl:aspect-h-8 xl:aspect-w-7">
                <a :key="product._id" class="group">
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img :src="product.cover" :alt="product.cover"
                            class="h-full w-full object-cover object-center group-hover:opacity-75 aspect-[2/3] " />
                    </div>
                    <h3
                        class="mt-4 text-sm text-gray-700 group-hover:decoration-primary-400 group-hover:font-condensed group-hover:font-black group-hover:decoration-[.2rem] ">
                        {{ product.name }}</h3>
                    <div class="mt-1 text-lg"><span class="block text-gray-900 font-medium  dark:text-gray-400">{{
                        product.price
                    }}&nbsp;₫</span>
                    </div>
                </a>
            </div>
        </swiper-slide>
    </swiper>
</template>