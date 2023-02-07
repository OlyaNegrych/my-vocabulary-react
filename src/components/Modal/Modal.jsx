import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from '../Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onCloseModal, children }) => {
  useEffect(() => {
    const handleEscDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleEscDown);

    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onCloseModal]);

  const handleCloseModal = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleCloseModal}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );
};
