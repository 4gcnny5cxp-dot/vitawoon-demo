import { useRouter } from "next/router";

export default function WoningDetail() {
  const { id } = useRouter().query;
  const key = String(id || "");

  // Mini “database” in de detailpagina (demo)
  const map: Record<string, any> = {
    "vw-1": {
      title: "Licht appartement met lift",
      place: "Amsterdam",
      label: "Huur",
      price: "€ 1.450 p/m",
      source: "VitaWoon demo",
      text:
        "Prettig wonen met lift en mogelijkheden voor ontmoeting. Hulp en ondersteuning zijn later te organiseren; zorg is optioneel."
    },
    "vw-2": {
      title: "Gelijkvloerse woning nabij winkels",
      place: "Utrecht",
      label: "Koop",
      price: "€ 425.000 k.k.",
      source: "VitaWoon demo",
      text:
        "Gelijkvloers en comfortabel, met voorzieningen dichtbij. Wonen en welzijn centraal, met opties voor later."
    },
    "am-stadsveteraan": {
      title: "De Stadsveteraan 020 (geclusterd wonen / 55+ concept)",
      place: "Amsterdam",
      label: "Nieuwbouw / Concept",
      price: "n.v.t. (voorbeeld)",
      source: "AM / Woonzorg Nederland (voorbeeld)",
      text:
        "Voorbeeld van een geclusterde woonvorm voor senioren met nadruk op community en samenredzaamheid."
    },
    "am-lets-live": {
      title: "Let’s Live (woonconcept met optionele zorg/ondersteuning)",
      place: "Meerdere locaties (concept)",
      label: "Concept",
      price: "n.v.t. (voorbeeld)",
      source: "AM (voorbeeld)",
      text:
        "Voorbeeldconcept gericht op zelfstandig wonen, met ondersteuning/zorg die later kan worden ingericht."
    },
    "bi-bospark": {
      title: "Bospark – levensloopbestendige huurwoningen (senioren)",
      place: "Alphen aan den Rijn",
      label: "Nieuwbouw (huur)",
      price: "n.v.t. (voorbeeld)",
      source: "Bouwinvest (voorbeeld)",
      text:
        "Voorbeeld van een seniorencomplex waar wonen en ontmoeten centraal staan, met flexibele inzet van ondersteuning."
    },
    "bi-grote-lijster": {
      title: "Grote Lijster – particulier woonzorgproject (42 woningen)",
      place: "Uithoorn",
      label: "Nieuwbouw",
      price: "n.v.t. (voorbeeld)",
      source: "Bouwinvest Senior Living Impact Fund (voorbeeld)",
      text:
        "Voorbeeld van een woonzorgproject gericht op senioren met zwaardere zorgbehoefte (illustratief)."
    }
  };

  const item = map[key] || {
    title: "Woning (demo)",
    place: "",
    label: "",
    price: "",
    source: "Demo",
    text: "Geen detailinformatie beschikbaar."
  };

  return (
    <main style={{ padding: "40px", maxWidth: "980px", margin: "0 auto" }}>
      <div style={{ fontSize: 13, color: "#666" }}>{item.place}</div>
      <h1 style={{ marginTop: 6 }}>{item.title}</h1>

      <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginTop: 10, color: "#444" }}>
        <div><strong>Type:</strong> {item.label}</div>
        <div><strong>Prijs:</strong> {item.price}</div>
        <div><strong>Bron:</strong> {item.source}</div>
      </div>

      <div style={{ marginTop: 18, border: "1px solid #eee", borderRadius: 16, padding: 16, background: "#fafafa" }}>
        <strong>Beschrijving</strong>
        <p style={{ marginTop: 8, lineHeight: 1.6 }}>{item.text}</p>
      </div>

      <h3 style={{ marginTop: 22 }}>Welzijn & community</h3>
      <ul style={{ lineHeight: 1.7 }}>
        <li>Ontmoeting en omkijken als onderdeel van prettig wonen</li>
        <li>Voorzieningen in de buurt of goed te organiseren</li>
        <li>Rust en overzicht voor naasten</li>
      </ul>

      <h3 style={{ marginTop: 22 }}>Hulp, ondersteuning en zorg (optioneel)</h3>
      <p style={{ lineHeight: 1.6, color: "#444" }}>
        VitaWoon zet wonen centraal. Hulp en zorg zijn beschikbaar en te organiseren wanneer dat later nodig is —
        zonder dat dit nu een voorwaarde is.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
        <a href="/vitacheck" style={{ background: "#111", color: "#fff", padding: "10px 14px", borderRadius: 10, textDecoration: "none" }}>
          Doe de VitaCheck
        </a>
        <a href="/woningen" style={{ border: "1px solid #ccc", padding: "10px 14px", borderRadius: 10, textDecoration: "none" }}>
          Terug naar overzicht
        </a>
      </div>
    </main>
  );
}
