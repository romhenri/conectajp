import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import MapPage from './pages/MapPage'
import AccountPage from './pages/AccountPage'
import CartPage from './pages/CartPage'
import './scripts/getClientInfo.js'
import './App.css'

import generic_product from './assets/product.png'
import produto1 from './assets/products/produto1.jpg'
import produto2 from './assets/products/produto2.jpg'
import produto3 from './assets/products/produto3.jpg'
import produto4 from './assets/products/produto4.jpg'
import produto5 from './assets/products/produto5.jpg'
import produto6 from './assets/products/produto6.jpg'
import produto7 from './assets/products/produto7.jpg'
import produto8 from './assets/products/produto8.jpg'
import produto9 from './assets/products/produto9.jpg'
import produto10 from './assets/products/produto10.jpg'
import produto11 from './assets/products/produto11.jpg'
import produto12 from './assets/products/produto12.jpg'
import produto13 from './assets/products/produto13.jpg'
import produto14 from './assets/products/produto14.jpg'
import produto15 from './assets/products/produto15.jpg'
import produto16 from './assets/products/produto16.jpg'
import produto17 from './assets/products/produto17.jpg'
import produto18 from './assets/products/produto18.jpg'
import produto19 from './assets/products/produto19.jpg'
import produto20 from './assets/products/produto20.jpg'
import produto21 from './assets/products/produto21.jpg'
import produto22 from './assets/products/produto22.jpg'
import produto23 from './assets/products/produto23.jpg'
import produto24 from './assets/products/produto24.jpg'
import produto25 from './assets/products/produto25.jpg'

const productImages = [
  {
    src: generic_product,
    name: "Generic"
  },
  {
    src: produto1,
    name: "Generic"
  },
  {
    src: produto2,
    name: "Generic"
  },
  {
    src: produto3,
    name: "Generic"
  }, 
  {
    src: produto4,
    name: "Generic"
  },
  {
    src: produto5,
    name: "Generic"
  },
  {
    src: produto6,
    name: "Generic"
  },
  {
    src: produto7,
    name: "Generic"
  },
  {
    src: produto8,
    name: "Generic"
  },
  {
    src: produto9,
    name: "Generic"
  },
  {
    src: produto10,
    name: "Generic"
  },
  {
    src: produto11,
    name: "Generic"
  },
  {
    src: produto12,
    name: "Generic"
  },
  {
    src: produto13,
    name: "Generic"
  },
  {
    src: produto14,
    name: "Generic"
  },
  {
    src: produto15,
    name: "Generic"
  },
  {
    src: produto16,
    name: "Generic"
  },
  {
    src: produto17,
    name: "Generic"
  },
  {
    src: produto18,
    name: "Generic"
  },
  {
    src: produto19,
    name: "Generic"
  },
  {
    src: produto20,
    name: "Generic"
  },
  {
    src: produto21,
    name: "Generic"
  },
  {
    src: produto22,
    name: "Generic"
  },
  {
    src: produto23,
    name: "Generic"
  },
  {
    src: produto24,
    name: "Generic"
  },
  {
    src: produto25,
    name: "Generic"
  }
]

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<HomePage images={productImages}/>}/>
          <Route path='/loja' element={<StorePage images={productImages}/>}/>
          <Route path='mais' element={"ConectaJP - Mais"}/>
          <Route path='mapa' element={<MapPage/>}/>
          <Route path='minha-conta'> 
            <Route index element={<AccountPage/>}/>
            <Route path='carrinho' element={<CartPage/>}/>
          </Route>
        </Routes>
        <Menu/>
      </Router>
    </>
  )
}

export default App