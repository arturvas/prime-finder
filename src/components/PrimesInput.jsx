export default function PrimesInput() {
    return (
        <div className="input-div">
            <label htmlFor="number">Calcule os números primos até:</label>
            <input id="number" type="text" />
            <button>Calcular</button>
        </div>
    );
}
