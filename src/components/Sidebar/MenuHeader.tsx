import { Box, Text } from "@chakra-ui/react";

interface Props {
  children: string
}

export function MenuHeader({ children }: Props) {
  return (
    <Box mt="24px" px="8px">
      <Text textTransform="uppercase" fontSize="0.75rem" color="white">{children}</Text>
    </Box>
  )
}
