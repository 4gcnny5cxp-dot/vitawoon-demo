export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>VitaWoon</h1>
        <nav style={{ fontSize: "14px" }}>
          <a href="/woningen" style={{ marginRight: "12px" }}>Woningen</a>
          <a href="/vitacheck" style={{ marginRight: "12px" }}>VitaCheck</a>
          <a href="/voor-naasten" style={{ marginRight: "12px" }}>Voor naasten</a>
          <a href="/voor-aanbieders" style={{ marginRight: "12px" }}>Voor aanbieders</a>
          <a href="/vitadomus">VitaDomus</a>
        </nav>
      </div>

      <h2 style={{ marginTop: "30px", lineHeight: 1.3 }}>
        Ontdek woningen waar u nu prettig woont —<br />
        met voorzieningen, hulp en zorg beschikbaar wanneer dat later nodig is.
      </h2>

      <p style={{ fontSize: "16px", color: "#444" }}>
        Voor ouderen en hun naasten die vooruit willen kijken. Wonen en welzijn centraal.
        Hulp en zorg zijn altijd optioneel en te organiseren wanneer dat nodig is.
      </p>

      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <a href="/woningen" style={{ background: "#111", color: "#fff", padding: "10px 14px", borderRadius: "10px", textDecoration: "none" }}>
          Bekijk woningen
        </a>
        <a href="/vitacheck" style={{ border: "1px solid #ccc", padding: "10px 14px", borderRadius: "10px", textDecoration: "none" }}>
          Doe de VitaCheck (2 min)
        </a>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h3>Wonen & welzijn centraal</h3>
      <ul>
        <li>Woningen die passen bij het leven van nu</li>
        <li>Aandacht voor ontmoeting, community en omkijken</li>
        <li>Voorzieningen dichtbij of goed te organiseren</li>
        <li>Inzicht in hulp, ondersteuning en zorg – wanneer dat later nodig is</li>
      </ul>

      <hr style={{ margin: "30px 0" }} />

      <h3>Test de demo</h3>
      <p>Klik door de onderdelen en geef feedback op taal, vertrouwen en flow:</p>
      <ul>
        <li><a href="/woningen">Woningen (demo-overzicht)</a></li>
        <li><a href="/vitacheck">VitaCheck (demo)</a></li>
        <li><a href="/voor-aanbieders">Voor aanbieders</a></li>
        <li><a href="/vitadomus">VitaDomus</a></li>
      </ul>

      <p style={{ marginTop: "40px", fontSize: "13px", color: "#666" }}>
        Dit is een testomgeving om look & feel en functies te toetsen met collega’s.
      </p>
    </main>
  );
}
