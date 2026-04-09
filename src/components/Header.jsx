export default function Header() {
    return (
        <header className="header">
            <h1>Prime Finder</h1>
            <span>
                Projeto que demonstra os beneficios de performance do React hook useMemo,
                pra operações complexas. O primeiro calculo leva tempo, mas as próximas
                chamadas com o mesmo input é instantâneo.
            </span>
        </header>
    );
}
