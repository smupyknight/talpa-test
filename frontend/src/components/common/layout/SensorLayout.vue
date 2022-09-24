<script setup lang="ts">
import SensorHeader from './SensorHeader.vue'
</script>

<template>
    <div class="">
        <SensorHeader />
        <div class="pt-100">
            <slot></slot>
        </div>
        <footer
            class="fixed bottom-0 py-5 px-10 text-center bg-gradient-to-br from-gray-500 to-gray-600 w-full"
        >
            <h3 class="text-white">
                <div>Copyright &copy; 2022 | BTRS</div>
            </h3>
        </footer>
    </div>
</template>

<style scoped lang="scss"></style>
