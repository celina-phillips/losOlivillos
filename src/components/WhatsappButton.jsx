
import React from "react";
import 

const WhatsAppButton = () => {
    const handleClick = () => {
      // Reemplaza "1234567890" con tu número de teléfono de WhatsApp
      window.location.href = "https://wa.me/1234567890";
    };
  
    return (
      <button onClick={handleClick}>
        <i className="fab fa-whatsapp"></i> Contactar por WhatsApp
      </button>
    );
  };
  
  export default WhatsAppButton;
   
  
  
  
  
  