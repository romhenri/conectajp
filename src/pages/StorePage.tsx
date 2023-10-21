import genericProduct from '../assets/product.png'
import icon_search from '../assets/search-svgrepo-com.svg'
import icon_star from '../assets/star-30.png'
import '../css/pages.css'
import '../css/StorePage.css'

const StorePage = () => {
  return (<>
    <header className='page-header'>
      <h1>StorePage</h1>

      <div className="searchbar-div">
        <img src={icon_search} alt="" />
        <input type="text" name="searchBar" id="searchBar" 
        placeholder='Pesquisa...'/>
      </div>
    </header>

    <section className='store-section'>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Nome do Produto</h2>
          <p className='desc'>Descrição</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 24,00</span>
            <p className="price">R$ 20,00</p>
          </div>
        </div>
      </div>

    </section>
  </>)
}

export default StorePage