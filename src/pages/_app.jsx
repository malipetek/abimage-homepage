import { PolarisProvider } from '../components/PolarisProvider'
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  return (
    <PolarisProvider>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-D1W9X7R7F0"
        strategy="afterInteractive"
      />
      <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-D1W9X7R7F0');`,
          }}
        />
      <Component {...pageProps} />
    </PolarisProvider>
  )
}