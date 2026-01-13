import { useRouter } from "next/router";

export default function Kaart() {
  const router = useRouter();
  const focus = String(router.query.focus || "");

  const listings = [
    {
      id: "vw-1",
      title: "Licht appartement met lift",
      place: "Amsterdam",
      lat: 52.3676,
      lon: 4.9041
    },
    {
      id: "vw-2",
      title: "Gelijkvloerse woning nabij winkels",
      place: "Utrecht",
      lat: 52.0907,
      lon: 5.1214
    },
    {
      id: "vw-3",
      title: "Serviceflat met ontmoetingsruimte",
      place: "Haarlem",
      lat: 52.3874,
      lon: 4.6462
    }
  ];

  const selected =
    listings.find((x) => x.id === focus) || listings[0];

  return (
    <main style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap"
        }}
      >
        <h1 style={{ margin: 0 }}>Kaart – woningen</h1>

        <a
          href="/woningen"
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            background: "#111",
            color: "#fff",
            textDecoration: "none"
          }}
        >
          Terug naar overzicht
        </a>
      </div>

      <p style={{ marginTop: 10, color: "#444" }}>
        Klik een woning in de lijst → de kaart focust op de locatie.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 16,
          marginTop: 20
        }}
      >
        {/* LIJST */}
        <div
          style={{
            border: "1px solid #e6e6e6",
            borderRadius: 16,
            padding: 12
          }}
        >
          {listings.map((x) => (
            <a
              key={x.id}
              href={`/woningen/kaart?focus=${x.id}`}
              style={{
                display: "block",
                padding: 10,
                borderRadius: 12,
                textDecoration: "none",
                color: "#111",
                background:
                  x.id === selected.id ? "#f5f5f5" : "transparent"
              }}
            >
              <div style={{ fontSize: 12, color: "#666" }}>
                {x.place}
              </div>
              <div style={{ fontWeight: 600 }}>{x.title}</div>
            </a>
          ))}
        </div>

        {/* GOOGLE MAPS IFRAME */}
        <div
          style={{
            border: "1px solid #e6e6e6",
            borderRadius: 16,
            overflow: "hidden"
          }}
        >
          <iframe
            title="Google Maps"
            src={`https://www.google.com/maps?q=${selected.lat},${selected.lon}&z=13&output=embed`}
            style={{ width: "100%", height: "560px", border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}
