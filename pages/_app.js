import 'tailwindcss/tailwind.css';
import '../styles/index.css';
import { ApolloProvider } from "@apollo/client";
import MainAppLayout from '../layout/MainApp.layout';
import { useApollo } from '../lib/apollo';
import Head from '../components/Head';


function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <MainAppLayout {...pageProps}>
        <Head title={pageProps.title} />
        <Component {...pageProps} />
      </MainAppLayout>
    </ApolloProvider>
  )
}

export default MyApp;