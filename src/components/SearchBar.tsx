import { useEffect, useState } from "react"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")

  function initSearchBar() {
    const searchBar: HTMLInputElement | null = document.querySelector('#searchBar')
    if (!searchBar) {
      console.error("searchBar=", searchBar);
      return
    }
    searchBar.addEventListener("keyup", () => {
      setSearchTerm(searchBar.value.toLowerCase())
    })
  }

  useEffect(() => {
    initSearchBar()
  },)

  useEffect(() => {
    const cards: NodeListOf<HTMLLIElement> = document.querySelectorAll('.productCard');

    cards.forEach((item) => {
      item.classList.remove('hidden')
      const content = item.textContent?.toLowerCase();

      if (!content?.includes(searchTerm)) {
        item.classList.add('hidden')
      }
    })
    
  },[searchTerm])

  return (
    <input type="text" name="searchBar"
    id="searchBar"
    placeholder='Pesquisa...'
    />
  )
}

export default SearchBar