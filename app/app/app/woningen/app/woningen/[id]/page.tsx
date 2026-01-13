export default function WoningDetail({ params }: { params: { id: string } }) {
  const map: Record<string, any> = {
    "1": {
      title: "Licht appartement met lift",
      place: "Amsterdam",
      text:
        "Prettig wonen met lift, goede bereikbaarheid en mogelijkheden voor ontmoeting. Hulp en ondersteuning zijn later te organiseren; zorg is optioneel."
    },
    "2": {
      title: "Gelijkvloers wonen nabij winkels",
      place: "Utrecht",
      text:
        "Gelijkvloers en comfortabel, met voorzieningen dichtbij. Focus op wonen en welzijn, met opties om later hulp en ondersteuning te organiseren."
    },
    "3": {
      title: "Serviceflat met ontmoetingsruimte",
      place: "Haarlem",
      text:
        "Wonen met community en activiteiten in het complex. Ondersteuning en zorg zijn mogelijk wanneer dat later nodig is — nooit verplicht."
    }
  };

  const item = map[params.id] || {
    title: "Woning (demo)",
    place: "Onbekend",
    text: "Demo-detailpagina."
  };

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ fontSize: "13px", color: "#666" }}>{item.place}</div>
      <h1 style={{ marginTop: "6px" }}>{item.title}</h1>

      <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.6 }}>{item.text}</p>

      <h3 style={{ marginTop: "26px" }}>Welzijn & omgeving</h3>
      <ul>
        <li>Mogelijkheden voor ontmoeting en omkijken</li>
        <li>Voorzieningen dichtbij of goed te organiseren</li>
        <li>Rust en overzicht voor naasten</li>
      </ul>

      <h3 style={{ marginTop: "26px" }}>Hulp, ondersteuning en zorg (optioneel)</h3>
      <p style={{ color: "#444" }}>
        VitaWoon zet wonen centraal. Hulp en zorg zijn beschikbaar en te organiseren wanneer dat later nodig is.
      </p>

      <div style={{ display: "flex", gap: "12px", marginTop: "18px" }}>
        <a
          href="/vitacheck"
          style={{ background: "#111", color: "#fff", padding: "10px 14px", borderRadius: "10px", textDecoration: "none" }}
        >
          Doe de VitaCheck
        </a>
        <a
          href="/voor-naasten"
          style={{ border: "1px solid #ccc", padding: "10px 14px", borderRadius: "10px", textDecoration: "none" }}
        >
          Voor naasten
        </a>
      </div>

      <p style={{ marginTop: "24px" }}>
        <a href="/woningen">← Terug naar woningen</a>
      </p>
    </main>
  );
}
