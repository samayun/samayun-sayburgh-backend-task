import 'tailwindcss/tailwind.css';
import '../styles/index.css';
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import MainAppLayout from '../layout/MainApp.layout';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <MainAppLayout {...pageProps}>
        <Component {...pageProps} />
      </MainAppLayout>
    </ApolloProvider>
  )
}

export default MyApp
