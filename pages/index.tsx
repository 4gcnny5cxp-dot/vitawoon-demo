export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>VitaWoon</h1>

        <h2>
          Ontdek woningen waar u nu prettig woont.
          <br />
          Met voorzieningen, hulp en zorg beschikbaar wanneer dat later nodig is.
        </h2>

        <p className="muted">
          Demo-omgeving om look &amp; feel en functies te testen. Wonen en welzijn centraal.
          Hulp en zorg zijn altijd optioneel.
        </p>

        <div className="btnRow">
          <a className="btn btnPrimary" href="/woningen">Woningen</a>
          <a className="btn btnGhost" href="/vitacheck">VitaCheck</a>
          <a className="btn btnGhost" href="/voor-naasten">Voor naasten</a>
          <a className="btn btnGhost" href="/voor-aanbieders">Voor aanbieders</a>
          <a className="btn btnGhost" href="/vitadomus">VitaDomus</a>
        </div>
      </div>
    </main>
  );
}
