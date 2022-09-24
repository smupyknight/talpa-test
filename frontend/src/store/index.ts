import { createStore } from 'vuex'

// eslint-disable-next-line no-unused-vars
interface IAction {
    commit: Function
}

interface State {}

const state: State = {
    profiles: [],
    skills: [],
}
const mutations = {}

const actions = {}

const getters = {}

export default createStore({
    state,
    getters,
    actions,
    mutations,
})
