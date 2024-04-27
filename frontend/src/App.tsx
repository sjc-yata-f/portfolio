// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import { TopPage } from './components/TopPage'

function App() {
  return (
    <ChakraProvider>
      <Box height="100vh" background="gray.100" padding={12}>
        <TopPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
