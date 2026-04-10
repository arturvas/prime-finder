import './index.css';
import Header from './components/Header.jsx';
import PrimesInput from './components/PrimesInput.jsx';
import PrimesCalc from './components/PrimesCalc.jsx';
import PrimesList from './components/PrimesList.jsx';
import { useState } from 'react';

export default function App() {
    const [numPrimos, setNumPrimos] = useState([]);
    const [performanceInfo, setPerformanceInfo] = useState();

    return (
        <>
            <div className="container">
                <Header />
                <PrimesInput
                    setNumPrimos={setNumPrimos}
                    setPerformanceInfo={setPerformanceInfo}
                />
                <PrimesCalc performanceInfo={performanceInfo} />
                <PrimesList numPrimos={numPrimos} />
            </div>
        </>
    );
}
