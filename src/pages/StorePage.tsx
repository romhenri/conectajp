import icon_search from '../assets/search-svgrepo-com.svg'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import '../css/pages.css'
import '../css/StorePage.css'

import data from '../products.json';

interface StorePageProps {
  images: productImages[]
}

interface productImages {
  src: string;
  name: string
}

const StorePage: React.FC<StorePageProps> =
  (
    {
      images
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

      {data.map(item => (
        <ProductCard  
          title={item.name} desc={item.store.name}
          image={images[item.id].src} price={item.price}
          stars={item.stars} key={item.id}
        />
      ))}

    </section>
  </main>)
}

export default StorePage