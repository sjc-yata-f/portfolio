import { Flex, Box, Heading } from '@chakra-ui/react'
import { Menu } from './Menu'

export const TopPage = () => {
  const Title = 'Portfolio App';

  return (
    <Flex 
      minWidth='max-content' 
      height="100%"
      backgroundImage="url('./nankano.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      >
      <Box flex='1'>
        <Heading size='md'>{Title}</Heading>
      </Box>
      <Menu />
    </Flex>
  )
};