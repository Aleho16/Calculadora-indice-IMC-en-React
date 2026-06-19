import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import ImcForm from './ImcForm';

function App() {
  // Estado para manejar el color de fondo dinámico
  const [bgColor, setBgColor] = useState('var(--bg)');

  return (
    <main 
      style={{ 
        backgroundColor: bgColor, 
        minHeight: '100vh', 
        transition: 'background-color 0.6s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="container text-center">
        <h1 className="display-3 fw-bold text-dark mb-2">Calculadora IMC</h1>
        <p className="lead text-muted mb-5">
          Ingresa tus datos y descubre tu Índice de Masa Corporal al instante.
        </p>

        {/* Instanciamos el formulario y le pasamos la función para actualizar el fondo */}
        <ImcForm onColorChange={setBgColor} />
      </div>
    </main>
  );
}

export default App;