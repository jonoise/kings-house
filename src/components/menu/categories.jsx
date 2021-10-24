import useProductsStore from '../../stores/useProductsStore'
import { Flex, Text, HStack, Image } from '@chakra-ui/react'
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MotionVStack } from '../motion/components'

const MenuCategories = () => {
  SwiperCore.use([Navigation, Scrollbar, A11y])
  const categories = useProductsStore((state) => state.categories)
  const setMobileCategory = useProductsStore((state) => state.setMobileCategory)

  const handleSetStateCategory = (selectedCategory) => {
    setMobileCategory(selectedCategory)
  }

  return (
    <MotionVStack my="5">
      <Text textAlign="center" fontSize="14px" fontWeight="semibold">
        🠔 desliza para más 🠖
      </Text>
      <Flex p="2" w="full">
        <Swiper
          loop={true}
          slidesPerView={2}
          spaceBetween={20}
          onSlideChange={() => console.log('slide change')}
          className="mySwiper"
        >
          <HStack spacing="2" w="full">
            {categories.map((category) => {
              return (
                <SwiperSlide key={category.id}>
                  <Flex
                    bg="green.100"
                    p="2"
                    justify="space-evenly"
                    borderRadius="md"
                    onClick={() => handleSetStateCategory(category.slug)}
                  >
                    <Image
                      src={`/images/categories/${category.slug}.png`}
                      w="30px"
                      alt="photg"
                    />
                    <Text fontWeight="semibold">{category.name}</Text>
                  </Flex>
                </SwiperSlide>
              )
            })}
          </HStack>
        </Swiper>
      </Flex>
    </MotionVStack>
  )
}

export default MenuCategories
