
export interface Product {
  description: string
  value_unit: number
  commission:number
}

export interface ItemSale {
  id: number
  product : Product
  amount: number
}

export interface Customer {
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


// commissions
 
export interface Commission {
  saler_name: string
  total_comission: number
  total_sales: number
}