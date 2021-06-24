import 'tailwindcss/tailwind.css'
import MainAppLayout from '../layout/MainApp.layout'

function MyApp({ Component, pageProps }) {
  return <MainAppLayout>
    <Component {...pageProps} />
  </MainAppLayout>
}

export default MyApp
