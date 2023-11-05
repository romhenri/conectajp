import icon_search from '../assets/search-svgrepo-com.svg'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import '../css/pages.css'
import '../css/StorePage.css'

import data from '../products.json';

import generic_product from '../assets/product.png'
import produto1 from '../assets/products/produto1.jpg'
import produto2 from '../assets/products/produto2.jpg'
import produto3 from '../assets/products/produto3.jpg'
import produto4 from '../assets/products/produto4.jpg'
import produto5 from '../assets/products/produto5.jpg'
import produto6 from '../assets/products/produto6.jpg'
import produto7 from '../assets/products/produto7.jpg'
import produto8 from '../assets/products/produto8.jpg'
import produto9 from '../assets/products/produto9.jpg'
import produto10 from '../assets/products/produto10.jpg'
import produto11 from '../assets/products/produto11.jpg'
import produto12 from '../assets/products/produto12.jpg'
import produto13 from '../assets/products/produto13.jpg'
import produto14 from '../assets/products/produto14.jpg'
import produto15 from '../assets/products/produto15.jpg'
import produto16 from '../assets/products/produto16.jpg'
import produto17 from '../assets/products/produto17.jpg'
import produto18 from '../assets/products/produto18.jpg'
import produto19 from '../assets/products/produto19.jpg'
import produto20 from '../assets/products/produto20.jpg'
import produto21 from '../assets/products/produto21.jpg'
import produto22 from '../assets/products/produto22.jpg'
import produto23 from '../assets/products/produto23.jpg'
import produto24 from '../assets/products/produto24.jpg'
import produto25 from '../assets/products/produto25.jpg'

const images = [
  generic_product,
  produto1,
  produto2,
  produto3,
  produto4,
  produto5,
  produto6,
  produto7,
  produto8,
  produto9,
  produto10,
  produto11,
  produto12,
  produto13,
  produto14,
  produto15,
  produto16,
  produto17,
  produto18,
  produto19,
  produto20,
  produto21,
  produto22,
  produto23,
  produto24,
  produto25,
]

const StorePage = () => {
  return (<>
    <header className='page-header'>
      <h1>Produtos</h1>

      <div className="searchbar-div">
        <img src={icon_search} alt="" />
        <SearchBar />
      </div>
    </header>

    <section className='store-page store-section'>

      {data.map(item => (
        <ProductCard  
          title={item.name} desc={item.store.name}
          image={images[item.id]} price={item.price}
          stars={item.stars} key={item.id}
        />
      ))}

    </section>
  </>)
}

export default StorePage