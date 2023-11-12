import { useNavigate } from 'react-router-dom'
import '../css/pages.css'
import '../css/StorePage.css'
import '../css/AccountPage.css'

const FavoritesPage= () => {
  const navigate = useNavigate();

  const returnStorePage = () => {
    navigate('..')
  }

  return (
  <main className='requests-page'>
    <header className='page-header'>
      <div onClick={returnStorePage}>
        <p>Voltar</p>
      </div>
      <h1>Favoritos</h1>
      <div></div>
    </header>

    <section className='middle-section'>
    </section>
  </main>)
}

export default FavoritesPage