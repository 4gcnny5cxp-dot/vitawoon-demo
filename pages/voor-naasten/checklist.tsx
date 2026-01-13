export default function Checklist() {
  return (
    <main style={{ padding: "40px", maxWidth: "980px", margin: "0 auto" }}>
      <h1>Bezichtigings-checklist (voor naasten)</h1>
      <p style={{ color: "#444", maxWidth: 820, lineHeight: 1.6 }}>
        Een praktische checklist om snel te zien of een woning nu prettig is én later goed blijft passen.
        Focus op wonen en welzijn; hulp en zorg zijn optioneel.
      </p>

      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr", marginTop: 18 }}>
        <Section
          title="Toegankelijkheid & comfort"
          items={[
            "Is er een lift of is alles gelijkvloers?",
            "Hoe zijn drempels, deuren en doorgangen?",
            "Is de badkamer veilig (ruimte, douche, beugels mogelijk)?",
            "Is er voldoende licht en overzicht in huis?",
            "Is de indeling logisch (slaapkamer/badkamer bereikbaar)?"
          ]}
        />
        <Section
          title="Voorzieningen & bereik"
          items={[
            "Winkels, huisarts, apotheek: dichtbij of goed te organiseren?",
            "Openbaar vervoer / parkeren / brengen & halen",
            "Looproutes: veilig en prettig (stoep, oversteek, bankjes)?",
            "Geluid en prikkels: voelt het rustig of onrustig?",
            "Is er groen of een plek om even buiten te zitten?"
          ]}
        />
        <Section
          title="Welzijn & community"
          items={[
            "Is er ontmoeting mogelijk (ruimte, activiteiten, buurt)?",
            "Voelt de omgeving veilig en vertrouwd?",
            "Zijn er buren/organisatie die ‘omkijken’ stimuleert?",
            "Is er een gezamenlijke ruimte of informele contactmomenten?",
            "Past dit bij het karakter van de bewoner (rust / levendigheid)?"
          ]}
        />
        <Section
          title="Later organiseren (optioneel)"
          items={[
            "Is hulp te organiseren (schoonmaak, maaltijden, klusjes)?",
            "Is er ondersteuning mogelijk (daginvulling, begeleiding)?",
            "Als zorg later nodig is: zijn er opties in de buurt?",
            "Hoe makkelijk kan men hier blijven wonen als mobiliteit afneemt?",
            "Is er iemand die mee kan kijken/regelen (naaste, beheerder, community)?"
          ]}
        />
      </div>

      <div style={{ marginTop: 18, border: "1px solid #e6e6e6", borderRadius: 16, padding: 16, background: "#fafafa" }}>
        <div style={{ fontWeight: 700 }}>Tip (werkt altijd)</div>
        <p style={{ color: "#444", lineHeight: 1.6, marginTop: 8 }}>
          Spreek af: “We kijken eerst of het hier nú prettig woont. Daarna pas hoe we later dingen kunnen organiseren.”
          Dat haalt druk van het gesprek.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
          <a href="/vitacheck" style={{ padding: "10px 14px", borderRadius: 10, background: "#111", color: "#fff", textDecoration: "none" }}>
            Doe de VitaCheck
          </a>
          <a href="/woningen/kaart" style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", textDecoration: "none", color: "#111" }}>
            Bekijk aanbod op kaart
          </a>
        </div>
      </div>

      <p style={{ marginTop: 24 }}>
        <a href="/voor-naasten">← Terug naar Voor naasten</a>
      </p>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 16 }}>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <ul style={{ marginTop: 10, lineHeight: 1.8, color: "#333" }}>
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
