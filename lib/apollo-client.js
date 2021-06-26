// ./apollo-client.js

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
function getToken(type) {
    // return sessionStorage.getItem(type);
    return typeof window === 'undefined' ? global?.sessionStorage?.getItem(type) : window?.sessionStorage?.getItem(type)
}
console.log(`acesstoken , `, getToken("access_token"))
function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: process.env.NODE_ENV === 'production' ? "https://developersbook.vercel.app/api/graphql" : "http://localhost:3000/api/graphql",
            headers: {
                'Authorization': `Bearer ${getToken('access_token')}`,
                'refreshToken': `Bearer ${getToken('refresh_token')}`,
                lang: 'en',
            },
        }),
        cache: new InMemoryCache(),
    });
}

export default createApolloClient;