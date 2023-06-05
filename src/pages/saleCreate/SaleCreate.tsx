import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { Flex, Wrap, WrapItem, FormLabel, Switch, Button, Text, FormControl, Select, Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { ActionMenu } from "../../components/Basics/ActionMenu";
import { InputData } from "../../components/Basics/InputData";
import { Scaffold } from "../../components/Scaffold";
import { Breadcrumb } from "../../components/Basics/Breadcrumb";

import { Input } from '../../components/Basics/Input';

// models
import { Customer as CustomerModel } from '../../services/http/repositories/sales/models';
import { Saler as SalerModel } from '../../services/http/repositories/salers/models';
import { Product as ProductModel } from "../../services/http/repositories/sales/models";
import { ItemSale as ItemSaleModel } from "../../services/http/repositories/sales/models";

// repositories
import { CustomerRepository } from '../../services/http/repositories/customers/CustomerRepository';
import { SalerRepository } from '../../services/http/repositories/salers/SalerRepository';
import { ProductRepository } from "../../services/http/repositories/products/ProductRepository";

import { Loading } from "../../components/Basics/Loading";


export function SaleCreate() {

  const [isLoading, setIsLoading] = useState(false)

  const [salers, setSalers] = useState<SalerModel[]>([])
  const [customers, setCustomers] = useState<CustomerModel[]>([])
  const [products, setProducts] = useState<ProductModel[]>([])
  const [productSelect, setProductSelect] = useState<ProductModel | undefined>({} as ProductModel)
  const [itemProductsSelected, setItemProductsSelect] = useState<ItemSaleModel[]>([])
  const [qdtProduct, setQtdProduct] = useState('')


  useEffect(() => {
    const loadDatas = async () => {
      setIsLoading(true)
      const dataSalers = await SalerRepository.salers()
      const dataCustomers = await CustomerRepository.customers()
      const dataProducts = await ProductRepository.products()

      setSalers(dataSalers)
      setCustomers(dataCustomers)
      setProducts(dataProducts)
      setIsLoading(false)
    }
    loadDatas()
  }, [])

  const handleProductSelect = (codeProductSelect: string) => {
    const productSelect = products.find(
      (product) => product.code.toString() === codeProductSelect
    )
    setProductSelect(productSelect || undefined)
    console.log(productSelect?.description)
  }

  const handleItemSaleAdded = (qtd: string) => {
    const itemSale: ItemSaleModel = {
      product: productSelect,
      amount: Number(qtd)
    }

    setItemProductsSelect([...itemProductsSelected, itemSale])
  }


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

  };



  return (
    <Scaffold>
      <Breadcrumb
        items={[
          <Text as='b'>Vendas</Text>,
          <Text as='b' color='primary.600'>Nova venda</Text>
        ]}
      />
      <ActionMenu
        actions={[
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
          Dados da venda
        </Text>
        <Wrap spacing={4} p='0.2rem' as='form' id='saleCreateForm' onSubmit={handleSubmit(onSubmit)}>
          <WrapItem w='14.5rem'>
            <Input placeholder='Número da nota' {...register("invoice", { required: true })} />
          </WrapItem>
          <WrapItem w='14.5rem'>
            <Input placeholder='data' type="date" {...register("date", { required: true })} />
          </WrapItem>
          <WrapItem w='14.5rem'>
            <Select {...register("customer", { required: true })}>
              {customers.map((customer) => (
                <option value={customer.id}>{customer.name}</option>
              ))}
            </Select>
          </WrapItem>
          <WrapItem w='14.5rem'>
            <Select {...register("salers", { required: true })}>
              {salers.map((saler) => (
                <option value={saler.id}>{saler.name}</option>
              ))}
            </Select>
          </WrapItem>
        </Wrap>
      </Flex>
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
                <Wrap spacing={4} p='0.4rem'>
                  <WrapItem>
                    <Input onChange={(e) => setQtdProduct(e.target.value)} placeholder="Quantidade" type="number" name="amount" />
                  </WrapItem>
                  <WrapItem w='25rem'>
                    <Select onChange={(e) => { handleProductSelect(e.target.value) }}>
                      {products.map((product) => (
                        <option value={product.code}>{product.description}</option>
                      ))}
                    </Select>
                  </WrapItem>
                  <WrapItem>
                    <Button
                      onClick={() => handleItemSaleAdded(qdtProduct)}
                    >
                      Adiconar
                    </Button>
                  </WrapItem>
                </Wrap>
                <Table variant='table'>
                  <Thead>
                    <Tr>
                      <Td color='gray.900'>Produto</Td>
                      <Td color='gray.900'>Quantidade</Td>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {itemProductsSelected.map((product) => (
                      <Tr key={product.product?.code}>
                        <Td>{product.product?.description}</Td>
                        <Td>{product.amount}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
          }
        </Table>
        <Wrap spacing={4} p='0.2rem' mt={4}>
          <WrapItem>
            <Button
              type='submit'
              form='saleCreateForm'
            >
              Salvar venda
            </Button>
          </WrapItem>
        </Wrap>
      </Flex>
    </Scaffold>
  )
}
