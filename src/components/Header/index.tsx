import { Avatar, Flex, Menu, MenuButton, MenuList, Stack, Text, MenuItem as ChakraMenuItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

import { AppRoutes } from '../../routes/AppRoutes'

import { SIDEBAR_WIDTH } from "../Sidebar";

export const HEADER_HEIGHT = 4.375

interface Props {
  hidden: boolean
}

export function Header({ hidden }: Props) {
  const navigate = useNavigate()


  return (
    <Flex
      w="100%"
      h={`${HEADER_HEIGHT}rem`}
      borderBottomColor="gray.400"
      borderBottomWidth="1px"
      position="fixed"
      pl={`calc(${SIDEBAR_WIDTH}rem + 28px)`}
      pr="28px"
      justify="flex-end"
      align="center"
      bg="white"
      zIndex="2"
    >
      <Menu>

        <MenuList bg='white' borderColor='gray.500' shadow="sm">
          <ChakraMenuItem>Sair</ChakraMenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
