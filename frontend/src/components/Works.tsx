import { Flex, Box, Heading } from '@chakra-ui/react'

export const Works = () => {
    const Title = 'Works';
  
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
      </Flex>
    )
  };