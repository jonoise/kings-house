import { Text, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { MotionFlex } from '../motion/components'

const titleVariant = {
  show: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

const KingTitle = ({ title }) => {
  return (
    <Flex
      w="full"
      h="full"
      justify="space-between"
      align="center"
      px="5"
      py="5"
    >
      <MotionFlex variants={titleVariant} initial="hidden" animate="show">
        {[...title].map((letter, index) => {
          return <AnimateLetter letter={letter} key={index} />
        })}
      </MotionFlex>
    </Flex>
  )
}

const AnimateLetter = ({ letter }) => {
  return (
    <motion.span variants={item}>
      <Text fontSize={{ base: '5xl', lg: '90px' }} fontWeight="bold">
        {letter}
      </Text>
    </motion.span>
  )
}
export default KingTitle
