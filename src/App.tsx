import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import ProductPage from './pages/ProductPage.tsx'
import MapPage from './pages/MapPage'
import AccountPage from './pages/AccountPage'
import CartPage from './pages/CartPage'
import RequestsPage from './pages/RequestsPage'
import FavoritesPage from './pages/FavoritesPage'
import ConfigPage from './pages/ConfigPage.tsx'
import SuggestionsPage from './pages/SuggestionsPage.tsx'
import SingupPage from './pages/SingupPage.tsx'
import Page from './pages/Page.tsx'
import './scripts/getClientInfo.js'
import './scripts/handleStorage.js'
import './App.css'

import { products } from './data/productsData.ts'

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<HomePage data={products}/>}/>
          <Route path='cadastro' element={<SingupPage/>}/>

          <Route path='loja'>
            <Route index element={<StorePage data={products}/>}/>
            <Route path=':Term' element={<StorePage data={products} />}/>

            <Route path='produto'>
              <Route path=':Id' 
                element={<ProductPage data={products} />}/>
            </Route>
          </Route>

          <Route path='mapa' element={<MapPage/>}/>

          <Route path='minha-conta' > 
            <Route index element={<AccountPage/>}/>
            <Route path='carrinho' element={<CartPage/>}/>
            <Route path='pedidos' element={<RequestsPage/>}/>
            <Route path='favoritos' element={<FavoritesPage/>}/>

            <Route path='configuracoes'element={<ConfigPage/>}/>
            <Route path='sugestoes'element={<SuggestionsPage/>}/>

            <Route 
              path='avaliacoes'
              element={
                <Page 
                  title='Avaliações'
                >
                  <p>
                    Aqui aparecerão suas avaliações quando forem aprovadas.
                  </p>
                </Page>
              }
            />
            <Route 
              path='reembolsos-e-devolucoes'
              element={
                <Page 
                  title='Ajuda com Pedidos'
                >
                  <p>
                    Aqui aparecerão seus processos de reembolsos e devoluções.
                  </p>
                </Page>
              }
            />
            <Route 
              path='central-de-ajuda'
              element={
                <Page 
                  title='Central de Ajuda'
                >
                  <p>
                    Nessa página, você encontrará todas as informações necessárias para aproveitar ao máximo o nosso aplicativo. Seja você um novo usuário buscando entender como o ConectJP funciona ou um usuário experiente procurando dicas avançadas, estamos aqui para ajudar!
                  </p>
                  <p>
                    Explique seu problema em: <br/>
                    <a href="mailto:contato.conectajp@gmail.com">
                      contato.conectajp@gmail.com
                    </a>
                  </p>
                </Page>
              }
            />
            <Route 
              path='termos-de-uso'
              element={
                <Page 
                  title='Termos de Uso'
                  styleClass='terms-page'
                >
                  <p>
                    <strong>1. Introdução</strong><br/>
                    Bem-vindo ao ConectJP! Ao utilizar nosso aplicativo de comércio eletrônico, você concorda com estes Termos de Uso. Por favor, leia-os atentamente.
                  </p><p>
                    <strong>2. Serviços Oferecidos</strong><br/>
                    O ConectJP proporciona uma plataforma para comprar e vender produtos de diversos fornecedores. Não nos responsabilizamos pela qualidade, segurança ou legalidade dos itens listados.
                  </p><p>
                    <strong>3. Cadastro</strong><br/>
                    Para utilizar nossos serviços, é necessário criar uma conta. Você concorda em fornecer informações verdadeiras e atualizadas, e manter a confidencialidade de sua senha.
                  </p><p>
                    <strong>4. Privacidade</strong><br/>
                    Sua privacidade é importante para nós. Nossa Política de Privacidade explica como coletamos e utilizamos suas informações pessoais.
                  </p><p>
                    <strong>5. Direitos de Propriedade Intelectual</strong><br/>
                    Todo o conteúdo do ConectJP, incluindo textos, gráficos e logotipos, é protegido por direitos autorais e pertence ao ConectJP ou a seus fornecedores.
                  </p><p>
                    <strong>6. Uso do Aplicativo</strong><br/>
                    Você concorda em não utilizar o aplicativo para atividades ilegais, enganosas, maliciosas ou discriminatórias. O ConectJP reserva-se o direito de suspender ou terminar contas que violem esses termos.
                  </p><p>
                    <strong>7. Limitação de Responsabilidade</strong><br/>
                    O ConectJP não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços.
                  </p><p>
                    <strong>8. Lei Aplicável e Jurisdição</strong><br/>
                    Estes termos são regidos pelas leis do país onde o aplicativo é baseado. Qualquer disputa será submetida à jurisdição exclusiva dos tribunais desse país.
                  </p>
                </Page>
              }
            />
          </Route>
        </Routes>
        <Menu/>
      </Router>
    </>
  );
}

export default App;