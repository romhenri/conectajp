import React from 'react';
import Modal from '../components/Modal';

interface ModalManagerProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const ModalManager: React.FC<ModalManagerProps> = ({ isModalOpen, closeModal }) => {
  return (
    <>
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default ModalManager;