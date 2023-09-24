<script  setup lang="ts">
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

</script>
<template>
    <div class="flex flex-col justify-center items-center h-[100vh]">
        <div
            class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
            <div class="mt-2 mb-8 w-full">

                <p class="mt-2 px-2 text-base text-gray-600">
                    Profile
                </p>
                {{ userStore }}
                <pre>{{ userStore.user }}</pre>

            </div>

        </div>

    </div>
</template>