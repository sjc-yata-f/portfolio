import { Flex, Box, Heading } from '@chakra-ui/react'

export const Skills = () => {
    const Title = 'Skills';
  
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