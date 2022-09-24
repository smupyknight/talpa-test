<script setup lang="ts">
import SensorMachineCard from './SensorMachineCard.vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { watch } from 'vue'

const GETALLMACHINES = gql`
    query Query {
        machines {
            name
            lastKnownPosition {
                lat
                long
            }
        }
    }
`

const { result } = useQuery(GETALLMACHINES)
watch(result, (result) => {
  console.log(result)
})
</script>

<template>
    <ul
        class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-24 px-10 border shadow shadow-gray-400 p-10 m-10 overflow-y-auto overflow-x-hidden"
    >
        <router-link
            v-for="machine in result?.machines"
            :key="machine.name"
            :to="machine.name"
            class="shadow shadow-gray-400 border border-gray-500 py-10 px-5 bg-gradient-to-br from-blue-50 to-blue-100"
        >
            <SensorMachineCard
                :name="machine.name"
                :long="machine.lastKnownPosition?.long"
                :lat="machine.lastKnownPosition?.lat"
            />
        </router-link>
    </ul>
</template>

<style scoped lang="scss"></style>
