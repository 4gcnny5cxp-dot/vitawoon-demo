export default function VoorAanbieders() {
  return (
    <main>
      <div className="container">
        <h1>Voor aanbieders</h1>
        <p className="muted">
          Deze pagina is tijdelijk in demo-stand. We bouwen hem stapsgewijs uit.
        </p>

        <div className="btnRow">
          <a className="btn btnPrimary" href="/vitadomus">Over VitaDomus</a>
          <a className="btn btnGhost" href="/woningen">Bekijk VitaWoon</a>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <strong>Waarom VitaWoon?</strong>
          <ul style={{ lineHeight: 1.8, marginTop: 10 }}>
            <li>Vroege instroom: oriëntatie vóór zorgdruk</li>
            <li>Naasten zoeken mee</li>
            <li>Wonen & welzijn centraal, hulp/zorg optioneel</li>
          </ul>
        </div>

        <p style={{ marginTop: 24 }}>
          <a className="link" href="/">← Terug naar VitaWoon</a>
        </p>
      </div>
    </main>
  );
}
