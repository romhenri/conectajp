import { useEffect, useLayoutEffect, useState } from 'react'
import { getFavorites } from "../scripts/handleStorage.ts";
import { useNavigate } from 'react-router-dom'
import { products }  from '../data/productsData.ts'
import ProductCard from '../components/ProductCard'
import '../css/AccountPage.css'
import '../css/pages.css'

const FavoritesPage= () => {
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState(true);
  const [canRender, setCanRender] = useState(false);
  const [favorites, setFavorites] = 
  useState<number[]>([]);
  const [favoritesCards, setFavoritesCards] = 
  useState<Product[]>([]);

  const returnStorePage = () => {navigate('..')}

  useLayoutEffect(() => {
    getFavorites().then(favorites => {
      if (!favorites) return;
      setFavorites(favorites);
  
      // Filter products to only are included in favorites array from localforage
      const productsInFavorites = products.filter(product => favorites.includes(product.id));
  
      // Set products to render
      setFavoritesCards(productsInFavorites);
      if (productsInFavorites.length > 0) {
        setIsEmpty(false);
      }
      // Render
      setCanRender(true)
    }).catch(err => {
      console.error(err);
    });
  }, []);

  useEffect(() => {
    // Navigate to "name"
    const handleProductCardClick = (id: number) => {
      navigate(`/loja/produto/${id}`);
    }
    // Add "EventListener" to all cards
    const Cards = document.querySelectorAll('.productCard');
    // console.log(Cards);
    
    Cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        const idAttr = card.getAttribute('data-id')
        if (idAttr) {
          handleProductCardClick(parseInt(idAttr, 10));
        }
      });
    });
  
      // Remove "EventListener" to all cards
      return () => {
        Cards.forEach((card, index) => {
          card.removeEventListener('click', () => {
            const idAttr = card.getAttribute('data-id')
            if (idAttr) {
              handleProductCardClick(parseInt(idAttr, 10));
            }
          });
        });
      };
  }, [canRender]);

  return (
  <main className='favorites-page'>
    <header className='page-header'>
      <div onClick={returnStorePage}>
        <p>Voltar</p>
      </div>
      <h1>Favoritos</h1>
      <div></div>
    </header>

    <section className='middle-section'>
      {canRender &&
          favoritesCards.map(item => (
            <ProductCard
              title={item.name}
              productId={item.id}
              desc={item.desc}
              image={item.image}
              price={item.price}
              stars={item.stars}
              key={item.id}
            />))
      }

      {isEmpty && (
          <p>Sem produtos nos Favoritos.</p>
        )
      }
    </section>
  </main>)
}

export default FavoritesPage