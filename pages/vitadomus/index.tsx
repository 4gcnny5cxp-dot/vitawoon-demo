export default function VitaDomus() {
  return (
    <main style={{ padding: "40px", maxWidth: "980px", margin: "0 auto" }}>
      <h1>VitaDomus</h1>

      <p style={{ marginTop: 12, color: "#444", lineHeight: 1.6, maxWidth: 820 }}>
        VitaDomus is het platform achter VitaWoon.
        Wij organiseren de verbinding tussen wonen, welzijn en (optioneel) hulp en zorg —
        vanuit één regiepunt, met de bewoner en zijn naasten centraal.
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h2>Waarom VitaDomus?</h2>
      <p style={{ color: "#444", lineHeight: 1.6, maxWidth: 820 }}>
        De woonvraag van ouderen ontstaat vroeg, maar aanbod, diensten en zorg sluiten hier vaak pas laat op aan.
        VitaDomus brengt deze werelden samen — zonder ze te vermengen.
      </p>

      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr", marginTop: 12 }}>
        <Block
          title="Eén regiepunt"
          text="Bewoners, naasten, aanbieders en dienstverleners werken vanuit één logisch platform."
        />
        <Block
          title="Vraaggestuurd"
          text="VitaCheck en zoekgedrag geven inzicht in wat mensen écht willen."
        />
        <Block
          title="Schaalbaar"
          text="Los van locaties, zorgvormen of eigendom. Geschikt voor groei."
        />
        <Block
          title="Neutraal en onafhankelijk"
          text="Geen zorglabel, geen verkoopdruk. Wonen staat voorop."
        />
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>Wat VitaDomus organiseert</h2>
      <ul style={{ lineHeight: 1.8 }}>
        <li>Vraag- en aanbodmatching (wonen)</li>
        <li>Data & inzichten uit VitaCheck</li>
        <li>Verhuurservice en vastgoedbeheer</li>
        <li>Communityvorming rondom wonen en wijk</li>
        <li>Toeleiding naar hulp, ondersteuning en zorg (optioneel)</li>
      </ul>

      <hr style={{ margin: "30px 0" }} />

      <h2>De kracht van scheiding</h2>
      <p style={{ color: "#444", lineHeight: 1.6, maxWidth: 820 }}>
        VitaWoon is het merk voor bewoners en naasten.
        VitaDomus is de organisatie die de keten organiseert.
        Deze scheiding maakt het platform helder, betrouwbaar en schaalbaar.
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
        <a
          href="/voor-aanbieders"
          style={{ padding: "10px 14px", borderRadius: 10, background: "#111", color: "#fff", textDecoration: "none" }}
        >
          Samenwerken als aanbieder
        </a>
        <a
          href="/woningen"
          style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", color: "#111", textDecoration: "none" }}
        >
          Bekijk VitaWoon
        </a>
      </div>

      <p style={{ marginTop: 30 }}>
        <a href="/">← Terug naar VitaWoon</a>
      </p>
    </main>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 16 }}>
      <strong>{title}</strong>
      <p style={{ marginTop: 8, color: "#444", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}
