import React, { useRef, useState, useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { getFavorites, addToCart, addToFavorites, removeFromFavorites, addToRequests } from '../scripts/handleStorage.js'
import ModalManager from '../components/ModalManager.js'; 
import icon_heart from '../assets/heart.svg'
import icon_full_heart from '../assets/full-heart.svg'
import icon_star from '../assets/star-100.png'
import icon_0 from '../assets/star-0.png'
import icon_25 from '../assets/star-25of100.png'
import icon_35 from '../assets/star-35of100.png'
import icon_50 from '../assets/star-50of100.png'
import icon_75 from '../assets/star-75of100.png'
import '../css/pages.css'
import '../css/StorePage.css'
import '../css/AccountPage.css'
import '../css/ProductPage.css'

interface ProductPageProps {
  data: Product[]
}

const styledStar = {
  width: '16px',
  height: '16px',
  margin: '0px'
}
const styledAlignedBox = {
  display: 'flex',
  marginTop: '12px',
  marginBottom: '0px',
  justifyContent: 'center',
  gap: '6px',
  alignItems: 'center'
}

function getStars(number: number | undefined) {
  if (!number) return;
  const starsArray = [];
  const numberFullStars = Math.trunc(number);
  const lastStar = Number(Math.abs(number % 1).toFixed(1));

  for(let i = 0; i < numberFullStars; i++) {
    starsArray.push((
      <img src={icon_star} style={styledStar} key={i}/>
    ));
  };
  // It s nescery to add a key to the last star, because the react demands unique keys to all
  const lastKey = numberFullStars + 1;
  
  if (lastStar <= .1){
    starsArray.push((
      <img src={icon_0} style={styledStar} key={lastKey}/>
    ));
  } else if (lastStar <= .2) {
    starsArray.push((
      <img src={icon_25} style={styledStar} key={lastKey}/>
    ));
  } else if (lastStar <= .3) {
    starsArray.push((
      <img src={icon_35} style={styledStar} key={lastKey}/>
    ));
  } else if (lastStar <= .6) {
    starsArray.push((
      <img src={icon_50} style={styledStar} key={lastKey}/>
    ));
  } else if (lastStar <= .8) {
    starsArray.push((
      <img src={icon_75} style={styledStar} key={lastKey}/>
    ));
  };

  return starsArray;
}

const ProductPage: React.FC<ProductPageProps> = ({data}) => {
  // const favoriteButton = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const favoriteButton = useRef<HTMLImageElement>(null);
  const { Id } = useParams();
  const navigate = useNavigate();
  if (!Id) return
  const numberID: number = parseInt(Id, 10);
  const [isModalCartOpen, setIsModalCartOpen] = useState(false);
  const [isModalRequestOpen, setIsModalRequestOpen] = useState(false);

  const closeModalCart = () => setIsModalCartOpen(false);
  const closeModalRequest = () => setIsModalRequestOpen(false);
  const returnStorePage = () => {navigate('../..')}
  const addProductToCard = () => {
    addToCart(numberID);
    setIsModalCartOpen(true);
  }
  const Request = () => {
    addToRequests(numberID)
    setIsModalRequestOpen(true);
  }

  const toggleFavorite = () => {
    if (favoriteButton.current) {
      favoriteButton.current.classList.toggle('active');

      if(favoriteButton.current.classList.contains('active')) {
        addToFavorites(numberID)
        favoriteButton.current.src = icon_full_heart
      } else{
        removeFromFavorites(numberID)
        favoriteButton.current.src = icon_heart
      }
    }
  }
  
  useLayoutEffect(() => {
    getFavorites().then(favorites => {
      if (!favorites) return;

      if (favorites.includes(numberID)) {
        if(!favoriteButton.current) return
        favoriteButton.current.classList.add('active');
        favoriteButton.current.src = icon_full_heart;
      }

      setFavorites(favorites);
    })
  }, []);

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
    
        <div className="review" style={styledAlignedBox}>
          <span>{data[numberID].stars}</span>
          {getStars(data[numberID].stars)}
        </div>

        <div className="flexLine">
          <div className='price'>
            <div></div>
            <p>
              {data[numberID].price.toLocaleString("pt-br", {style: "currency",currency: "BRL"})}
              </p>
            <div onClick={toggleFavorite}>
              <img ref={favoriteButton} src={icon_heart} alt="favorite" />
            </div>
          </div>
        </div>

        <div className="flexLine">
          <button onClick={addProductToCard}>Adicionar ao Carrinho</button>
          <button onClick={Request}>Comprar</button>
        </div>
        <hr />
        <div>
          <p className="store">
            {data[numberID].store.name} - {data[numberID].store.phone}
          </p>
        </div>
        
    </section>

    <ModalManager
      type="AddToCart"
      isModalOpen={isModalCartOpen}
      closeModal={closeModalCart} 
    />
    <ModalManager
      type="Request"
      isModalOpen={isModalRequestOpen}
      closeModal={closeModalRequest} 
    />
  </main>)
}

export default ProductPage