import { useNavigate } from 'react-router-dom'
import '../css/pages.css'
import '../css/HomePages.css'

interface HomePageProps {
  data: Product[]
}

const HomePage: React.FC<HomePageProps> = 
  (
    {
      data
    }
  ) => {

  const navigate = useNavigate()
    
  const toSports = () => {navigate(
    'loja?q=dami%C3%A3o%20bike'
    )}
  const toBeauty = () => {navigate(
    'loja?q=cleide%20cosm%C3%A9ticos'
    )}
  const toAnimals = () => {navigate(
    'loja?q=pet%20est%C3%A9tica'
    )} 
  const toHealth = () => {navigate(
    'loja?q=naturalles%20%26%20sa%C3%BAde'
    )}
   
  return (
    <main className='home-page'>
      <header className='page-header'>
        <h1>ConectaJP</h1>
      </header>
      <section className="home-section">
         <h2 className='main'>Seja bem-vindo(a)!</h2>
        <hr />
        <h2>Categorias</h2>
        <div className="grid">
          <div onClick={toSports}>
            Esportes
          </div>
          <div onClick={toBeauty}>
            Beleza
          </div>
        </div>
        <div className="grid">
          <div onClick={toAnimals}>
            Pets
          </div>
          <div onClick={toHealth}>
            Saúde
          </div>
        </div>
        <hr />
        <h2>Explore diversos produtos...</h2>
        <div className="products-inline">
          <img src={data[3].image} alt={data[3].name} />
          <img src={data[5].image} alt={data[5].name} />
          <img src={data[13].image} alt={data[13].name} />
          <img src={data[14].image} alt={data[14].name} />
          <img src={data[25].image} alt={data[25].name} />
        </div>
        <div className="products-inline">
          <img src={data[1].image} alt={data[1].name} />
          <img src={data[6].image} alt={data[6].name} />
          <img src={data[7].image} alt={data[7].name} />
          <img src={data[16].image} alt={data[16].name} />
          <img src={data[18].image} alt={data[18].name} />
        </div>
      </section>
    </main>
  )
}

export default HomePage