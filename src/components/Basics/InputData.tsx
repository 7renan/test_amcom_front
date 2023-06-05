import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";

interface Props {
  content: String | undefined | null
  title?: String
  contentSecondary?: String
}


export function InputData({ title, content, contentSecondary }: Props) {
  return (
    <Flex
      w='full'
      display='column'
    >
      <Text
        fontSize='0.625rem'
        color='gray.700'
        fontWeight='600'
      >
        {title?.toUpperCase()}
      </Text>
      <Flex
        w='full'
        minH='2.5rem'
        mb='1rem'
        borderRadius='4px'
        pr='0.75rem'
        py='0.43rem'
      >
        <Text fontSize='0.875rem' color='gray.900' fontWeight='600'>
          {content}
        </Text>
        <Spacer />
        <Text size='0.87rem' color='gray.900' fontWeight='500'>
          {contentSecondary ?? ''}
        </Text>
      </Flex>
    </Flex>
  )
}