import { useRouter } from "next/router";

export default function WoningDetail() {
  const router = useRouter();
  const { id } = router.query;

  const map: Record<string, { title: string; place: string; text: string }> = {
    "1": {
      title: "Licht appartement met lift",
      place: "Amsterdam",
      text:
        "Prettig wonen met lift en goede bereikbaarheid. Hulp en ondersteuning zijn later te organiseren; zorg is optioneel."
    },
    "2": {
      title: "Gelijkvloers wonen nabij winkels",
      place: "Utrecht",
      text:
        "Gelijkvloers en comfortabel, met voorzieningen dichtbij. Focus op wonen en welzijn, met opties voor later."
    },
    "3": {
      title: "Serviceflat met ontmoetingsruimte",
      place: "Haarlem",
      text:
        "Wonen met community en ontmoeting. Ondersteuning en zorg zijn mogelijk wanneer dat later nodig is — nooit verplicht."
    }
  };

  const item = map[String(id)] || { title: "Woning (demo)", place: "", text: "Demo-detailpagina." };

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ fontSize: "13px", color: "#666" }}>{item.place}</div>
      <h1 style={{ marginTop: "6px" }}>{item.title}</h1>

      <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.6 }}>{item.text}</p>

      <h3 style={{ marginTop: "22px" }}>Welzijn & omkijken</h3>
      <ul style={{ lineHeight: 1.7 }}>
        <li>Mogelijkheden voor ontmoeting en verbinding</li>
        <li>Voorzieningen dichtbij of te organiseren</li>
        <li>Rust en overzicht voor naasten</li>
      </ul>

      <h3 style={{ marginTop: "22px" }}>Hulp, ondersteuning en zorg (optioneel)</h3>
      <p style={{ color: "#444" }}>
        VitaWoon zet wonen centraal. Hulp en zorg zijn beschikbaar en te organiseren wanneer dat later nodig is.
      </p>

      <p style={{ marginTop: "24px" }}><a href="/woningen">← Terug naar woningen</a></p>
    </main>
  );
}
