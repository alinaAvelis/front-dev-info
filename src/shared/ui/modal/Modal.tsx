import React from 'react';
import CloseBtn from "@/shared/ui/close-button/CloseButton";

type modalProps = {
    onClose: () => void;
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
