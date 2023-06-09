import { useState, useEffect } from "react";

import { Scaffold } from "../../../components/Scaffold";

// repositories
import { CommissionRepository } from "../../../services/http/repositories/sales/CommissionRepository";


import { Table, TableContainer, Thead, Tr, Td, Tbody, Text, Tfoot, TableCaption, Button, Flex } from "@chakra-ui/react";
import { Input } from "../../../components/Basics/Input";
import { Action } from "../../../components/Basics/Action";
import { Loading } from "../../../components/Basics/Loading";

// models
import { Commission as CommissionModel } from "../../../services/http/repositories/sales/models";
import { Breadcrumb } from "../../../components/Basics/Breadcrumb";
import { RiHome2Fill } from "react-icons/ri";

// utils 
import { totalCommission as getTotalCommission } from "../../../services/utilities/commission";
import { number } from "yup";
import { SearchIcon } from "@chakra-ui/icons";

export function Commision() {

  const [isLoading, setIsLoading] = useState(false)
  const [commissions, setCommissions] = useState<CommissionModel[]>([])
  const [totalCommission, setTotalCommisson] = useState(0)

  const [dateInit, setDateInit] = useState('')
  const [dateFinal, setDateFinal] = useState('')



  useEffect(() => {
    const fetchSales = async () => {
      setIsLoading(true)
      const data = await CommissionRepository.commissions()
      const dataTotalCommissions = getTotalCommission(data)
      setCommissions(data)
      setTotalCommisson(dataTotalCommissions)
      setIsLoading(false)
    }

    fetchSales()
  }, [])

  return (
    <Scaffold>

      <Breadcrumb
        items={[
          <Text as='b'>Vendas</Text>,
          <Text as='b' color='primary.600'>Comissões</Text>
        ]}
      />
      <Flex
        alignItems='end'
        gap='0.5rem'
        maxWidth='42rem'
        my='1rem'
      >
        <Input label="Início" name="dateInit" onChange={(e) => setDateInit(e.target.value)} type="date" isRequired />
        <Input label="Fim" name="dateFinal" onChange={(e) => setDateFinal(e.target.value)} type="date" isRequired />
        <Button
          disabled={(dateInit && dateFinal) == ''}
          onClick={async () => {
            setIsLoading(true)
            const data = await CommissionRepository.commissions(dateInit, dateFinal)
            setCommissions(data)
            setIsLoading(false)
          }}
        >
          <SearchIcon />
        </Button>
      </Flex>
      <Table variant='table'>

        {
          isLoading ?
            <Loading /> :
            <TableContainer bg='white' border='1px' borderRadius='4px'>
              <Table variant='table'>
                <Thead>
                  <Tr>
                    <Td color='gray.900'>Vendedor</Td>
                    <Td color='gray.900'>Total comissão</Td>
                    <Td color='gray.900'>Número de vendas</Td>

                  </Tr>
                </Thead>
                <Tbody>
                  {commissions.map((commission: CommissionModel) => (
                    <Tr>
                      <Td>{commission.saler_name}</Td>
                      <Td>{commission.total_comission}</Td>
                      <Td>{commission.total_sales}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td colSpan={3}>Total comissões: R$ {totalCommission}</Td>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
        }
      </Table>
    </Scaffold>
  )
}