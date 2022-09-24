<script setup lang="ts">
interface ISensorData {
    value: string
    timestamp: string
}

interface IProps {
    data: ISensorData[]
}

const props = defineProps<IProps>()
const humanDate = (dateString: string) => {
    return new Date(dateString).toISOString().slice(0, 10).replace(/-/g, ' / ')
}
</script>

<template>
    <table class="table w-full">
        <thead class="border-b-2 border-gray-400 text-xl">
            <tr>
                <td>Date</td>
                <td>Value</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(element, index) in props.data" :key="index">
                <td>
                    {{ humanDate(element?.timestamp) }}
                </td>
                <td>
                    {{ element?.value }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped lang="scss"></style>
