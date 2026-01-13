export default function VitaCheck() {
  return (
    <main style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>VitaCheck (demo)</h1>
      <p style={{ color: "#444" }}>
        Rustig vooruitkijken. Wonen en welzijn staan centraal. Hulp en zorg zijn optioneel en later te organiseren.
      </p>

      <ol style={{ lineHeight: 1.7 }}>
        <li>Waar wilt u wonen (plaats/regio)?</li>
        <li>Wat geeft u dagelijks comfort (lift, gelijkvloers, voorzieningen)?</li>
        <li>Wat vindt u belangrijk voor welzijn (ontmoeting, activiteiten, omkijken)?</li>
        <li>Waar wilt u later op kunnen terugvallen (hulp, ondersteuning, zorg)?</li>
      </ol>

      <p style={{ marginTop: "18px", fontSize: "13px", color: "#666" }}>
        In de echte versie wordt dit een formulier dat matches en een overzicht teruggeeft.
      </p>

      <p style={{ marginTop: "24px" }}>
        <a href="/">← Terug naar VitaWoon</a>
      </p>
    </main>
  );
}
