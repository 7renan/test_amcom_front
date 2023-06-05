import { Flex, Wrap, WrapItem, FormLabel, Switch, Text } from "@chakra-ui/react";
import { FaSave, FaTrash } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { ActionMenu } from "../../../components/Basics/ActionMenu";
import { Breadcrumb } from "../../../components/Basics/Breadcrumb";
import { Input } from "../../../components/Basics/Input";
import { InputData } from "../../../components/Basics/InputData";
import { Scaffold } from "../../../components/Scaffold";

export function CustomerEdit() {
  return (
    <Scaffold>
      <Breadcrumb
        items={[
          <RiHome2Fill size='1.5rem' color='gray.900' />,
          <Text as='b'>Cadastro de pessoas físicas</Text>,
          <Text as='b' color='primary.600'>Editar dados</Text>
        ]}
      />
      <ActionMenu
        actions={[
          { text: 'Salvar alterações', icon: FaSave, actionLink: "#", color: 'success.500' },
          { text: 'Descartar alterações', icon: FaTrash, actionLink: "#", color: 'danger.500' }
        ]}
      />
      <Flex
        bg='white'
        py='1.4375rem'
        px='1.5rem'
        border='1px'
        borderRadius='4px'
        borderColor='gray.500'
        flexDirection='column'
      >
        <Text
          fontSize='1.125rem'
          fontWeight='600'
          color='gray.900'
          mb='1rem'
        >
          Dados da pessoa
        </Text>
        <Wrap spacing={4} p='0.2rem'>
          <WrapItem w='14.5rem'>
            <InputData title="CÓDIGO" content="3213213" />
          </WrapItem>
          <WrapItem>
            <Input label="Nome" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Sexo" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Nascimento" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="RG" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="CPF" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="UF" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Naturalidade" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Estado civil" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Apelido" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Email" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Celular 1" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Celular 2" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Telefone fixo" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Nome do pai" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Nome da mãe" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Profissão" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Empresa" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Telefone" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Negativaddo no SPC" name="" />
          </WrapItem>
        </Wrap>
      </Flex>
      <Flex
        bg='white'
        py='1.4375rem'
        px='1.5rem'
        border='1px'
        borderRadius='4px'
        borderColor='gray.500'
        flexDirection='column'
        mt='2rem'
      >
        <Text
          fontSize='1.125rem'
          fontWeight='600'
          color='gray.900'
          mb='1rem'
        >
          Endereço
        </Text>
        <Wrap spacing={4} p='0.2rem'>
          <WrapItem>
            <Input label="CEP" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="CE" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Município" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Bairro" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Logradouro" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Número" name="" />
          </WrapItem>
          <WrapItem>
            <Input label="Complemento" name="" />
          </WrapItem>
        </Wrap>
      </Flex>
    </Scaffold>
  )
}