import { ReactNode, createContext, useEffect, useState } from 'react'

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
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transacions[]>([])

  useEffect(() => {
    async function loadTransactions() {
     const response = await fetch('http://localhost:3000/transactions')
     const data = await response.json()
     setTransactions(data)   
    }
    loadTransactions()
  }, [])


  return (
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider>
  )

}