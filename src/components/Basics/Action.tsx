import { Box, Button, LinkBox, LinkOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";

const styleContent = {
  border: '1px solid #DADADA',
  borderRadius: '4px',
  width: 'auto',
}

interface ActionProps {
  name: string | any
  linkAction: () => void
}

interface Props {
  actions?: ActionProps[]
}

export function Action({ actions }: Props) {
  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Box>
          <FaEllipsisH />
        </Box>
      </PopoverTrigger>
      <PopoverContent style={styleContent} >
        {
          actions?.map((action, index) => (
            <LinkBox px='1rem' py='0.5rem' _hover={{ bg: 'gray.300' }} key={index}>
              <LinkOverlay onClick={() => action.linkAction()}>
                {action.name}
              </LinkOverlay>
            </LinkBox>
          ))
        }
      </PopoverContent>
    </Popover>
  )
}
