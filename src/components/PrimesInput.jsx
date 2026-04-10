import { useState } from 'react';

export default function PrimesInput({ setNumPrimos, setPerformanceInfo }) {
    const [max, setMax] = useState(0);

    function handleChange(e, setter) {
        let value = e.target.value;

        if (value !== '' && !isNaN(Number(value))) {
            setter(Number(value));
        } else {
            console.log('Valor invalido');
        }
    }

    function onClick() {
        const startPerf = performance.now();
        setNumPrimos(calcNumPrimo(max));
        const endPerf = performance.now();

        const totalPerf = endPerf - startPerf;

        setPerformanceInfo(totalPerf);

        // console.log(typeof totalPerf);
    }

    function calcNumPrimo(max) {
        let numPrimo = [];

        if (max === 1) {
            return false;
        }

        for (let i = 2; i <= max; i++) {
            let isPrime = true;

            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                }
            }

            if (isPrime) {
                numPrimo.push(i);
            }
        }

        return numPrimo;
    }

    return (
        <section className="input-section">
            <label htmlFor="number">Calcule os números primos até:</label>
            <input
                id="number"
                type="number"
                value={max}
                onChange={(e) => handleChange(e, setMax)}
            />
            <button className={'input-btn'} onClick={onClick}>
                Calcular
            </button>
        </section>
    );
}
