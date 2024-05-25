import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'

import { TopPage } from './components/TopPage'
import { Skills } from './components/Skills'
import { Works } from './components/Works'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Box height="100vh" background="gray.100" padding={12}>
          <Routes>
            <Route path='/' element={ <TopPage /> } />
            <Route path='/skills' element={ <Skills /> } />
            <Route path='/works' element={ <Works /> } />
          </Routes>
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
