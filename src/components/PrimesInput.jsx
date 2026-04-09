export default function PrimesInput() {
    return (
        <section className="input-section">
            <label htmlFor="number">Calcule os números primos até:</label>
            <input id="number" type="text" />
            <button className={'input-btn'}>Calcular</button>
        </section>
    );
}
