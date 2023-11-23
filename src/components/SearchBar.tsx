import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useLayoutEffect, useState } from "react"

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("")
  const [isQueryDone, setIsQueryDone] = useState(false)

  function getQueryParams() {
    const queryParams = new URLSearchParams(location.search);
    const termInURL = (queryParams.get('q'));
    // console.log("termInURL: ", termInURL);
    
    if(!termInURL) return

    setSearchTerm(`${termInURL}`)

    const searchBar: HTMLInputElement | null = 
    document.querySelector('#searchBar');
    
    if (searchBar && !isQueryDone) {
      searchBar.value = `${termInURL}`
      setIsQueryDone(true)
    }
  }

  function initSearchBar() {
    const searchBar: HTMLInputElement | null = document.querySelector('#searchBar');
    if (!searchBar) {
      console.error("searchBar=", searchBar);
      return
    }
    searchBar.addEventListener("keyup", () => {
      setSearchTerm(searchBar.value.toLowerCase())
    })

    // if (termInURL) {
      // setSearchTerm(`${termInURL}`)
      // setIsQueryDone(true)
      // searchBar.value = `${termInURL}`
      // navigate(`/loja?q=${encodeURIComponent(searchTerm)}`);
    // }
  }

  useLayoutEffect(() => {
    initSearchBar()
    getQueryParams()
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