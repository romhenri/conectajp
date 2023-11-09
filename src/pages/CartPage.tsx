import DefaultProfile from '../assets/default-profile.png'
import { Link } from 'react-router-dom'
import '../css/pages.css'
import '../css/StorePage.css'
import '../css/AccountPage.css'

const CartPage= () => {
  return (
  <main className='account-page'>
    <header className='page-header'>
      <Link to={'..'}>
        <p>Voltar</p>
      </Link>
      <h1>Meu Carrinho</h1>
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