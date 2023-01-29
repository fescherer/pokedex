import { Layout } from 'compoents/Layout'
import AppContextProvider from 'context/app.context'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { appConfig } from 'util/config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <GlobalStyles />
      <Head>
        <title>{appConfig.title}</title>
        <meta name="description" content={appConfig.metaTitleContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}
