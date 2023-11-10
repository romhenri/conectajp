import DefaultProfile from '../assets/default-profile.png'
import { useNavigate } from 'react-router-dom'
import '../css/pages.css'
import '../css/StorePage.css'
import '../css/AccountPage.css'

const CartPage= () => {
  const navigate = useNavigate();

  const returnStorePage = () => {
    navigate('..')
  }

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
      <div className="image-box">
        <img src={DefaultProfile} alt="" />
      </div>

      <div className="content-box">
      </div>
    </section>
  </main>)
}

export default CartPage