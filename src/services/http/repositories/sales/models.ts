
export interface Product {
  code: number
  description: string
  value_unit: number
  commission:number
}

export interface ItemSale {
  product : Product | undefined
  amount: number
}

export interface Customer {
  id: number
  name: string
  email: string 
  phone: string
}

export interface Saler {
  name: string
  email: string 
  phone: string
}

export interface Sale {
  id: number
  invoice: number
  date: string
  customer: Customer
  saler: Saler,
  products: ItemSale[]

}

export interface SaleCreate {
  id: number
  invoice: number
  date: string
  customer: number
  saler: number,
  products: ItemSale[] | null

}


// commissions
 
export interface Commission {
  saler_name: string
  total_comission: number
  total_sales: number
}