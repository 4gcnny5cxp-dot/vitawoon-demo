export default function VoorNaasten() {
  return (
    <main style={{ padding: "40px", maxWidth: "980px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0 }}>Voor naasten</h1>
          <p style={{ marginTop: 10, color: "#444", maxWidth: 820, lineHeight: 1.6 }}>
            Samen vooruitkijken zonder dat het meteen “over zorg” hoeft te gaan. 
            VitaWoon helpt om te starten bij prettig wonen, welzijn en rust — en pas later (optioneel) hulp, ondersteuning of zorg te organiseren.
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href="/vitacheck"
            style={{ padding: "10px 14px", borderRadius: 10, background: "#111", color: "#fff", textDecoration: "none" }}
          >
            Start met VitaCheck
          </a>
          <a
            href="/woningen/kaart"
            style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", textDecoration: "none", color: "#111" }}
          >
            Bekijk op kaart
          </a>
        </div>
      </div>

      <hr style={{ margin: "26px 0" }} />

      <h2 style={{ marginTop: 0 }}>Wat je vaak ziet (en waarom VitaWoon helpt)</h2>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr", marginTop: 12 }}>
        <div style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 16 }}>
          <div style={{ fontWeight: 700 }}>“Het gaat nog prima.”</div>
          <p style={{ color: "#444", lineHeight: 1.6 }}>
            Meestal klopt dat ook — maar het gesprek komt vaak pas op gang als er druk ontstaat (val, ziekenhuis, overbelasting).
            Door nú rustig te kijken naar wonen en welzijn, creëer je keuzevrijheid.
          </p>
        </div>
        <div style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 16 }}>
          <div style={{ fontWeight: 700 }}>“Zorg? Dat hoeft toch niet.”</div>
          <p style={{ color: "#444", lineHeight: 1.6 }}>
            Precies. Daarom begint VitaWoon bij wonen. 
            Hulp/ondersteuning/zorg is later optioneel — maar fijn als je weet wat er kan, mocht het nodig zijn.
          </p>
        </div>
      </div>

      <hr style={{ margin: "26px 0" }} />

      <h2>De rustige route in 3 stappen</h2>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr 1fr", marginTop: 12 }}>
        {[
          {
            n: "1",
            t: "Start bij prettig wonen",
            d: "Lift, gelijkvloers, winkels dichtbij, logische indeling. Focus op comfort en zelfstandigheid."
          },
          {
            n: "2",
            t: "Voeg welzijn toe",
            d: "Ontmoeting, activiteiten, omkijken: dit maakt langer prettig wonen vaak makkelijker."
          },
          {
            n: "3",
            t: "Zekerheid voor later (optioneel)",
            d: "Hulp en ondersteuning organiseerbaar. Zorg kan, maar hoeft niet als vertrekpunt."
          }
        ].map((x) => (
          <div key={x.n} style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 16 }}>
            <div style={{ fontSize: 12, color: "#666" }}>Stap {x.n}</div>
            <div style={{ fontWeight: 700, marginTop: 6 }}>{x.t}</div>
            <p style={{ color: "#444", lineHeight: 1.6, marginTop: 8 }}>{x.d}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
        <a href="/vitacheck" style={{ padding: "10px 14px", borderRadius: 10, background: "#111", color: "#fff", textDecoration: "none" }}>
          Doe samen de VitaCheck
        </a>
        <a href="/woningen" style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", textDecoration: "none", color: "#111" }}>
          Bekijk aanbod (lijst)
        </a>
        <a href="/woningen/kaart" style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", textDecoration: "none", color: "#111" }}>
          Bekijk aanbod (kaart)
        </a>
      </div>

      <hr style={{ margin: "26px 0" }} />

      <h2>Gespreksstarter (5 minuten)</h2>
      <p style={{ color: "#444", maxWidth: 820, lineHeight: 1.6 }}>
        Gebruik dit als start. Het is bewust “woon-taal” en geen zorg-taal.
      </p>

      <div style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 16, background: "#fafafa" }}>
        <div style={{ fontWeight: 700 }}>Vragen die werken</div>
        <ul style={{ lineHeight: 1.8, color: "#333", marginTop: 10 }}>
          <li>Waar woon je nu het prettigst aan — en wat zou je willen behouden?</li>
          <li>Wat zou het wonen makkelijker maken (lift, gelijkvloers, winkels dichtbij)?</li>
          <li>Welke dingen geven plezier of structuur (ontmoeting, activiteiten, buurt)?</li>
          <li>Als er later hulp nodig is: wat zou je dan fijn vinden om te kunnen regelen?</li>
          <li>Welke plek/omgeving voelt “thuis” (stad, dorp, dichtbij familie, groen)?</li>
        </ul>
        <div style={{ marginTop: 10, fontSize: 12, color: "#666" }}>
          Tip: doe de VitaCheck samen. Het maakt wensen concreet zonder druk.
        </div>
      </div>

      <hr style={{ margin: "26px 0" }} />

      <h2>Als er (nog) geen passend aanbod is</h2>
      <p style={{ color: "#444", maxWidth: 820, lineHeight: 1.6 }}>
        Dat is normaal. In de VitaCheck kun je je e-mailadres achterlaten om op de hoogte te blijven zodra er passend aanbod beschikbaar komt in de regio.
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href="/vitacheck" style={{ padding: "10px 14px", borderRadius: 10, background: "#111", color: "#fff", textDecoration: "none" }}>
          VitaCheck → toon aanbod / meld je aan
        </a>
        <a href="/woningen/kaart" style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", textDecoration: "none", color: "#111" }}>
          Bekijk aanbod op kaart
        </a>
      </div>

      <p style={{ marginTop: 28 }}>
        <a href="/">← Terug naar VitaWoon</a>
      </p>
    </main>
  );
}
