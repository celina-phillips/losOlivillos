
import React from "react";

  function WhatsAppButton() {
    const handleClick = () => {
      // Reemplaza "1234567890" con tu número de teléfono de WhatsApp
      window.location.href = "https://wa.me/5492262655087";
    };

    return (
      <button onClick={handleClick}>
        <i className="fab fa-whatsapp"></i> Contactar por WhatsApp
      </button>
    );
  }
  
  export default WhatsAppButton;
   
  
  
  
  
  