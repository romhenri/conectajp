import { Link, useParams } from 'react-router-dom'
import '../css/pages.css'
import '../css/StorePage.css'
import '../css/AccountPage.css'

interface ProductPageProps {
  data: Product[]
}

const ProductPage: React.FC<ProductPageProps> = ({data}) => {
  let { Id } = useParams();
  if (!Id) return
  const numberID: number = parseInt(Id, 10);
  console.log(Id);

  return (
  <main className='account-page'>
    <header className='page-header'>
      <Link to={'../..'}>
        <p>Voltar</p>
      </Link>
      <h1>Produto {data[numberID].id}</h1>
    </header>

    <section className='middle-section'>

      <div className="content-box">
      </div>
    </section>
  </main>)
}

export default ProductPage