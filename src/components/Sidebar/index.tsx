import { Flex, Image } from "@chakra-ui/react"
import {
  RiHome2Fill,
} from "react-icons/ri"
import { AppRoutes } from "../../routes/AppRoutes"


import { MenuHeader } from "./MenuHeader"
import { MenuItem } from "./MenuItem"

export const SIDEBAR_WIDTH = 15

interface Props {
  hidden: boolean
}

export function Sidebar({ hidden }: Props) {
  return (
    <Flex
      w={`${SIDEBAR_WIDTH}rem`}
      h="100vh"
      position="fixed"
      top="0"
      left="0"
      bg="gray.900"
      hidden={hidden}
      px="20px"
      py="24px"
      flexDir="column"
      overflowY="auto"
      zIndex="3"
    >

      <MenuHeader>AMCOM</MenuHeader>
      <MenuItem name="Vendas" path={AppRoutes.saleList} />
      <MenuItem name="Comissões" path="#" />
    </Flex>
  )
}
