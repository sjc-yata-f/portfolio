
import { Flex, Box, Heading } from '@chakra-ui/react'
import { VStack, StackDivider } from '@chakra-ui/react'

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
      <Box w="200px" p={2}>
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
        >
          <Box h='40px' bg='yellow.200'>
            1
          </Box>
          <Box h='40px' bg='tomato'>
            2
          </Box>
          <Box h='40px' bg='pink.100'>
            3
          </Box>
        </VStack>
      </Box>
    </Flex>
  )
};