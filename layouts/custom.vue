<template>
    <div>
        <TheHeaderCustom />
        <section class=" min-h-screen flex flex-col justify-center">
            <div class="px-6 w-full mx-auto max-w-6xl">
                <slot />
                <div class="absolute inset-0">
                    <div class="background-gradient">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

