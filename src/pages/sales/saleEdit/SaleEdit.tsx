import { useState, useEffect } from "react";

import { Flex, Wrap, WrapItem, FormLabel, Switch, Text, Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { FaSave, FaTrash } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { ActionMenu } from "../../../components/Basics/ActionMenu";
import { Breadcrumb } from "../../../components/Basics/Breadcrumb";
import { Input } from "../../../components/Basics/Input";
import { InputData } from "../../../components/Basics/InputData";
import { Scaffold } from "../../../components/Scaffold";

import { Loading } from "../../../components/Basics/Loading";
// models
import { Product, Sale as SaleModel } from "../../../services/http/repositories/sales/models"

import { SaleRepository } from "../../../services/http/repositories/sales/SaleRepository";
import { useParams } from "react-router-dom";
import { commission } from "../../../services/utilities/commission";


export function SaleEdit() {

  const [isLoading, setIsLoading] = useState(false)
  const [sale, setSale] = useState<SaleModel | undefined>(undefined)
  const { id } = useParams()

  useEffect(() => {
    const getSales = async () => {
      setIsLoading(true)
      const data = await SaleRepository.saleDetail(Number(id))
      setSale(data)
      setIsLoading(false)
    }
    getSales()
  }, [])

  return (
    <Scaffold>
      <Breadcrumb
        items={[
          <RiHome2Fill size='1.5rem' color='gray.900' />,
          <Text as='b'>Vendas</Text>,
          <Text as='b'>Detalhes da venda</Text>,
          <Text as='b' color='primary.600'>Editar venda</Text>
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
            <InputData title="NÚMERO DA NOTA" content={String(sale?.invoice)} />
          </WrapItem>
          <WrapItem>
            <Input label="Cliente" name="customer" value={sale?.customer.name} />
          </WrapItem>
          <WrapItem>
            <Input label="Vendedor" name="saler" value={sale?.saler.name} />
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
          Produtos
        </Text>
        <Table variant='table'>

          {
            isLoading ?
              <Loading /> :
              <TableContainer bg='white' border='1px' borderRadius='4px'>
                <Table variant='table'>
                  <Thead>
                    <Tr>
                      <Td color='gray.900'>Produto</Td>
                      <Td color='gray.900'>Quantidade</Td>
                      <Td color='gray.900'>Preço unitário</Td>
                      <Td color='gray.900'>Total do produto</Td>
                      <Td color='gray.900'>% de comissão</Td>
                      <Td color='gray.900'>Comissão</Td>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {sale?.products.map((product) => (
                      <Tr key={product.id}>
                        <Td>{product.product.description}</Td>
                        <Td>{product.amount}</Td>
                        <Td>{product.product.value_unit}</Td>
                        <Td>{`${product.product.value_unit * product.amount}`} %</Td>
                        <Td>{product.product.commission}</Td>
                        <Td>R$ {commission(product.product.value_unit, product.product.commission, product.amount)}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
          }
        </Table>
      </Flex>
    </Scaffold>
  )
}