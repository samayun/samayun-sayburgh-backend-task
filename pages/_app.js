import 'tailwindcss/tailwind.css';
import '../styles/index.css';
import { ApolloProvider } from "@apollo/client";
import MainAppLayout from '../layout/MainApp.layout';
import { useApollo } from '../lib/apollo';
import Head from '../components/Head';
import AuthProvider from '../context/AuthReducer';


function MyApp({ Component, pageProps }) {

  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <MainAppLayout {...pageProps}>
          <Head title={pageProps.title} />
          <Component {...pageProps} />
        </MainAppLayout>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp;