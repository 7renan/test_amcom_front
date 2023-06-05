import { Button, Tab, Text } from "@chakra-ui/react"


interface Props {
  text: String
}

export function TabMenu({ text }: Props) {
  return (
    <Tab
      _selected={{ color: 'white', bg: 'primary.600' }}
      border='1px'
      borderColor='#DADADA'
      borderRadius='0'
      bg='white'
      color='primary.600'
      px='1.5rem'
      py='0.625rem'
      _hover={{
        color: 'white',
        bg: 'primary.600'
      }}
    >
      <Text
        fontSize='0.875rem'
        fontWeight='500'
      >
        {text}
      </Text>
    </Tab>
  )
}