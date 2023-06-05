import { useState, useEffect } from "react";

import { Scaffold } from "../../../components/Scaffold";

// repositories
import { CommissionRepository } from "../../../services/http/repositories/sales/CommissionRepository";


import { Table, TableContainer, Thead, Tr, Td, Tbody } from "@chakra-ui/react";
import { Action } from "../../../components/Basics/Action";
import { Loading } from "../../../components/Basics/Loading";

// models
import { Commission as CommissionModel } from "../../../services/http/repositories/sales/models";

export function Commision() {

  const [isLoading, setIsLoading] = useState(false)
  const [commissions, setCommissions] = useState<CommissionModel[]>([])



  useEffect(() => {
    const fetchSales = async () => {
      setIsLoading(true)
      const data = await CommissionRepository.commissions()
      setCommissions(data)
      setIsLoading(false)
    }

    fetchSales()
  }, [])

  return (
    <Scaffold>
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
                      <Td>-- --</Td>
                      <Td>{commission.total_comission}</Td>
                      <Td>{commission.total_salers}</Td>
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