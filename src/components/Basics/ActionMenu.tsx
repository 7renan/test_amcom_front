import { ReactElement, ReactNode } from "react"
import { FaPlus } from "react-icons/fa"
import {
  Text,
  Button,
  Flex,
  LinkBox,
  LinkOverlay,
  Box,
  color,
  ResponsiveValue
} from "@chakra-ui/react"
import { IconType } from "react-icons/lib"


interface ActionMenuPprops {
  text: String
  icon: IconType
  actionLink: string
  color?: ResponsiveValue<string>
}

interface Props {
  actions: ActionMenuPprops[]
}


export function ActionMenu({ actions }: Props) {


  return (
    <Flex gap={2}>
      {actions.map((action, index) => (
        <LinkBox
          key={index}
          as={Flex}
          gap={1}
          alignItems='center'
          my='1.5rem'
        >
          <LinkOverlay
            href={action.actionLink}
            color={action.color ?? 'gray.600'}
            p='0.2rem'>
            <action.icon />
          </LinkOverlay>
          <Text
            fontWeight='bold'
            color='gray.900'
            fontSize='0.75rem'
          >
            {action.text}
          </Text>
        </LinkBox>
      ))}
    </Flex>
  )

}
