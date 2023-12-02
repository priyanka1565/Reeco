// Modal.js
import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Example Modal"
        >
            {children}
            <button onClick={onClose}>Close</button>
        </Modal>
    );
};

export default CustomModal;
