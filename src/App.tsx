import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import './styles/custom.css'

import { MainRoutes } from "./routes";
import { theme } from './styles/themes/default'

export default function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ChakraProvider>
  )
}
