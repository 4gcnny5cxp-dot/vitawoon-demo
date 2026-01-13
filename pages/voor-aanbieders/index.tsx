export default function VoorAanbieders() {
  return (
    <main style={{ padding: "40px", maxWidth: "980px", margin: "0 auto" }}>
      <h1>Voor aanbieders</h1>

      <p style={{ marginTop: 12, color: "#444", lineHeight: 1.6, maxWidth: 820 }}>
        VitaWoon is dé plek waar ouderen en hun naasten zich vroeg oriënteren op een volgende woonstap.
        Niet pas als zorg noodzakelijk is — maar wanneer wonen, welzijn en toekomstbestendigheid centraal staan.
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
        <a
          href="/vitadomus"
          style={{ padding: "10px 14px", borderRadius: 10, background: "#111", color: "#fff", textDecoration: "none" }}
        >
          Over VitaDomus (het platform)
        </a>
        <a
          href="/woningen"
          style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", color: "#111", textDecoration: "none" }}
        >
          Bekijk VitaWoon
        </a>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>Waarom VitaWoon?</h2>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr", marginTop: 12 }}>
        <Card
          title="Vroege instroom"
          text="Bezoekers zijn nog in de oriëntatiefase. Dit vergroot keuzevrijheid, doorlooptijd en kwaliteit van matching."
        />
        <Card
          title="Beslissen doen ze samen"
          text="Niet alleen de bewoner, maar ook naasten zijn actief betrokken. Dat versnelt en verduidelijkt besluitvorming."
        />
        <Card
          title="Wonen centraal"
          text="Geen zorgportaal. Geen indicatie-gedreven instroom. Gewoon: prettig wonen met opties voor later."
        />
        <Card
          title="Gericht op toekomstbestendig aanbod"
          text="Levensloopbestendig, geclusterd wonen, seniorenconcepten, gemengd wonen en woonzorgprojecten."
        />
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>Wat u via VitaWoon kunt</h2>
      <ul style={{ lineHeight: 1.8, marginTop: 10 }}>
        <li>Aanbod zichtbaar maken bij een specifieke, relevante doelgroep</li>
        <li>Nieuwbouw en concepten vroeg positioneren</li>
        <li>Vraag ophalen via VitaCheck (inzichten, voorkeuren, regio’s)</li>
        <li>Leegstand beperken en doorstroming verbeteren</li>
        <li>Aansluiten op community, dienstverlening en beheer</li>
      </ul>

      <hr style={{ margin: "30px 0" }} />

      <h2>Samenwerken: hoe werkt dat?</h2>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr 1fr", marginTop: 12 }}>
        <Step
          number="1"
          title="Plaats aanbod"
          text="Woningen, projecten of concepten worden zichtbaar op VitaWoon."
        />
        <Step
          number="2"
          title="Match op behoefte"
          text="Via VitaCheck en zoekgedrag ontstaat gerichte instroom."
        />
        <Step
          number="3"
          title="Verbinding met diensten"
          text="Optioneel: verhuurservice, beheer, community en ondersteuning."
        />
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>Voor wie?</h2>
      <ul style={{ lineHeight: 1.8 }}>
        <li>Makelaars met passend seniorenaanbod</li>
        <li>Ontwikkelaars van levensloopbestendige en geclusterde woonconcepten</li>
        <li>Beleggers en fondsen met focus op senior living</li>
        <li>Corporaties en woonzorginitiatieven</li>
      </ul>

      <div style={{ marginTop: 20 }}>
        <a
          href="/vitadomus"
          style={{ padding: "12px 18px", borderRadius: 12, background: "#111", color: "#fff", textDecoration: "none" }}
        >
          Lees meer over VitaDomus →
        </a>
      </div>

      <p style={{ marginTop: 30 }}>
        <a href="/">← Terug naar VitaWoon</a>
      </p>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 16 }}>
      <strong>{title}</strong>
      <p style={{ marginTop: 8, color: "#444", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div style={{ border: "1px solid #e6e6e6",
