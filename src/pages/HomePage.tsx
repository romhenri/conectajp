import { useNavigate } from 'react-router-dom';
import ProductsInline from '../components/ProductsInline';
import ProductCard from '../components/ProductCard';
import '../css/pages.css';
import '../css/HomePages.css';

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
        
        <ProductsInline
          data={data}
          array={[3, 5, 13, 14, 25]}
        />

        <ProductsInline
          data={data}
          array={[1, 6, 7, 16, 18]}
        />

        <hr />

        <h2>Destaques:</h2>

        <ProductCard
          image= {data[10].image}
          title= {data[10].name}
          productId= {data[10].id}
          price= {data[10].price}
          stars= {data[10].stars}
          onClick= {() => navigate('loja/produto/10')}
        />

        <ProductCard
          image= {data[16].image}
          title= {data[16].name}
          productId= {data[16].id}
          price= {data[16].price}
          stars= {data[16].stars}
          onClick= {() => navigate('loja/produto/16')}
        />

      </section>
    </main>
  )
}

export default HomePage;