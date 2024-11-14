    import React, { useState } from 'react';
    import '../styles/App.css';

    const IMCCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [imc, setImc] = useState(null);
    const [classification, setClassification] = useState('');

    const calculateIMC = () => {
        if (weight && height) {
        const heightInMeters = height;
        const calculatedIMC = weight / (heightInMeters ** 2);
        setImc(calculatedIMC.toFixed(2));
        classifyIMC(calculatedIMC);
        }
    };

    const classifyIMC = (imc) => {
        if (imc < 18.5) setClassification('Abaixo do peso');
        else if (imc < 25) setClassification('Peso normal');
        else if (imc < 30) setClassification('Sobrepeso');
        else if (imc < 35) setClassification('Obesidade Grau I');
        else if (imc < 40) setClassification('Obesidade Grau II');
        else setClassification('Obesidade Grau III');
    };

    return (
        <div className="imc-calculator">
        <label>
            Peso (kg):
            <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            />
        </label>
        <br />
        <label>
            Altura (metros):
            <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            />
        </label>
        <br />
        <button onClick={calculateIMC}>Calcular IMC</button>
        {imc && (
            <div>
            <h3>Seu IMC: {imc}</h3>
            <p>Classificação: {classification}</p>
            </div>
        )}
        </div>
    );
    };

    export default IMCCalculator;