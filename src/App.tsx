import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import StorePage from './pages/StorePage'
import AccountPage from './pages/AccountPage'
import MapPage from './pages/MapPage'
import './css/pages.css'
import './App.css'

function App() {
  console.log("Desenvolvido por Rômulo Henri (2023)");

  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={
          <main>Início</main>
          }/>
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