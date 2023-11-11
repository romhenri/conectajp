import { products }  from '../data/productsData.ts'
// import { getCart } from '../scripts/handleStorage.js'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import '../css/pages.css'
import '../css/StorePage.css'
import '../css/AccountPage.css'
import localforage from "localforage";

const CartPage= () => {
  const navigate = useNavigate();
  const [canRender, setCanRender] = useState(false);
  const [productsCards, setProductsCards] = useState(products);

  const returnStorePage = () => {navigate('..')}

  useEffect(() => {
  localforage.getItem('cart', function (err, value: any) {
    // console.log("getCart retornando ", value);

    const productsInCart = [...products];

    for (let i = productsInCart.length - 1; i >= 0; i--) {
      const productId = productsInCart[i].id;
      if (!value.includes(productId)) {
        productsInCart.splice(i, 1);
      } else {
        // console.log(productId, " skipped");
      }
    }
    setProductsCards(productsInCart)
    setCanRender(true)
  })
  }, []);

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
              desc={item.desc}
              image={item.image}
              price={item.price}
              stars={item.stars}
              key={item.id}
            />
      ))}
    </section>
  </main>)
}

export default CartPage