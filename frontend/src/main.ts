import { createApp, provide, h } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './Gql/ApolloClient'

createApp({
    setup: () => {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})
    .use(router)
    .mount('#app')
