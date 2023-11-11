import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../scripts/handleStorage.js'
import '../css/pages.css'
import '../css/StorePage.css'
import '../css/AccountPage.css'
import '../css/ProductPage.css'

interface ProductPageProps {
  data: Product[]
}

const ProductPage: React.FC<ProductPageProps> = ({data}) => {
  const { Id } = useParams();
  const navigate = useNavigate();
  if (!Id) return
  const numberID: number = parseInt(Id, 10);

  const returnStorePage = () => {
    navigate('../..')
  }

  const addProductToCard = () => {
    addToCart(numberID)
  }

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
        <div className="flexLine">
          <div className='price'>
            {data[numberID].price.toLocaleString("pt-br", {style: "currency",currency: "BRL"})}
          </div>
        </div>
        
        <div className="review">
          {/* {data[numberID].stars} */}
        </div>

        <div className="flexLine">
          <button onClick={addProductToCard}>Adicionar ao Carrinho</button>
          <button>Comprar</button>
        </div>
        
    </section>
  </main>)
}

export default ProductPage