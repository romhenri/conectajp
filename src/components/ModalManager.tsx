import React from 'react';
import ModalAddToCart from '../modals/ModalAddToCart';
import ModalRequest from '../modals/ModalRequest'

interface ModalManagerProps {
  type: string;
  isModalOpen: boolean;
  closeModal: () => void;
}

const ModalManager: React.FC<ModalManagerProps> = ({ type, isModalOpen, closeModal }) => {
  return (
    <>
      {isModalOpen && (
        <>
          {type === 'AddToCart' && <ModalAddToCart onClose={closeModal} />}
          {type === 'Request' && <ModalRequest onClose={closeModal} />}
        </>
      )}
    </>
  );
};

export default ModalManager;
