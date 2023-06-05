// models
import { Commission as CommissionModel } from "../http/repositories/sales/models"

export function commission(value: number, percentual: number, qtd: number) {
  return value * (percentual/100)
}

export function totalCommission(commissions: CommissionModel[]){
  const valuesCommissions = commissions.map((commission) => commission.total_comission)
  const totalValueCommisions = valuesCommissions.reduce((acumulator, actualValue) => {
    return acumulator+= actualValue
  })

  return totalValueCommisions
}