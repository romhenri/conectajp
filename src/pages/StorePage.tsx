import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import icon_search from '../assets/search-svgrepo-com.svg'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import '../css/pages.css'
import '../css/StorePage.css'

interface StorePageProps {
 data: Product[]
}

const StorePage: React.FC<StorePageProps> =
  ({data}) => {
  
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to "name"
    const handleProductCardClick = (id: number) => {
      navigate(`/loja/produto/${id}`);
  }
    // Add "EventListener" to all cards
    const productsCards = document.querySelectorAll('.productCard');
    productsCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        const idAttr = card.getAttribute('data-id')
        if (idAttr) {
          handleProductCardClick(parseInt(idAttr, 10));
        }
      });
    });

    // Remove "EventListener" to all cards
    return () => {
      productsCards.forEach((card, index) => {
        card.removeEventListener('click', () => {
          const idAttr = card.getAttribute('data-id')
          if (idAttr) {
            handleProductCardClick(parseInt(idAttr, 10));
          }
        });
      });
    };
  }, [navigate]);

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
          title={item.name}
          productId={item.id}
          desc={item.store.name}
          image={item.image}
          price={item.price}
          stars={item.stars}
          key={item.id}
        />
      ))}

    </section>
  </main>)
}

export default StorePage