<script setup>
const { data } = await useAsyncData(async () => {
    try {
        const response = await $fetch("http://localhost:8090/api/v1/product/lastest");
        return response;
    } catch (error) {
        throw error;
    }
});
</script>
<template>
    <div
        class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Truyện mới nhất</h2>
            <p class="mt-4 text-gray-500">Bộ truyện đặc biệt mới được phát hành trong ngày gần đây nhất</p>

            <dl v-for="lastest in data"
                class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div class="border-t border-gray-200 pt-4">
                    <dt class="font-medium text-gray-900">Tên bộ truyện</dt>
                    <dd class="mt-2 text-sm text-gray-500">{{ lastest.name }}</dd>
                </div>
                <div class="border-t border-gray-200 pt-4">
                    <dt class="font-medium text-gray-900">Nhà Xuất Bản</dt>
                    <dd class="mt-2 text-sm text-gray-500">{{ lastest.publisher.name }}</dd>
                </div>
                <div class="border-t border-gray-200 pt-4">
                    <dt class="font-medium text-gray-900">Năm xuất bản</dt>
                    <dd class="mt-2 text-sm text-gray-500">{{ lastest.name }}</dd>
                </div>
                <div class="border-t border-gray-200 pt-4">

                    <dt class="font-medium text-gray-900">Kích Thước</dt>
                    <dd class="mt-2 text-sm text-gray-500">{{ lastest.category.name }}</dd>
                </div>
                <div class="border-t border-gray-200 pt-4">

                    <dt class="font-medium text-gray-900">Hình Thức</dt>
                    <dd class="mt-2 text-sm text-gray-500">{{ lastest.name }}</dd>
                </div>
                <div class="border-t border-gray-200 pt-4">
                    <dt class="font-medium text-gray-900">Nội dung</dt>
                    <dd class="mt-2 text-sm text-gray-500">{{ lastest.name }}</dd>
                </div>
            </dl>
        </div>
        <div v-for="lastest in data" class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img v-for="(imageUrl, index) in lastest.image_product" :src="imageUrl"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                class="rounded-lg bg-gray-100" />
        </div>
    </div>
</template>