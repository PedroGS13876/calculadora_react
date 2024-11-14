import React, { useState } from 'react';

    const IMCCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [imc, setImc] = useState(null);
    const [classification, setClassification] = useState('');

    const calculateIMC = () => {
        if (weight && height) {
        // Converte altura para metros (caso esteja em cm)
        const heightInMeters = height / 100;
        const calculatedIMC = weight / (heightInMeters ** 2);
        setImc(calculatedIMC.toFixed(2));
        classifyIMC(calculatedIMC);
        }
    };

    const classifyIMC = (imc) => {
        if (imc < 18.5) {
        setClassification('Abaixo do peso');
        } else if (imc >= 18.5 && imc <= 24.9) {
        setClassification('Peso normal');
        } else if (imc >= 25 && imc <= 29.9) {
        setClassification('Sobrepeso');
        } else if (imc >= 30 && imc <= 34.9) {
        setClassification('Obesidade Grau I');
        } else if (imc >= 35 && imc <= 39.9) {
        setClassification('Obesidade Grau II');
        } else {
        setClassification('Obesidade Grau III');
        }
    };

    return (
        <div>
        <h2>Calculadora de IMC</h2>
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
            Altura (cm):
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
