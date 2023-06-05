import { Breadcrumb as ChakraBreadcrumb, BreadcrumbItem, Flex, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { RiHome2Fill } from "react-icons/ri";
import { ReactElement } from "react";

interface afBreadProps {
  items: ReactElement[]
}


export function Breadcrumb({ items }: afBreadProps){
  return (
    <Flex mb="22px">
      <ChakraBreadcrumb separator={<ChevronRightIcon color='gray.600'/>}>
          {
            items.map((item, index) => (
              <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
            ))
          }
      </ChakraBreadcrumb>
    </Flex>
  )
}
