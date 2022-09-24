<script setup lang="ts">
import { LineChart } from 'vue-chart-3'
import {
    Chart,
    LineController,
    CategoryScale,
    ArcElement,
    Tooltip,
    PointElement,
    LineElement,
    LinearScale,
} from 'chart.js'
import { computed, ref } from 'vue'

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

Chart.register(
    LineController,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
)

const data = computed(() => props.data.map((d) => d.value))
const labels = computed(() => props.data.map((d) => humanDate(d.timestamp)))
const testData = ref({
    labels,
    datasets: [
        {
            data,
            label: 'Critical',
            backgroundColor: 'rgb(226,135,67)',
            borderColor: ['#e28743'],
            borderWidth: 3,
            tension: 0.5,
        },
    ],
})
</script>

<template>
    <LineChart :chart-data="testData" />
</template>

<style scoped lang="scss"></style>
