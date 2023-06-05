import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { AppRoutes } from '../../routes/AppRoutes'

interface Props {
  action: () => Promise<any>
  text: string
  title: string
  isOpen: boolean
  onClose: () => void
}

export function DeleteAlert({ isOpen, onClose, text, title, action }: Props) {

  const navigate = useNavigate()

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{text}</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            mr='0.2rem'
            bg='danger.500'
            onClick={() => {
              action()
              window.location.reload()
            }
            }
          >
            Excluir
          </Button>
          <Button bg='primary.600' onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}