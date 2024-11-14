import './App.css';
import './global.css';
import './index.css';

function App() {
  return (
    <div className='app-container'>
      <h2 className='app-header'>Calculadora de IMC</h2>
      <label>Peso (kg):</label>
      <input type="number" className='input-field' />
      <label>Altura (cm):</label>
      <input type="number" className='input-field' />
      <button className='calculate-button'>Calcular IMC</button>
    </div>
  );
}

export default App;