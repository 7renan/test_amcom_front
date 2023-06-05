import { ReactNode } from "react"
import { Flex, useBreakpointValue } from "@chakra-ui/react"

import { Sidebar, SIDEBAR_WIDTH } from "../Sidebar"
import { Header, HEADER_HEIGHT } from "../Header"

interface Props {
  children: ReactNode
}

export function Scaffold({ children }: Props) {
  const isSmallScreen = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Flex>
      <Sidebar hidden={!!isSmallScreen} />
      <Flex
        flexDir="column"
        pl={!!isSmallScreen ? '32px' : `calc(${SIDEBAR_WIDTH}rem + 32px)`}
        pr="32px"
        pt={`calc(${HEADER_HEIGHT}rem + 24px)`}
        pb="24px"
        w="full"
      >
        {children}
      </Flex>
    </Flex>
  )
}
