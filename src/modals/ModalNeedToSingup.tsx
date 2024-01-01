import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../css/Modal.css'

interface ModalProps {
  onClose?: () => void;
}
/* eslint-disable */
const ModalNeedToSingup: React.FC<ModalProps> = 
({ onClose }) => {
  const navigate = useNavigate();
  /* eslint-enable */
  return (
    <div className="bg-modal">
      <div className='modal'>
        <h2>Você precisa de Cadastro!</h2>
        <hr />
        <p>Você precisa se cadastrar para fazer isso.</p>

        <div className="flexLine">
          <button
            onClick={()=>{navigate('..')}}
          >
            Voltar
          </button>

          <button
            onClick={()=>{navigate('/cadastro')}}
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalNeedToSingup;