export default function VoorAanbieders() {
  return (
    <main style={{ padding: "40px", maxWidth: "980px", margin: "0 auto" }}>
      <h1>Voor aanbieders</h1>

      <p style={{ marginTop: 12, color: "#444", lineHeight: 1.6, maxWidth: 820 }}>
        VitaWoon is de plek waar ouderen en hun naasten zich vroeg oriënteren op een volgende woonstap.
        Wonen en welzijn staan centraal; hulp en zorg zijn optioneel en later te organiseren.
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
        <a
          href="/woningen"
          style={{ padding: "10px 14px", borderRadius: 10, background: "#111", color: "#fff", textDecoration: "none" }}
        >
          Bekijk VitaWoon
        </a>
        <a
          href="/vitadomus"
          style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", color: "#111", textDecoration: "none" }}
        >
          Over VitaDomus
        </a>
      </div>

      <hr style={{ margin: "28px 0" }} />

      <h2>Waarom VitaWoon?</h2>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr", marginTop: 12 }}>
        <Card title="Vroege instroom" text="Bezoekers oriënteren zich vóórdat er druk ontstaat. Dat vergroot keuzevrijheid en kwaliteit van matching." />
        <Card title="Naasten zoeken mee" text="De beslissing wordt vaak samen genomen. VitaWoon spreekt bewoners én naasten aan." />
        <Card title="Wonen centraal" text="Geen zorgportaal. Eerst prettig wonen, daarna eventueel hulp/ondersteuning/zorg." />
        <Card title="Nieuwbouw en concepten" text="Zet projecten vroeg op de kaart bij een relevante doelgroep." />
      </div>

      <hr style={{ margin: "28px 0" }} />

      <h2>Wat u via VitaWoon kunt</h2>
      <ul style={{ lineHeight: 1.8, marginTop: 10 }}>
        <li>Aanbod plaatsen (huur/koop/nieuwbouw/concepten)</li>
        <li>Bereik bij senioren en naasten in oriëntatiefase</li>
        <li>Inzicht in vraag via VitaCheck (demo)</li>
        <li>Optioneel: koppeling met verhuurservice/beheer/community</li>
      </ul>

      <hr style={{ margin: "28px 0" }} />

      <h2>Interesse om mee te doen?</h2>
      <p style={{ color: "#444", lineHeight: 1.6, maxWidth: 820 }}>
        In deze demo tonen we de look & feel en de gebruikersflow. In productie kunnen we aanbod koppelen
        (handmatig of via feeds) en meldingen/inschrijvingen faciliteren.
      </p>

      <p style={{ marginTop: 26 }}>
        <a href="/" style={{ textDecoration: "underline", color: "#111" }}>← Terug naar VitaWoon</a>
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
