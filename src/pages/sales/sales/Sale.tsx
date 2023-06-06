import { useState, useEffect } from "react";

import { Scaffold } from "../../../components/Scaffold";
import { Badge, Button, Container, FormControl, FormLabel, Grid, GridItem, LinkBox, LinkOverlay, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { AppRoutes } from "../../../routes/AppRoutes";

import { Loading } from "../../../components/Basics/Loading";

// models
import { SaleCreate, Sale as SaleModel } from "../../../services/http/repositories/sales/models"
import { SaleRepository } from "../../../services/http/repositories/sales/SaleRepository";
import { Action } from "../../../components/Basics/Action";
import { DeleteAlert } from "../../../components/Basics/DeleteAlert";
import { Breadcrumb } from "../../../components/Basics/Breadcrumb";
import { ActionMenu } from "../../../components/Basics/ActionMenu";
import { FaPlus } from "react-icons/fa";

// utils
import { totalSales } from "../../../services/utilities/sales";


export function Sale() {
  const [isLoading, setIsLoading] = useState(false)
  const [sales, setSales] = useState<SaleModel[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()


  useEffect(() => {
    const fetchSales = async () => {
      setIsLoading(true)
      const data = await SaleRepository.saleList()
      setSales(data)
      setIsLoading(false)
    }

    fetchSales()
  }, [])


  return (
    <Scaffold>

      <Breadcrumb
        items={[
          <Text as='b' color='primary.600'>Vendas</Text>
        ]}
      />
      <ActionMenu
        actions={[
          { text: 'Adicionar vendas', icon: FaPlus, actionLink: AppRoutes.saleCreate, color: 'primary.500' },
        ]}
      />
      <Table variant='table'>

        {
          isLoading ?
            <Loading /> :
            <TableContainer bg='white' border='1px' borderRadius='4px'>
              <Table variant='table'>
                <Thead>
                  <Tr>
                    <Td color='gray.900'>Nota fiscal</Td>
                    <Td color='gray.900'>Cliente</Td>
                    <Td color='gray.900'>Vendedor</Td>
                    <Td color='gray.900'>Data da venda</Td>
                    <Td color='gray.900'>Valor total</Td>
                    <Td color='gray.900'>Opções</Td>
                  </Tr>
                </Thead>
                <Tbody>
                  {sales.map((itemSale) => (
                    <Tr key={itemSale.id}>
                      {/* model delete  */}
                      <DeleteAlert
                        isOpen={isOpen}
                        onClose={onClose}
                        title='Excluir venda'
                        text='Tem certeza que deseja excluir esta venda ?'
                        action={() => SaleRepository.saleDelete(itemSale.id)}
                      />
                      <LinkBox as={Td}>
                        <LinkOverlay href={`${AppRoutes.saleDetail}/${itemSale.id}`}>
                          <Badge
                            bg='gray.700'
                            color='white'
                            borderRadius='10px'
                            px='8px'
                            py='2px'
                          >
                            {itemSale.invoice}
                          </Badge>
                        </LinkOverlay>
                      </LinkBox>
                      <Td>{itemSale.customer.name}</Td>
                      <Td>{itemSale.saler.name}</Td>
                      <Td>{itemSale.date}</Td>
                      <Td>{totalSales(itemSale)}</Td>
                      <Td>
                        <Action actions={[
                          { name: 'Editar venda', linkAction: () => { } },
                          { name: 'Excluir venda', linkAction: () => onOpen() },
                        ]} />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
        }
      </Table>
    </Scaffold>
  )
}