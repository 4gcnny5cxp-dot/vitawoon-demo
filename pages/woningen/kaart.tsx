export default function Woningen() {
  const listings = [
    { id: "vw-1", title: "Licht appartement met lift", place: "Amsterdam", label: "Huur", price: "€ 1.450 p/m", lat: 52.3676, lon: 4.9041 },
    { id: "vw-2", title: "Gelijkvloerse woning nabij winkels", place: "Utrecht", label: "Koop", price: "€ 425.000 k.k.", lat: 52.0907, lon: 5.1214 },
    { id: "vw-3", title: "Serviceflat met ontmoetingsruimte", place: "Haarlem", label: "Nieuwbouw (huur)", price: "n.v.t. (demo)", lat: 52.3874, lon: 4.6462 },
    { id: "am-stadsveteraan", title: "De Stadsveteraan 020 (concept)", place: "Amsterdam", label: "Concept", price: "n.v.t. (voorbeeld)", lat: 52.3728, lon: 4.8936 },
    { id: "bi-grote-lijster", title: "Grote Lijster – woonzorg (voorbeeld)", place: "Uithoorn", label: "Nieuwbouw", price: "n.v.t. (voorbeeld)", lat: 52.2370, lon: 4.8266 }
  ];

  return (
    <main style={{ padding: "40px", maxWidth: "980px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0 }}>Woningen</h1>
          <p style={{ marginTop: 8, color: "#444", maxWidth: 820 }}>
            Eén overzicht (zoals Funda): huur, koop en nieuwbouw door elkaar. Wonen en welzijn centraal.
            Hulp en zorg zijn optioneel en te organiseren wanneer dat later nodig is.
          </p>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <a href="/woningen" style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", textDecoration: "none", color: "#111" }}>
            Lijst
          </a>
          <a href="/woningen/kaart" style={{ padding: "10px 14px", borderRadius: 10, background: "#111", color: "#fff", textDecoration: "none" }}>
            Kaart
          </a>
        </div>
      </div>

      <div style={{ marginTop: 18, display: "grid", gap: 10, gridTemplateColumns: "1.3fr 1fr 1fr 1fr" }}>
        <input placeholder="Zoek op plaats of project (demo)..." style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }} />
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
          <option>Omkijken</option>
        </select>
      </div>

      <div style={{ marginTop: 14, fontSize: 12, color: "#666" }}>
        *Demo-data. “Voorbeeld”-items zijn illustratief (geen officieel aanbod).
      </div>

      <div style={{ display: "grid", gap: 14, marginTop: 22 }}>
        {listings.map((x) => (
          <a
            key={x.id}
            href={`/woningen/${encodeURIComponent(x.id)}`}
            style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 16, textDecoration: "none", color: "inherit" }}
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

            <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span style={{ border: "1px solid #eee", padding: "4px 10px", borderRadius: 999, fontSize: 12 }}>Welzijn</span>
              <span style={{ border: "1px solid #eee", padding: "4px 10px", borderRadius: 999, fontSize: 12 }}>Community</span>
              <span style={{ border: "1px solid #eee", padding: "4px 10px", borderRadius: 999, fontSize: 12 }}>Hulp optioneel</span>

              <a
                href={`/woningen/kaart?focus=${encodeURIComponent(x.id)}`}
                onClick={(e) => e.stopPropagation()}
                style={{ marginLeft: "auto", fontSize: 12, textDecoration: "underline", color: "#111" }}
              >
                Bekijk op kaart
              </a>
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
