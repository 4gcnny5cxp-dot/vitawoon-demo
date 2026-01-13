export default function Woningen() {
  const listings = [
    // --- VitaWoon demo listings (eigen/test) ---
    {
      id: "vw-1",
      title: "Licht appartement met lift",
      place: "Amsterdam",
      label: "Huur",
      price: "€ 1.450 p/m",
      tags: ["Voorzieningen dichtbij", "Community", "Hulp organiseerbaar", "Zorg optioneel"],
      source: "VitaWoon demo"
    },
    {
      id: "vw-2",
      title: "Gelijkvloerse woning nabij winkels",
      place: "Utrecht",
      label: "Koop",
      price: "€ 425.000 k.k.",
      tags: ["Gelijkvloers", "Voorzieningen dichtbij", "Welzijn", "Hulp organiseerbaar"],
      source: "VitaWoon demo"
    },

    // --- Voorbeelden AM / concepten / senior wonen (demo, externe bron) ---
    {
      id: "am-stadsveteraan",
      title: "De Stadsveteraan 020 (geclusterd wonen / 55+ concept)",
      place: "Amsterdam",
      label: "Nieuwbouw / Concept",
      price: "n.v.t. (voorbeeld)",
      tags: ["Community", "Samenredzaamheid", "Seniorenconcept"],
      source: "AM / Woonzorg Nederland (voorbeeld)"
    },
    {
      id: "am-lets-live",
      title: "Let’s Live (woonconcept met optionele zorg/ondersteuning)",
      place: "Meerdere locaties (concept)",
      label: "Concept",
      price: "n.v.t. (voorbeeld)",
      tags: ["Zelfstandig wonen", "Zorg optioneel", "Doelgroep senioren"],
      source: "AM (voorbeeld)"
    },

    // --- Voorbeelden Bouwinvest (demo, externe bron) ---
    {
      id: "bi-bospark",
      title: "Bospark – levensloopbestendige huurwoningen (senioren)",
      place: "Alphen aan den Rijn",
      label: "Nieuwbouw (huur)",
      price: "n.v.t. (voorbeeld)",
      tags: ["Levensloopbestendig", "Ontmoeting", "Zorg/ondersteuning flexibel"],
      source: "Bouwinvest (voorbeeld)"
    },
    {
      id: "bi-grote-lijster",
      title: "Grote Lijster – particulier woonzorgproject (42 woningen)",
      place: "Uithoorn",
      label: "Nieuwbouw",
      price: "n.v.t. (voorbeeld)",
      tags: ["Woonzorg", "Zwaardere zorg mogelijk", "Langjarige verhuur"],
      source: "Bouwinvest Senior Living Impact Fund (voorbeeld)"
    }
  ];

  return (
    <main style={{ padding: "40px", maxWidth: "980px", margin: "0 auto" }}>
      <h1>Woningen</h1>
      <p style={{ color: "#444", maxWidth: "820px" }}>
        Eén overzicht (zoals Funda): huur, koop en nieuwbouw door elkaar. Wonen en welzijn centraal.
        Hulp en zorg zijn optioneel en te organiseren wanneer dat later nodig is.
      </p>

      {/* Filters (demo, niet functioneel) */}
      <div
        style={{
          marginTop: "18px",
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
          alignItems: "center"
        }}
      >
        <input placeholder="Zoek op plaats of project…" style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }} />
        <select style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }}>
          <option>Alle types</option>
          <option>Huur</option>
          <option>Koop</option>
          <option>Nieuwbouw</option>
          <option>Concept</option>
        </select>
        <select style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }}>
          <option>Toegankelijkheid</option>
          <option>Lift</option>
          <option>Gelijkvloers</option>
          <option>Drempelvrij</option>
        </select>
        <select style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }}>
          <option>Welzijn / community</option>
          <option>Ontmoeting</option>
          <option>Activiteiten</option>
          <option>Omgeving/voorzieningen</option>
        </select>
      </div>

      <div style={{ marginTop: 18, fontSize: 12, color: "#666" }}>
        *Dit is demo-data. Voorbeelden van externe partijen zijn opgenomen als illustratie van type aanbod en positionering.
      </div>

      {/* Cards */}
      <div style={{ display: "grid", gap: 14, marginTop: 22 }}>
        {listings.map((x) => (
          <a
            key={x.id}
            href={`/woningen/${encodeURIComponent(x.id)}`}
            style={{
              border: "1px solid #e6e6e6",
              borderRadius: 16,
              padding: 16,
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: 13, color: "#666" }}>{x.place}</div>
                <div style={{ fontWeight: 600, marginTop: 4 }}>{x.title}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, color: "#666" }}>{x.label}</div>
                <div style={{ fontWeight: 600 }}>{x.price}</div>
              </div>
            </div>

            <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {x.tags.map((t) => (
                <span key={t} style={{ border: "1px solid #eee", padding: "4px 10px", borderRadius: 999, fontSize: 12 }}>
                  {t}
                </span>
              ))}
              <span style={{ marginLeft: "auto", fontSize: 12, color: "#666" }}>{x.source}</span>
            </div>
          </a>
        ))}
      </div>

      <p style={{ marginTop: 24 }}>
        <a href="/">← Terug naar VitaWoon</a>
      </p>
    </main>
  );
}
