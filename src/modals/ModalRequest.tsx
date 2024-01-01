import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../css/Modal.css'

interface ModalProps {
  onClose: () => void;
}

const modalAddToCart: React.FC<ModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const goToRequestsPage = () => {navigate('/minha-conta/pedidos')};

  return (
    <div className="bg-modal">
      <div className='modal'>
        <h2>Pedido feito!</h2>
        <hr />
        <p>Confira o(s) item(s) nos seus pedidos.</p>

        <div className="flexLine">
          <button onClick={goToRequestsPage}>
            Ir para os Pedidos
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