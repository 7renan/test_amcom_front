import { background, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: String
  background?: boolean
  children: ReactNode
}

export function Card({background, title, children }: Props) {
  return (
    <Flex bg={background ? '#ffffff' : ''} w="full" display='column' borderWidth={background ? '1px':''} borderColor="gray.500" borderStyle="solid" borderRadius={background ? '4px':''} p="24px">
      <Text color='gray.900' mb='1.5rem'>
        {title}
      </Text>
      { children }
    </Flex>
  )
} 