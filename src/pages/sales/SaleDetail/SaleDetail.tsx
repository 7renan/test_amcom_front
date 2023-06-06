import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { RiHome2Fill } from "react-icons/ri";
import { Breadcrumb } from "../../../components/Basics/Breadcrumb";
import { Scaffold } from "../../../components/Scaffold";
import {
  Text,
  Flex,
  Checkbox,
  Stack,
  Wrap,
  WrapItem,
  Badge,
  LinkBox,
  LinkOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr
} from "@chakra-ui/react"
import { ActionMenu } from "../../../components/Basics/ActionMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import { InputData } from "../../../components/Basics/InputData";
import { AppRoutes } from "../../../routes/AppRoutes";

import { Loading } from "../../../components/Basics/Loading";
// models
import { Product, Sale as SaleModel } from "../../../services/http/repositories/sales/models"

import { SaleRepository } from "../../../services/http/repositories/sales/SaleRepository";


// utils
import { commission } from "../../../services/utilities/commission";


export function SaleDetail() {

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
          <Text as='b' color='primary.600'>Detalhe de venda</Text>
        ]}
      />
      <ActionMenu
        actions={[
          { text: 'Alterar dados', icon: FaEdit, actionLink: `${AppRoutes.saleEdit}/${id}`, color: 'warning.500' },
        ]}
      />
      {
        isLoading ?
          <Loading /> :
          <>
            <Flex
              p='1.5rem'
              bg='white'
              border='1px'
              borderRadius='4px'
              borderColor='gray.500'
              flexDirection='column'
            >
              <Text
                color='gray.900'
                fontSize='1.125rem'
                fontWeight='600'
                mb='1rem'
              >
                Dados do vendedor
              </Text>
              <Wrap spacing='4rem'>
                <WrapItem>
                  <InputData title='Número da nota' content={String(sale?.invoice)} />
                </WrapItem>
                <WrapItem>
                  <InputData title='CLIENTE' content={sale?.customer.name} />
                </WrapItem>
                <WrapItem>
                  <InputData title='VENDEDOR' content={sale?.saler.name} />
                </WrapItem>
              </Wrap>
            </Flex>
            {/* address */}
            <Flex
              p='1.5rem'
              bg='white'
              border='1px'
              borderRadius='4px'
              borderColor='gray.500'
              flexDirection='column'
              mt='2rem'
            >
              <Text
                color='gray.900'
                fontSize='1.125rem'
                fontWeight='600'
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
                              <Td>{product.product?.description}</Td>
                              <Td>{product.amount}</Td>
                              <Td>{product.product?.value_unit}</Td>
                              <Td>{`${product.product?.value_unit * product.amount}`} %</Td>
                              <Td>{product.product?.commission}</Td>
                              <Td>R$ {commission(product.product?.value_unit, product.product?.commission, product.amount)}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                }
              </Table>
            </Flex>
          </>
      }
    </Scaffold>
  )
}