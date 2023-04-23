import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./style/themes/default";
import { GlobalStyle } from "./style/global";
import Transactions from "./pages/Transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export default function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
      <TransactionsProvider>
       <Transactions />
      </TransactionsProvider>
   </ThemeProvider>
  )
}



