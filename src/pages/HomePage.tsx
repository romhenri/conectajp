import '../css/pages.css'
import '../css/HomePages.css'

interface HomePageProps {
  images: productImages[]
}

interface productImages {
  src: string;
  name: string
}

const HomePage: React.FC<HomePageProps> = 
  (
    {
      images
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
          <img src={images[3].src} alt={images[3].name} />
          <img src={images[5].src} alt={images[5].name} />
          <img src={images[13].src} alt={images[13].name} />
          <img src={images[24].src} alt={images[24].name} />
          <img src={images[25].src} alt={images[25].name} />
        </div>
        <div className="products-inline">
          <img src={images[1].src} alt={images[1].name} />
          <img src={images[6].src} alt={images[6].name} />
          <img src={images[7].src} alt={images[7].name} />
          <img src={images[16].src} alt={images[16].name} />
          <img src={images[18].src} alt={images[18].name} />
        </div>
      </section>
    </main>
  )
}

export default HomePage