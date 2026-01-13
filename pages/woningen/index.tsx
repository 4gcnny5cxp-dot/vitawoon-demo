export default function Woningen() {
  const listings = [
    { id: "vw-1", title: "Licht appartement met lift", place: "Amsterdam", label: "Huur", price: "€ 1.450 p/m" },
    { id: "vw-2", title: "Gelijkvloerse woning nabij winkels", place: "Utrecht", label: "Koop", price: "€ 425.000 k.k." },
    { id: "vw-3", title: "Serviceflat met ontmoetingsruimte", place: "Haarlem", label: "Nieuwbouw (huur)", price: "n.v.t. (demo)" }
  ];

  return (
    <main style={{ padding: "40px", maxWidth: "980px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ margin: 0 }}>Woningen</h1>
          <p style={{ marginTop: 8, color: "#444" }}>
            Eén overzicht (huur/koop/nieuwbouw door elkaar) — demo.
          </p>
        </div>
        <a
          href="/woningen/kaart"
          style={{ padding: "10px 14px", borderRadius: 10, background: "#111", color: "#fff", textDecoration: "none" }}
        >
          Kaart
        </a>
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
          </a>
        ))}
      </div>

      <p style={{ marginTop: 24 }}><a href="/">← Terug</a></p>
    </main>
  );
}
