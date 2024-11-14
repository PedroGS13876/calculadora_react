import React, { useState } from 'react';
import classifyIMC from '../utils/imcUtils';
import './IMCCalculator.css';

const IMCCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [imc, setImc] = useState(null);
    const [classification, setClassification] = useState('');

    const calculateIMC = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const calculatedIMC = weight / (heightInMeters ** 2);
            setImc(calculatedIMC.toFixed(2));
            setClassification(classifyIMC(calculatedIMC));
        }
    };

    return (
        <div className="imc-calculator">
            <h2>Calculadora de IMC</h2>
            <label>
                Peso (kg):
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </label>
            <label>
                Altura (cm):
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </label>
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
