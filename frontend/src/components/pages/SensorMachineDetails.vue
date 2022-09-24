<script lang="ts" setup>
import { useQuery } from '@vue/apollo-composable'
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { GETMACHINE, GETSENSORDATA } from '../../Gql/Queries'
import SensorTable from '../common/SensorTable.vue'
import SensorChart from '../common/SensorChart.vue'

const route = useRoute()
const where = { name: route.params.name }
const from = ref('1994-01-01T00:00:00.000Z')
const to = ref('2023-01-01T00:00:00.000Z')
const name = ref(route.params.name)
const sname = ref('')
const display = ref(1)
const mach = ref()
const data = ref()
let machine = useQuery(GETMACHINE, { where })
let sensordata = useQuery(GETSENSORDATA, {
    from: from.value,
    name: name.value,
    to: to.value,
    sname: sname.value,
})

watch(machine.result, (cb) => {
    mach.value = cb.machine
    sname.value = cb.machine.sensors[0]?.name
    sensordata.refetch({
        from: from.value,
        name: name.value,
        to: to.value,
        sname: sname.value,
    })
})

watch(sensordata.result, (cb) => {
    data.value = cb.sensorData
})

const setSensor = (sensor: string) => {
    sname.value = sensor
    sensordata.refetch({
        from: from.value,
        name: name.value,
        to: to.value,
        sname: sname.value,
    })
}
const setDisplay = (displayType: number) => {
    display.value = displayType
}

onMounted(() => {
    sensordata.refetch({
        from: from.value,
        name: name.value,
        to: to.value,
        sname: sname.value,
    })
    machine.refetch({ where })
})
</script>

<template>
    <section
        id="machine-details"
        class="gap-4 mt-10 mb-24 px-10 border shadow shadow-gray-400 p-10 m-10 overflow-y-auto overflow-x-hidden"
    >
        <h3 class="text-2xl text-blue-500 text-center border-b-2 mb-10">
            {{ mach?.name }}
        </h3>

        <div class="grid grid-cols-2 lg:grid-cols-2 gap-20 mb-10">
            <button
                class="bg-gradient-to-br from-gray-500 to-gray-700 text-white hover:from-gray-600 hover:to-gray-800 py-2 px-20 w-fit place-self-center"
                @click="setDisplay(1)"
            >
                List
            </button>
            <button
                class="bg-gradient-to-br from-gray-500 to-gray-700 text-white hover:from-gray-600 hover:to-gray-800 py-2 px-20 w-fit place-self-center"
                @click="setDisplay(2)"
            >
                Chart
            </button>
        </div>
        <div
            class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mb-10"
        >
            <button
                v-for="(element, index) in mach?.sensors"
                :key="index"
                class="bg-gradient-to-br from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 py-2"
                @click="setSensor(element?.name)"
            >
                {{ element?.name }}
            </button>
        </div>
        <SensorTable v-if="display === 1" :data="data" />
        <SensorChart v-if="display === 2" :data="data" />
    </section>
</template>

<style lang="scss" scoped></style>
