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
    }" class="" @slide-change="(swiper) => (index = swiper.activeIndex)">
        <swiper-slide v-for="product in data" class="group relative overflow-hidden  ">
            <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img :src="product.cover" :alt="product.cover"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div
                class="hover:text-gray-700 text-gray-500 mt-4  justify-between decoration-primary-400 font-condensed font-black">
                <div class="">
                    <h3 class="text-sm w-[215px]  whitespace-nowrap overflow-hidden overflow-ellipsis">
                        <a :href="'/products/' + product.slug">
                            <span aria-hidden="true" class="absolute inset-0 " />
                            {{ product.name }}
                        </a>
                    </h3>

                    <!-- <p class="text-sm   ">{{
                newProduct.price }}&nbsp;₫</p> -->
                </div>
                <div class="mt-2">
                    <p class="text-sm">{{
                        product.price }}&nbsp;₫</p>
                </div>
            </div>

        </swiper-slide>
    </swiper>
</template>