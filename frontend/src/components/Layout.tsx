import { Flex, Box, Heading } from '@chakra-ui/react'
import { Menu } from './Menu'

type LayoutProps = {
  title: string;
  children?: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
    return (
      <Flex 
        minWidth='max-content' 
        height="100%"
        backgroundImage="url('./nankano.svg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        >
        <Box flex='1'>
          <Heading size='md'>{title}</Heading>
          {children}
        </Box>
        <Menu />
      </Flex>
    )
  };