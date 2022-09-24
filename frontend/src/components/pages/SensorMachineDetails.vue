<script lang="ts" setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const where = { name: route.params.name }
const from = ref('1994-01-01T00:00:00.000Z')
const to = ref('2023-01-01T00:00:00.000Z')
const name = ref(route.params.name)
const GETMACHINE = gql`
    query ($where: MachineWhereUniqInput!) {
        machine(where: $where) {
            name
            sensors {
                name
            }
        }
    }
`

const machine = useQuery(GETMACHINE, { where })
const GETSENSORDATA = gql`
    query ($from: DateTime!, $name: String!, $to: DateTime!) {
        sensorData(from: $from, name: $name, to: $to) {
            value
            timestamp
        }
    }
`

const sensordata = useQuery(GETSENSORDATA, {
    from: from.value,
    name: name.value,
    to: to.value,
})

const mach = ref()
const data = ref()

watch(machine.result, (cb) => {
    mach.value = cb.machine
})

watch(sensordata.result, (cb) => {
    data.value = cb.sensorData
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
        <div
            class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
            <div v-for="(element, index) in mach?.sensors" :key="index">
                {{ element?.name }}
            </div>
        </div>
        <div v-for="(element, index) in data" :key="index">
            {{ element?.value }}
            {{ element?.timestamp }}
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
