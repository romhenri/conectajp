import React, { ReactComponentElement } from 'react';
import { useNavigate } from 'react-router-dom'
import '../css/Modal.css'

interface ModalProps {
  onClose: () => void;
}

const modalAddToCart: React.FC<ModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const goToCartPage = () => {navigate('/minha-conta/carrinho')};

  return (
    <div className="bg-modal">
      <div className='modal'>
        <h2>Item adicionado ao Carrinho!</h2>
        <hr />
        <p>Você pode explorar outros itens e quando quiser concluir a comprar basta acessar seu carrinho.</p>

        <div className="flexLine">
          <button onClick={goToCartPage}>
            Ir para o Carrinho
          </button>

          <button onClick={onClose}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default modalAddToCart;