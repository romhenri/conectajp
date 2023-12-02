import { getRequests } from "../scripts/handleStorage.ts";
import { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products }  from '../data/productsData.ts'
import RequestCard from '../components/RequestCard'
import '../css/pages.css'
import '../css/AccountPage.css'
import '../css/RequestsPage.css'

const RequestsPage= () => {
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState(true);
  const [canRender, setCanRender] = useState(false);
  const [requests, setRequests] = useState<number[]>([]);
  const [productsCards, setProductsCards] = useState(products);

  const returnStorePage = () => {navigate('..')}

  useLayoutEffect(() => {
    getRequests().then(requests => {
      if (!requests) return;
      setRequests(requests);

      // Filter products to only are included in requests array from localforage
      const productsInRequests = products.filter(product => requests.includes(product.id));

      if (productsInRequests.length > 0) {
        setIsEmpty(false);
      }

      setProductsCards(productsInRequests);
      setCanRender(true);
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
  <main className='requests-page'>
    <header className='page-header'>
      <div onClick={returnStorePage}>
        <p>Voltar</p>
      </div>
      <h1>Pedidos</h1>
      <div></div>
    </header>

    <section className='middle-section'>
      {canRender &&
          productsCards.map(item => (
            <RequestCard
              title={item.name}
              productId={item.id}
              desc={item.desc}
              image={item.image}
              price={item.price}
              stars={item.stars}
              key={item.id}
            />
      ))}

      {isEmpty && <p>Não há pedidos</p>}
    </section>
  </main>)
}

export default RequestsPage