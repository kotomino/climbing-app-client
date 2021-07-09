import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react"
import Layout from "../components/Layout"
import '../styles/globals.css'

const theme = extendTheme({})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
