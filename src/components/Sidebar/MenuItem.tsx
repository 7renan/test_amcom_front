import { Icon, Text, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons"
import { Link } from "react-router-dom";

interface Props {
  name: string
  path: string
}

export function MenuItem({ name, path }: Props) {
  return (
    <HStack
      as={Link}
      to={path}
      mt="8px"
      py="4px"
      px="8px"
      borderRadius="4px"
      transition="0.2s"
      _hover={{ bg: 'rgba(0,0,0,0.2)' }}
    >
      <Text fontSize="0.87rem" color="white">{name}</Text>
    </HStack>
  )
}
