import '../css/pages.css'
import '../css/HomePages.css'

interface HomePageProps {
  images: string[]
}

const HomePage: React.FC<HomePageProps> = 
  (
    {
      images
    }
  ) => {

  console.log(images);
    
  return (
    <main className='home-page'>
      <header className='page-header'>
        <h1>ConectaJP</h1>
      </header>
      <section className="home-section">
        <h2>Explore diversos produtos...</h2>
        <div className="products-inline">
          <img src={images[3]} alt="" />
          <img src={images[5]} alt="" />
          <img src={images[13]} alt="" />
          <img src={images[24]} alt="" />
          <img src={images[25]} alt="" />
        </div>
        <div className="products-inline">
          <img src={images[1]} alt="" />
          <img src={images[6]} alt="" />
          <img src={images[7]} alt="" />
          <img src={images[16]} alt="" />
          <img src={images[18]} alt="" />
        </div>
      </section>
    </main>
  )
}

export default HomePage