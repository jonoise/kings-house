import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import '../styles/globals.css'
import Fonts from '../components/fonts'
import 'swiper/css/bundle'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
