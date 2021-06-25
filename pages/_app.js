import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import 'tailwindcss/tailwind.css'
import MainAppLayout from '../layout/MainApp.layout'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <MainAppLayout>
        <Component {...pageProps} />
      </MainAppLayout>
    </ApolloProvider>
  )
}

export default MyApp
