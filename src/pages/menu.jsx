import { useEffect, useState } from 'react'
import { BrowserView, MobileOnlyView } from 'react-device-detect'
import DesktopMenu from '../components/desktop/menu'
import HomeHead from '../components/heads/HomeHead'
import LoadingScreen from '../components/loadingScreen'
import MobileMenu from '../components/menu'
import axios from '../lib/http'
import useProductsStore from '../stores/useProductsStore'

const Menu = ({ categories }) => {
  const [loading, setLoading] = useState(true)
  const setCategories = useProductsStore((state) => state.setCategories)
  const setCategoriesHash = useProductsStore((state) => state.setCategoriesHash)

  useEffect(() => {
    setCategories(categories)
    setCategoriesHash(categories)
    setLoading(false)
  }, [categories, setCategories, setCategoriesHash])

  return (
    <div>
      <HomeHead />
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <BrowserView>
            <DesktopMenu />
          </BrowserView>
          <MobileOnlyView>
            <MobileMenu />
          </MobileOnlyView>
        </>
      )}
    </div>
  )
}

export default Menu

export const getStaticProps = async () => {
  const res = await axios.get('products/categories')
  const categories = await res.data

  return {
    props: {
      categories,
    },
  }
}
