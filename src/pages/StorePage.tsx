import icon_search from '../assets/search-svgrepo-com.svg'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import '../css/pages.css'
import '../css/StorePage.css'

interface StorePageProps {
 data: Product[]
}

const StorePage: React.FC<StorePageProps> =
  (
    {
      data
    }
  ) => {
  return (
  <main className='store-page'>
    <header className='page-header'>
      <h1>Produtos</h1>

      <div className="searchbar-div">
        <img src={icon_search} alt="" />
        <SearchBar />
      </div>
    </header>

    <section className='store-section'>
      {
        data.slice(1).map(item => (
        <ProductCard  
          title={item.name} desc={item.store.name}
          image={item.image} price={item.price}
          stars={item.stars} key={item.id}
        />
      ))}

    </section>
  </main>)
}

export default StorePage