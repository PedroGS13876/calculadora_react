import React from 'react';
import IMCCalculator from './components/IMCCalculator';
import './styles/App.css';
import './styles/global.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Calculadora de IMC</h1>
      <IMCCalculator />
    </div>
  );
};

export default App;