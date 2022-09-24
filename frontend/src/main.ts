import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router/index'
import { apolloClient } from './Gql/ApolloClient'
import './style.css'

createApp({
    setup: () => {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})
    .use(router)
    .mount('#app')
