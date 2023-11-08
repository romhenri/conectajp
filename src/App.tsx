import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import AccountPage from './pages/AccountPage'
import MapPage from './pages/MapPage'
import './scripts/getClientInfo.js'
import './css/Pages.css'
import './App.css'

function App() {
  console.log("Desenvolvido por Rômulo Henri (2023)");

  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/loja' element={<StorePage/>}/>
          <Route path='/mais' element={"ConectaJP - Mais"}/>
          <Route path='/mapa' element={<MapPage/>}/>
          <Route path='/minha-conta' element={<AccountPage/>}/>
        </Routes>
        <Menu/>
      </Router>
    </>
  )
}

export default App