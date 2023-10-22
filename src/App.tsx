import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import StorePage from './pages/StorePage'
import MyAccountPage from './pages/MyAccountPage'
import './css/pages.css'
import './App.css'

function App() {

  return (
    <>
     <Router>
      <main className='screen'>
        <Routes>
          <Route path='/' element={"ConectaJP"}/>
          <Route path='/loja' element={<StorePage/>}/>
          <Route path='/mais' element={"ConectaJP - Mais"}/>
          <Route path='/mapa' element={"ConectaJP - Mapa"}/>
          <Route path='/minha-conta' element={<MyAccountPage/>}/>
        </Routes> 
        <Menu/>
      </main>
      </Router>
    </>
  )
}

export default App
