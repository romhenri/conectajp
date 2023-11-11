import { useNavigate, useParams } from 'react-router-dom'
import '../css/pages.css'
import '../css/StorePage.css'
import '../css/AccountPage.css'
import '../css/ProductPage.css'

interface ProductPageProps {
  data: Product[]
}

const ProductPage: React.FC<ProductPageProps> = ({data}) => {
  let { Id } = useParams();
  const navigate = useNavigate();

  const returnStorePage = () => {
    navigate('../..')
  }

  if (!Id) return
  const numberID: number = parseInt(Id, 10);
  console.log(Id);

  return (
  <main className='product-page'>
    <header className='page-header'>
      <div onClick={returnStorePage}>
        <p>Voltar</p>
      </div>
      <h1>ConectaJP</h1>
      <div onClick={returnStorePage}>
      </div>
    </header>

    <section className='middle-section'>
        <img src={data[numberID].image} />
        <h2>{data[numberID].name}</h2>
        <hr />
        <p className='desc'>{data[numberID].desc}</p>
        <div className='price'>
          {data[numberID].price.toLocaleString("pt-br", {style: "currency",currency: "BRL"})}
        </div>
    </section>
  </main>)
}

export default ProductPage