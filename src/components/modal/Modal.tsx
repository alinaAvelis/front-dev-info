import React from 'react';
import CloseBtn from '../close_btn/CloseBtn';

type modalProps = {
    onClose: Function;
    children: React.ReactNode;
};

const Modal = ({onClose, children}: modalProps) => {
    return (
        <div className='modal_background'>
            <div className="modal">
                <CloseBtn clickHandler={onClose}/>

                {children}
            </div>
        </div>
    )
}

export default Modal;