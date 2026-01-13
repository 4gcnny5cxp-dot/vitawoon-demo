export default function VitaCheck() {
  return (
    <main style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>VitaCheck (demo)</h1>
      <p style={{ color: "#444" }}>
        Rustig vooruitkijken. Wonen en welzijn centraal. Hulp en zorg zijn optioneel en later te organiseren.
      </p>

      <ol style={{ lineHeight: 1.7 }}>
        <li>Waar wilt u wonen (plaats/regio)?</li>
        <li>Wat geeft dagelijks comfort (lift, gelijkvloers, voorzieningen)?</li>
        <li>Wat is belangrijk voor welzijn (ontmoeting, activiteiten, omkijken)?</li>
        <li>Waar wilt u later op kunnen terugvallen (hulp, ondersteuning, zorg)?</li>
      </ol>

      <p style={{ marginTop: "24px" }}><a href="/">← Terug naar VitaWoon</a></p>
    </main>
  );
}
