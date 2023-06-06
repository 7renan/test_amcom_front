import { Sale } from "../http/repositories/sales/models"

export function totalSales(sale: Sale){
  const totalValuesSales = sale.products?.map((product) => (product.product?.value_unit * product.amount))
  return totalValuesSales
}