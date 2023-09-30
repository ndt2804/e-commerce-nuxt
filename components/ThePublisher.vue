<script setup lang="ts">
import type { Publisher } from '~/types/publisher';
const index = ref(0);
const swiperEl = ref();
defineProps<{
    data: Publisher[];
}>();
</script>

<template>
    <div>
        <div class="flex-1 text-center lg:text-left">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Nhà Xuất Bản
            </h2>
        </div>
        <swiper ref="swiperEl" :slides-per-view="4" :spaceBetween="60" :pagination="{
            clickable: true,
        }" class="rounded-lg mx-auto mt-8" @slide-change="(swiper) => (index = swiper.activeIndex)">
            <swiper-slide v-for="product in data" class="relative overflow-hidden  bg-gray-200   ">
                <div
                    class="relative overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-150 ease-linear aspect-h-1 aspect-w-1 w-full  xl:aspect-h-8 xl:aspect-w-7">
                    <a :key="product._id" class="group">
                        <div class=" aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img :src="product.cover" :alt="product.cover"
                                class="h-full w-full object-cover object-center group-hover:opacity-75  " />
                        </div>
                    </a>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>