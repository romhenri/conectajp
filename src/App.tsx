import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import MapPage from './pages/MapPage'
import AccountPage from './pages/AccountPage'
import CartPage from './pages/CartPage'
import './scripts/getClientInfo.js'
import './App.css'

import { products } from './data/productsData.ts'

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' 
            element={<HomePage data={products}/>}/>

          <Route path='/loja' 
            element={<StorePage data={products}/>}/>

          <Route path='mapa' element={<MapPage/>}/>

          <Route path='minha-conta' > 
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