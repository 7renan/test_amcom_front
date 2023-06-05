
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

// export interface SaleCreateData {
//   name: string
//   phone: string
//   phone2: string
//   email: string
//   gender: string
//   birth_date: Date | undefined
//   document: string
//   rg: string
//   place_of_birth: string
//   monther_name: string
//   father_name: string
//   in_spc: boolean
//   monthly_income: number | null
//   is_employee: boolean
//   profession: string
//   address: AddressCreateData
//   region: number | null
// }