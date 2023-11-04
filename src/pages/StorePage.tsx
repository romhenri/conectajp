import icon_search from '../assets/search-svgrepo-com.svg'
import ProductCard from '../components/ProductCard'
import '../css/pages.css'
import '../css/StorePage.css'

import generic_product from '../assets/product.png'

const images = [
  generic_product
]

const StorePage = () => {
  return (<>
    <header className='page-header'>
      <h1>Produtos</h1>

      <div className="searchbar-div">
        <img src={icon_search} alt="" />
        <input type="text" name="searchBar" id="searchBar" 
        placeholder='Pesquisa...'/>
      </div>
    </header>

    <section className='store-page store-section'>
      
      <ProductCard
        title="Tênis Teste" desc="Tênis"
        image={images[0]} price={229}
       />

    </section>
  </>)
}

export default StorePage