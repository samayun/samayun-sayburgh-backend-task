// ./apollo-client.js

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: process.env.NODE_ENV === 'production' ? "https://developersbook.vercel.app/api/graphql" : "http://localhost:3000/api/graphql",
            headers: {
                // 'Authorization': `Bearer ${typeof window === 'undefined' ? global?.sessionStorage?.getItem("access_token") : window?.sessionStorage?.getItem('access_token')}`,
                // 'refreshToken': `Bearer ${typeof window === 'undefined' ? global?.sessionStorage?.getItem("refresh_token") : window?.sessionStorage?.getItem('refresh_token')}`,
                lang: 'en',
            },
        }),
        cache: new InMemoryCache(),
    });
}

export default createApolloClient;