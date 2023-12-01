import { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products }  from '../data/productsData.ts'
import { getCart, addArrayToRequests, removeArrayFromCart } from '../scripts/handleStorage.js'
import ProductCard from '../components/ProductCard'
import ModalManager from '../components/ModalManager.js'; 
import '../css/pages.css'
import '../css/CartPage.css'

const CartPage= () => {
  var total: number = 0
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState(true);
  const [canRender, setCanRender] = useState(false);
  const [cart, setCart] = useState<number[]>([]);
  const [productsCards, setProductsCards] = useState(products);

  const [isModalRequestOpen, setIsModalRequestOpen] = useState(false);

  const closeModalRequest = () => setIsModalRequestOpen(false);

  const returnStorePage = () => {navigate('..')}

  useLayoutEffect(() => {
    getCart().then(cart => {
      if (!cart) return;
      setCart(cart);

      // Filter products to only are included in cart array from localforage
      const productsInCart = products.filter(product => cart.includes(product.id));

      setProductsCards(productsInCart);
      if (productsInCart.length > 0) {
        setIsEmpty(false);
      }
      setProductsCards(productsInCart);
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

  const addCartToRequests = () => {
    addArrayToRequests(cart);
    removeArrayFromCart(cart);
    setIsModalRequestOpen(true);
    setProductsCards([]);
    setCanRender(false);
    setIsEmpty(true);
  }

  canRender && productsCards.map(item => (
    total = total + item.price
  ))

  return (
  <main className='cart-page'>
    <header className='page-header'>
      <div onClick={returnStorePage}>
        <p>Voltar</p>
      </div>
      <h1>Meu Carrinho</h1>
      <div></div>
    </header>

    <section className='middle-section'>
      {canRender &&
          productsCards.map(item => (
            <ProductCard
              title={item.name}
              productId={item.id}
              desc={item.desc}
              image={item.image}
              price={item.price}
              stars={item.stars}
              key={item.id}
            />
      ))}

      {
        !isEmpty && (
          <div className="cart-overview">
          <div>
            <strong>Total: </strong>
            <span>
              {total.toLocaleString("pt-br", {style: "currency",currency: "BRL"})}
            </span>
          </div>
          <button onClick={addCartToRequests}>Comprar</button>
        </div>)
      }

      {
        isEmpty && (
          <p>Sem produtos no Carrinho.</p>
        )
      }
    </section>

    <ModalManager
      type="Request"
      isModalOpen={isModalRequestOpen}
      closeModal={closeModalRequest} 
    />
  </main>)
}

export default CartPage