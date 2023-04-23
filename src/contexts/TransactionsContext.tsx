import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transacions {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transacions[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data:createTransactionInput ) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

interface createTransactionInput {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transacions[]>([])
  
  async function fetchTransactions(query?: string) {
   const response = await api.get('/transactions', {
    params: {
      _sort: 'createdAt',
      _order: 'desc',
      q: query
    }
   })
   setTransactions(response.data)   
  }

  async function createTransaction(data: createTransactionInput) {
    const { category, description, price, type} = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date()
    })

    setTransactions(state => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])


  return (
    <TransactionsContext.Provider value={{transactions, fetchTransactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )

}