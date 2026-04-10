export default function Header() {
    return (
        <header className="header">
            <h1>Prime Finder</h1>
            <span>
                Projeto que demonstra os beneficios de performance do React hook
                <strong> useMemo</strong>, pra operações complexas. O primeiro calculo
                leva tempo, mas as próximas chamadas com o mesmo input é instantâneo.
            </span>
            <small>
                <strong>O que é um número primo?</strong>
                <br />
                São números naturais maiores que 1 que possuem exatamente dois divisores:
                1 e eles mesmos.
            </small>
        </header>
    );
}
