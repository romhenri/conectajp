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
    
  return (
    <main className='home-page'>
      <header className='page-header'>
        <h1>ConectaJP</h1>
      </header>
      <section className="home-section">
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