import './index.css';
import Header from './components/Header.jsx';
import PrimesInput from './components/PrimesInput.jsx';
import PrimesCalc from './components/PrimesCalc.jsx';
import PrimesList from './components/PrimesList.jsx';

export default function App() {
    return (
        <>
            <div className="container">
                <Header />
                <PrimesInput />
                <PrimesCalc />
                <PrimesList />
            </div>
        </>
    );
}
