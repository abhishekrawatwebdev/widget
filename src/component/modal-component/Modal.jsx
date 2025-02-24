import React, { useEffect, useRef } from 'react'
import './modal-component.css'
import { IoClose } from 'react-icons/io5';

const ModalComponent = ({children, title, onClose=()=>{}}) => {
  const widgetRef = useRef(null);

  const handleClickOutside = (event) => {
    if (widgetRef.current && widgetRef.current === event.target) {
      onClose(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='zithara-widget-modal-container' ref={widgetRef}>
        <div className='zithara-widget-modal'>
          <div className="zithara-widget-modal-header">
            <p className="zithara-widget-modal-title">
              {title || ""}
            </p>
            <IoClose className="zithara-modal-close-icon" onClick={onClose} />
          </div>
          <div className='zithara-widget-modal-content'>
            {children}
          </div>
        </div>
    </div>
  )
}

export default ModalComponent;