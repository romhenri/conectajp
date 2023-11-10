import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import ProductPage from './pages/ProductPage.tsx'
import MapPage from './pages/MapPage'
import AccountPage from './pages/AccountPage'
import CartPage from './pages/CartPage'
import RequestsPage from './pages/RequestsPage'
import './scripts/getClientInfo.js'
import './App.css'

import { products } from './data/productsData.ts'

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<HomePage data={products}/>}/>

          <Route path='loja'>
            <Route index element={<StorePage data={products}/>}/>
            <Route path='produto'>
              <Route path=':Id' 
                element={<ProductPage data={products} />} />
            </Route>
          </Route>

          <Route path='mapa' element={<MapPage/>}/>

          <Route path='minha-conta' > 
            <Route index element={<AccountPage/>}/>
            <Route path='carrinho' element={<CartPage/>}/>
            <Route path='pedidos' element={<RequestsPage/>}/>
          </Route>
        </Routes>
        <Menu/>
      </Router>
    </>
  )
}

export default App