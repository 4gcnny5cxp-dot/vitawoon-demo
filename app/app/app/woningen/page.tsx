export default function Woningen() {
  const woningen = [
    {
      title: "Licht appartement met lift",
      place: "Amsterdam",
      tags: ["Voorzieningen dichtbij", "Community / ontmoeting", "Hulp organiseerbaar", "Zorg mogelijk"],
      id: "1"
    },
    {
      title: "Gelijkvloers wonen nabij winkels",
      place: "Utrecht",
      tags: ["Voorzieningen dichtbij", "Hulp organiseerbaar", "Welzijnsgericht"],
      id: "2"
    },
    {
      title: "Serviceflat met ontmoetingsruimte",
      place: "Haarlem",
      tags: ["Community", "Ondersteuning mogelijk", "Zorg optioneel"],
      id: "3"
    }
  ];

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Woningen (demo)</h1>
      <p style={{ color: "#444" }}>
        Demo-overzicht om de look & feel te testen. In een volgende versie komen hier filters en echte aanbiedingen.
      </p>

      <div style={{ display: "grid", gap: "14px", marginTop: "20px" }}>
        {woningen.map((w) => (
          <a
            key={w.id}
            href={`/woningen/${w.id}`}
            style={{
              border: "1px solid #ddd",
              borderRadius: "14px",
              padding: "16px",
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <div style={{ fontSize: "13px", color: "#666" }}>{w.place}</div>
            <div style={{ fontWeight: 600, marginTop: "4px" }}>{w.title}</div>
            <div style={{ marginTop: "10px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {w.tags.map((t) => (
                <span key={t} style={{ border: "1px solid #eee", padding: "4px 10px", borderRadius: "999px", fontSize: "12px" }}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <p style={{ marginTop: "24px" }}>
        <a href="/">← Terug naar VitaWoon</a>
      </p>
    </main>
  );
}
