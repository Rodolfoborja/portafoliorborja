import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const GenderReveal = () => {
  const [message, setMessage] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const phone = queryParams.get('phone');

  const handleConfirm = () => {
    setMessage(`Gracias por confirmar, ${name}.`);
    // Here you would send the message to the phone number
  };

  const handleDecline = () => {
    setMessage(`Lamentamos que no puedas asistir, ${name}.`);
  };

  return (
    <div>
      <h1>Confirmación de Asistencia</h1>
      <p>Nombre: {name}</p>
      <p>Teléfono: {phone}</p>
      <button onClick={handleConfirm}>Asiste</button>
      <button onClick={handleDecline}>No asiste</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default GenderReveal;