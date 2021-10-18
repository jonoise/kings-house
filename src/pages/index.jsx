import TopNav from '../components/top'
import HomeLayout from '../components/home'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from '../components/loadingScreen'
import useDelay from '../hooks/useDelay'
import { BrowserView, MobileOnlyView } from 'react-device-detect'
import DesktopHome from '../components/desktop/Home'
import HomeHead from '../components/heads/HomeHead'

export default function Home() {
  const loading = useDelay(2000)

  return (
    <>
      <HomeHead />
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <motion.div exit={{ opacity: 0 }} key="loading">
            <LoadingScreen />
          </motion.div>
        ) : (
          <>
            <MobileOnlyView>
              <motion.div
                key="homeLayout"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <TopNav />
                <HomeLayout />
              </motion.div>
            </MobileOnlyView>
            <BrowserView>
              <DesktopHome />
            </BrowserView>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
