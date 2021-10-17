import TopNav from '../components/top'
import Head from 'next/head'
import HomeLayout from '../components/home'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from '../components/loadingScreen'
import useDelay from '../hooks/useDelay'

export default function Home() {
  const loading = useDelay(2000)

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <motion.div exit={{ opacity: 0 }} key="loading">
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="homeLayout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TopNav />
            <HomeLayout />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
