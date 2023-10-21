import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './css/pages.css'
import './App.css'

function App() {

  return (
    <>
     <Router>
      <main className='screen'>
        <Routes>
          <Route path='/' element={"ConectaJP"}/>
          <Route path='/loja' element={"ConectaJP - Loja"}/>
          <Route path='/mais' element={"ConectaJP - Mais"}/>
          <Route path='/mapa' element={"ConectaJP - Mapa"}/>
          <Route path='/minha-conta' element={"ConectaJP - Conta"}/>
        </Routes> 
        <Menu/>
      </main>
      </Router>
    </>
  )
}

export default App
