import React, { useContext } from "react";
import { Context } from "../store/appContext";
import '../css/ErrorModal.css';

const ErrorModal = ({ onClose }) => {
    const { store } = useContext(Context);

    return (
        <div className="error-modal-container">
            <div className="error-modal-content">
                <h2 className="error-modal-title">Error</h2>
                <p className="error-modal-message">{store.error}</p>
            </div>
        </div>
    );
};


export default ErrorModal;
