import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'

export default function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transação"/>

      <button type="submit">
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}