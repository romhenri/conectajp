import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import DefaultProfile from '../assets/default-profile.png'
import icon_star from '../assets/star-30.png'
import '../css/pages.css'
import '../css/StorePage.css'
import '../css/AccountPage.css'

const MyAccountPage= () => {
  const navigate = useNavigate();

  const goToCartPage = () => {navigate('carrinho')}
  const goToRequestsPage = () => {navigate('pedidos')}
  const goToFavoritesPage = () => {navigate('favoritos')}

  return (
  <main className='account-page'>
    <header className='page-header'>
      <h1>Minha Conta</h1>
    </header>

    <section className='middle-section'>
      <div className="image-box">
        <img src={DefaultProfile} alt="" />
      </div>

      <div className="content-box">
        <h2>Usuário Padrão</h2>
        
        <div className="review-box">
          <img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/><img src={icon_star}/>
        </div>

        <div className='option'>Editar Perfil</div>
      </div>
    </section>

    <section className='account-section'>
    <div className="options">
      <div className="option" onClick={goToCartPage}>
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        <p>Carrinho</p>
      </div>
      <div className="option" onClick={goToRequestsPage}>
      < svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
        <p>Pedidos</p>
      </div>
      <div className="option" onClick={goToFavoritesPage}>
      <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
        <p>Favoritos</p>
      </div>
    </div>
      <hr />

      <div className="option">
        Ajustes
      </div>

      <div className="option">
        Suas Avaliações
      </div>

      <div className="option">
        Reembolsos e Devoluções
      </div>

      <hr />
      <div className="option">
        Central de Ajuda</div>
      <div className="option">Sugestões</div>
      <div className="option">Termos de Uso</div>
      <hr />
      <footer>
      </footer>
    </section>

  </main>)
}

export default MyAccountPage