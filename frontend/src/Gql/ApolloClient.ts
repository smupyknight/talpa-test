import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client/core'

const httpLink = createHttpLink({
    uri: 'http://localhost:1337/graphql',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

export { apolloClient }
