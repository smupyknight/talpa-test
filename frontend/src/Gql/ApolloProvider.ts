import { apolloClient } from './ApolloClient'
import { provideApolloClient } from '@vue/apollo-composable'

const apolloProvider = provideApolloClient(apolloClient)

export { apolloProvider }
