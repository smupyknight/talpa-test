<script setup lang="ts">
interface IProps {
    name: string
    long: string
    lat: string
}

const props = defineProps<IProps>()
</script>

<template>
    <div>
        <div class="text-2xl text-blue-500 text-center border-b-2 mb-10">
            {{ props.name }}
        </div>
        <div>last known Latitude : {{ props.lat }}</div>
        <div>Last known longitude : {{ props.long }}</div>
    </div>
</template>

<style scoped lang="scss"></style>
