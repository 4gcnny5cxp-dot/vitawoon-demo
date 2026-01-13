export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>VitaWoon</h1>
        <p>Welkom bij VitaWoon</p>
      </div>
    </main>
  );
}      
      <h2>
        Ontdek woningen waar u nu prettig woont —<br />
        met voorzieningen, hulp en zorg beschikbaar wanneer dat later nodig is.
      </h2>

      <p>
        Demo-omgeving om look & feel en functies te testen met collega’s.
        Wonen en welzijn centraal. Hulp en zorg zijn altijd optioneel.
      </p>

      <ul>
        <li><a href="/woningen">Woningen</a></li>
        <li><a href="/vitacheck">VitaCheck</a></li>
        <li><a href="/voor-naasten">Voor naasten</a></li>
        <li><a href="/voor-aanbieders">Voor aanbieders</a></li>
        <li><a href="/vitadomus">VitaDomus</a></li>
      </ul>

      <p style={{ marginTop: "40px", fontSize: "13px", color: "#666" }}>
        VitaWoon demo – testomgeving
      </p>
    </main>
  );
}
