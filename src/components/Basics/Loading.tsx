import { Flex, Spinner } from "@chakra-ui/react";

export function Loading() {
  return (
    <Flex
      width='full'
      justifyContent='center'
    >
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='primary.500'
        color='gray.200'
        size='xl'
      />
    </Flex>
  )
}