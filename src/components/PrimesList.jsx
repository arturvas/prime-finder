export default function PrimesList({ numPrimos }) {
    return (
        <section className="container-prime-list">
            <span>Prime Numbers: </span>
            <strong>{numPrimos.join(', ')}</strong>
        </section>
    );
}
