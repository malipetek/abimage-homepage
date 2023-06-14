import { PolarisProvider } from '../components/PolarisProvider'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <PolarisProvider>
      <Component {...pageProps} />
    </PolarisProvider>
  )
}