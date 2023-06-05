import { useForm } from 'react-hook-form';
import { Flex, Wrap, WrapItem, FormLabel, Switch, Button, Text, FormControl } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { ActionMenu } from "../../components/Basics/ActionMenu";
import { InputData } from "../../components/Basics/InputData";
import { Scaffold } from "../../components/Scaffold";
import { Breadcrumb } from "../../components/Basics/Breadcrumb";
import { Form } from 'react-router-dom';

import { Input } from '../../components/Basics/Input';

export function SaleCreate() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

  };


  return (
    <Scaffold>
      <Breadcrumb
        items={[
          <Text as='b'>Vendas</Text>,
          <Text as='b' color='primary.600'>Nova venda</Text>
        ]}
      />
      <ActionMenu
        actions={[
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
          Dados da venda
        </Text>
        <Wrap spacing={4} p='0.2rem' as='form' id='saleCreateForm' onSubmit={handleSubmit(onSubmit)}>
          <WrapItem w='14.5rem'>
            <Input label='Número da nota' {...register("invoice")} placeholder="Invoice" />
          </WrapItem>
          <WrapItem w='14.5rem'>
            <Input label='data' type="date" {...register("date")} placeholder="Date" />
          </WrapItem>
          <WrapItem w='14.5rem'>
            <Input label='Cliente' {...register("customer")} placeholder="Customer" />
          </WrapItem>
          <WrapItem w='14.5rem'>
            <Input label='Vendedor' {...register("saler")} placeholder="Saler" />
          </WrapItem>
          <WrapItem w='14.5rem'>
            <Input label='Produtos' {...register("products")} placeholder="Products" />
          </WrapItem>
        </Wrap>
        <Wrap spacing={4} p='0.2rem' mt={4}>
          <WrapItem>
            <Button
              type='submit'
              form='saleCreateForm'
            >
              Salvar
            </Button>
          </WrapItem>
        </Wrap>
      </Flex>
    </Scaffold>
  )
}