import localforage from "localforage";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products }  from '../data/productsData.ts'
import { addArrayToRequests, removeArrayFromCart } from '../scripts/handleStorage.js'
import ProductCard from '../components/ProductCard'
import ModalManager from '../components/ModalManager.js'; 
import '../css/pages.css'
import '../css/StorePage.css'
import '../css/AccountPage.css'
import '../css/CartPage.css'

const CartPage= () => {
  var total: number = 0
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState(true);
  const [canRender, setCanRender] = useState(false);
  const [productsCards, setProductsCards] = useState(products);
  const [cart, setCart] = useState<number[]>([]);

  const [isModalRequestOpen, setIsModalRequestOpen] = useState(false);

  const closeModalRequest = () => setIsModalRequestOpen(false);

  const returnStorePage = () => {navigate('..')}

  useEffect(() => {
  localforage.getItem('cart', function (err, value: any) {
    // console.log("getCart retornando ", value);

    const productsInCart = [...products];
    setCart(value);

    for (let i = productsInCart.length - 1; i >= 0; i--) {
      const productId = productsInCart[i].id;
      if (!value.includes(productId)) {
        productsInCart.splice(i, 1);
      } else {
        // console.log(productId, " skipped");
      }
    }
    setProductsCards(productsInCart);
    if (productsInCart.length > 0) {
      setIsEmpty(false);
    }
    setCanRender(true);
  })
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