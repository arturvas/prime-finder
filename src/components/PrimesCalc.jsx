export default function PrimesCalc({ performanceInfo }) {
    return (
        <section className="calc-output-section">
            <div className="total-prime-found">
                <span>Nº Primos encontrados:</span>
                <strong>123</strong>
            </div>
            <div className="total-prime-calc">
                <span>Tempo de cáculo:</span>
                <strong>{performanceInfo}</strong>
            </div>
        </section>
    );
}
