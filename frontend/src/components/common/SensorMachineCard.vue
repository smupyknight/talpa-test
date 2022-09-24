<script setup lang="ts">
interface IProps {
    name: string
    long: string
    lat: string
}
const props = defineProps<IProps>()
console.log(props)
</script>

<template>
    <div>
        <div>{{ props.name }}</div>
        <div>last known Latitude : {{ props.lat }}</div>
        <div>Last known longitude : {{ props.long }}</div>
    </div>
</template>

<style scoped lang="scss"></style>
