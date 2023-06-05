import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { InputData } from "../../../components/Basics/InputData";
import { Input } from "../../../components/Basics/Input";
import { Scaffold } from "../../../components/Scaffold";
import {
  Flex,
  Wrap,
  WrapItem,
  Text,
  useToast,
  FormLabel,
  Switch,
  Button
} from "@chakra-ui/react";
import { Breadcrumb } from "../../../components/Basics/Breadcrumb";
import { RiHome2Fill } from "react-icons/ri";
import { ActionMenu } from "../../../components/Basics/ActionMenu";
import { FaPlusSquare, FaSave, FaTrash } from "react-icons/fa";
import { AppRoutes } from "../../../routes/AppRoutes";

import { AppError } from "../../../services/http/erros/AppError";

export function CustomerCreate() {

  const toast = useToast()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [phone2, setPhone2] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('MALE')
  const [birthDate, setBirth_date] = useState('')
  const [document, setDocument] = useState('')
  const [rg, setRg] = useState('')
  const [placeOfBirth, setplaceOfBirth] = useState('')
  const [montherName, setMontherName] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [inSpc, setinSpc] = useState('')
  const [monthlyIncome, setMonthlyIncome] = useState<number | null>(null)
  const [isEmployee, setisEmployee] = useState('')
  const [profession, setProfession] = useState('')
  const [regionId, setRegionId] = useState<number | null>(null)

  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [complement, setComplement] = useState('')

  return (
    <Scaffold>
      <Breadcrumb
        items={[
          <RiHome2Fill size='1.5rem' color='gray.900' />,
          <Text as='b'>Cadastro de pessoas físicas</Text>,
          <Text as='b' color='primary.600'>Novo cadastro</Text>
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
          Dados da pessoa
        </Text>
        <Wrap spacing={4} p='0.2rem'>
          <WrapItem w='14.5rem'>
            <InputData title="CÓDIGO" content="3213213" />
          </WrapItem>
          <WrapItem>
            <Input label="Nome" value={name} onChange={(e) => setName(e.target.value)} name="name" />
          </WrapItem>
          <WrapItem>
            <Input label="Sexo" value={gender} onChange={(e) => setGender(e.target.value)} name="gender" />
          </WrapItem>
          <WrapItem>
            <Input label="Nascimento" type='Date' value={birthDate} onChange={(e) => setBirth_date(e.target.value)} name="birthDate" />
          </WrapItem>
          <WrapItem>
            <Input label="RG" value={rg} onChange={(e) => setRg(e.target.value)} name="rg" />
          </WrapItem>
          <WrapItem>
            <Input label="CPF" value={document} onChange={(e) => setDocument(e.target.value)} name="document" />
          </WrapItem>
          <WrapItem>
            <Input label="UF" value={state} onChange={(e) => setState(e.target.value)} name="state" />
          </WrapItem>
          <WrapItem>
            <Input label="Naturalidade" value={placeOfBirth} onChange={(e) => setplaceOfBirth(e.target.value)} name="placeOfBirth" />
          </WrapItem>
          <WrapItem>
            <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
          </WrapItem>
          <WrapItem>
            <Input label="Celular 1" value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" />
          </WrapItem>
          <WrapItem>
            <Input label="Celular 2" value={phone2} onChange={(e) => setPhone2(e.target.value)} name="phone2" />
          </WrapItem>
          <WrapItem>
            <Input label="Nome do pai" value={fatherName} onChange={(e) => setFatherName(e.target.value)} name="fatherName" />
          </WrapItem>
          <WrapItem>
            <Input label="Nome da mãe" value={montherName} onChange={(e) => setMontherName(e.target.value)} name="motherName" />
          </WrapItem>
          <WrapItem>
            <Input label="Profissão" value={profession} onChange={(e) => setProfession(e.target.value)} name="profession" />
          </WrapItem>
          <WrapItem
            alignItems='center'
          >
            <FormLabel
              color="gray.900"
              fontWeight="bold"
              mb="3px"
              fontSize="14px"
            >
              Colaborador
            </FormLabel>
            <Switch value={isEmployee} onChange={(e) => setisEmployee(e.target.value)} />
          </WrapItem>
          <WrapItem>
            <FormLabel
              color="gray.900"
              fontWeight="bold"
              mb="3px"
              fontSize="14px"
            >
              Negativo no SPC
            </FormLabel>
            <Switch value={inSpc} onChange={(e) => setinSpc(e.target.value)} />
          </WrapItem>
        </Wrap>
        <Flex justifyContent='end'>
          <Button onClick={() => { }}>Salvar</Button>
        </Flex>
      </Flex>
    </Scaffold>
  )
}

