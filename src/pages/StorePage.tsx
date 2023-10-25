import genericProduct from '../assets/product.png'
import genericProduct2 from '../assets/product2.jpg'
import genericProduct3 from '../assets/product3.jpg'
import genericProduct4 from '../assets/product4.jpg'
import genericProduct5 from '../assets/product5.jpg'
import icon_search from '../assets/search-svgrepo-com.svg'
import icon_star from '../assets/star-30.png'
import '../css/pages.css'
import '../css/StorePage.css'

const StorePage = () => {
  return (<>
    <header className='page-header'>
      <h1>Produtos</h1>

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
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct} />
        </div>
        <div className="content-box">
          <h2>Tênis Unisex</h2>
          <p className='desc'>TeenTime</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 424,99</span>
            <p className="price">R$ 319,50</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct2} />
        </div>
        <div className="content-box">
          <h2>Pen Drive Platinum 128 GB</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 132,50</span>
            <p className="price">R$ 117,13</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct3} />
        </div>
        <div className="content-box">
          <h2>Bola de Campo</h2>
          <p className='desc'>FutDez</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 92,90</span>
            <p className="price">R$ 80,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct4} />
        </div>
        <div className="content-box">
          <h2>Coleção Stabilo</h2>
          <p className='desc'>Papelloul</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 124,00</span>
            <p className="price">R$ 113,00</p>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="image-box">
          <img src={genericProduct5} />
        </div>
        <div className="content-box">
          <h2>Mouse Gamer Logitech G203</h2>
          <p className='desc'>TechHouse</p>
          <div className="review-box">
            <p>
              <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
            </p>
          </div>
          <div className="price-box">
            <span>R$ 184,00</span>
            <p className="price">R$ 141,20</p>
          </div>
        </div>
      </div>

      {/*  */}  
    
    </section>
  </>)
}

export default StorePage