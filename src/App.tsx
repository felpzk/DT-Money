import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./style/themes/default";
import { GlobalStyle } from "./style/global";
import Transactions from "./pages/Transactions";

export default function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
      <Transactions />
   </ThemeProvider>
  )
}

