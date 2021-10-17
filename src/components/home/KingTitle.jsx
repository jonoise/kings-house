import { Text, Stack, Box, Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { colors } from '../../globals'
import {
  MotionBox,
  MotionFlex,
  MotionStack,
  MotionText,
} from '../motion/components'

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
    <Stack
      w="full"
      h="full"
      justify="space-between"
      align="center"
      px="5"
      py="5"
    >
      <Stack w="full">
        <MotionText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          fontWeight="bold"
        >
          Subs & Deli
        </MotionText>
        <MotionBox
          initial={{ width: 0 }}
          animate={{ width: '25%' }}
          transition={{ duration: 1.5 }}
          id="divider"
          h="4px"
          bg={colors.main}
        />
      </Stack>
      <MotionFlex variants={titleVariant} initial="hidden" animate="show">
        {[...title].map((letter, index) => {
          return <AnimateLetter letter={letter} key={index} />
        })}
      </MotionFlex>
    </Stack>
  )
}

const AnimateLetter = ({ letter }) => {
  return (
    <motion.span variants={item}>
      {letter === ' ' ? (
        <Box px="3" />
      ) : (
        <Text
          fontFamily="Barqish"
          fontFa
          fontSize={{ base: '5xl', lg: '90px' }}
          fontWeight="bold"
        >
          {letter}
        </Text>
      )}
    </motion.span>
  )
}
export default KingTitle
