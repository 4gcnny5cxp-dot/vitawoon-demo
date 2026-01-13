import { useEffect, useMemo, useState } from "react";

type Listing = {
  id: string;
  title: string;
  place: string;
  label: string;
  price: string;
  tags: string[];
};

const LISTINGS: Listing[] = [
  { id: "vw-1", title: "Licht appartement met lift", place: "Amsterdam", label: "Huur", price: "€ 1.450 p/m", tags: ["lift", "community", "welzijn", "help"] },
  { id: "vw-2", title: "Gelijkvloers wonen nabij winkels", place: "Utrecht", label: "Koop", price: "€ 425.000 k.k.", tags: ["gelijkvloers", "welzijn", "help"] },
  { id: "vw-3", title: "Serviceflat met ontmoetingsruimte", place: "Haarlem", label: "Nieuwbouw (huur)", price: "n.v.t. (demo)", tags: ["community", "welzijn", "support"] },
  { id: "am-stadsveteraan", title: "De Stadsveteraan 020 (concept)", place: "Amsterdam", label: "Concept", price: "n.v.t. (voorbeeld)", tags: ["community", "welzijn"] },
  { id: "bi-grote-lijster", title: "Grote Lijster – woonzorg (voorbeeld)", place: "Uithoorn", label: "Nieuwbouw", price: "n.v.t. (voorbeeld)", tags: ["support", "care"] }
];

function as01(v: boolean) {
  return v ? "1" : "0";
}
function from01(v: string | string[] | undefined, fallback: boolean) {
  if (typeof v !== "string") return fallback;
  return v === "1";
}

export default function VitaCheck() {
  const [who, setWho] = useState("bewoner");
  const [area, setArea] = useState("");
  const [type, setType] = useState("all"); // huur/koop/nieuwbouw/concept/all
  const [community, setCommunity] = useState(true);
  const [laterHelp, setLaterHelp] = useState(true);
  const [laterSupport, setLaterSupport] = useState(false);
  const [laterCare, setLaterCare] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyDone, setNotifyDone] = useState(false);

  // Pre-fill vanuit querystring (deel-link)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const qs = url.searchParams;

    const qWho = qs.get("who");
    const qArea = qs.get("area");
    const qType = qs.get("type");

    if (qWho) setWho(qWho);
    if (qArea) setArea(qArea);
    if (qType) setType(qType);

    setCommunity(from01(qs.get("community") || undefined, true));
    setLaterHelp(from01(qs.get("help") || undefined, true));
    setLaterSupport(from01(qs.get("support") || undefined, false));
    setLaterCare(from01(qs.get("care") || undefined, false));

    // Als het een deel-link is, kun je automatisch resultaten tonen:
    if (qs.get("auto") === "1") setSubmitted(true);
  }, []);

  const matches = useMemo(() => {
    if (!submitted) return [];
    const a = area.trim().toLowerCase();

    return LISTINGS.filter((x) => {
      if (a && !x.place.toLowerCase().includes(a)) return false;

      if (type !== "all") {
        const lbl = x.label.toLowerCase();
        if (type === "huur" && !lbl.includes("huur")) return false;
        if (type === "koop" && !lbl.includes("koop")) return false;
        if (type === "nieuwbouw" && !lbl.includes("nieuwbouw")) return false;
        if (type === "concept" && !lbl.includes("concept")) return false;
      }

      if (community && !x.tags.includes("community")) return false;

      const laterWants: string[] = [];
      if (laterHelp) laterWants.push("help");
      if (laterSupport) laterWants.push("support");
      if (laterCare) laterWants.push("care");

      if (laterWants.length > 0) {
        const ok = laterWants.some((t) => x.tags.includes(t));
        if (!ok) return false;
      }

      return true;
    });
  }, [submitted, area, type, community, laterHelp, laterSupport, laterCare]);

  function shareUrl() {
    if (typeof window === "undefined") return "";
    const url = new URL(window.location.href);
    url.pathname = "/vitacheck";
    url.searchParams.set("who", who);
    if (area.trim()) url.searchParams.set("area", area.trim());
    url.searchParams.set("type", type);
    url.searchParams.set("community", as01(community));
    url.searchParams.set("help", as01(laterHelp));
    url.searchParams.set("support", as01(laterSupport));
    url.searchParams.set("care", as01(laterCare));
    url.searchParams.set("auto", "1"); // direct resultaten tonen
    return url.toString();
  }

  async function copyShareLink() {
    const link = shareUrl();
    try {
      await navigator.clipboard.writeText(link);
      alert("Deel-link gekopieerd (demo).");
    } catch {
      prompt("Kopieer deze link:", link);
    }
  }

  async function submitNotify() {
    setNotifyDone(false);
    const res = await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: notifyEmail,
        area,
        type,
        community,
        later: { help: laterHelp, support: laterSupport, care: laterCare },
        who
      })
    });
    if (res.ok) setNotifyDone(true);
  }

  const summaryLines = [
    `Voor wie: ${who === "bewoner" ? "voor mezelf" : who === "naaste" ? "ik ben naaste/mantelzorger" : "samen"}`,
    `Regio: ${area.trim() ? area.trim() : "niet ingevuld"}`,
    `Type: ${type === "all" ? "alles" : type}`,
    `Welzijn/community: ${community ? "belangrijk" : "niet als eis"}`,
    `Later: ${[
      laterHelp ? "hulp" : null,
      laterSupport ? "ondersteuning" : null,
      laterCare ? "zorg" : null
    ].filter(Boolean).join(", ") || "geen voorkeur"}`
  ];

  return (
    <main style={{ padding: "40px", maxWidth: "980px", margin: "0 auto" }}>
      <h1>VitaCheck</h1>
      <p style={{ color: "#444", maxWidth: 820, lineHeight: 1.6 }}>
        Rustig vooruitkijken. Wonen en welzijn centraal. Hulp, ondersteuning en zorg zijn optioneel en later te organiseren.
      </p>

      <div style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 16, marginTop: 18 }}>
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <div style={{ fontSize: 13, color: "#666" }}>Voor wie?</div>
            <select value={who} onChange={(e) => setWho(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }}>
              <option value="bewoner">Voor mezelf</option>
              <option value="naaste">Ik ben naaste/mantelzorger</option>
              <option value="samen">Samen</option>
            </select>
          </div>

          <div>
            <div style={{ fontSize: 13, color: "#666" }}>Plaats/regio</div>
            <input value={area} onChange={(e) => setArea(e.target.value)} placeholder="Bijv. Amsterdam, Utrecht…" style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }} />
          </div>

          <div>
            <div style={{ fontSize: 13, color: "#666" }}>Type</div>
            <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }}>
              <option value="all">Alles</option>
              <option value="huur">Huur</option>
              <option value="koop">Koop</option>
              <option value="nieuwbouw">Nieuwbouw</option>
              <option value="concept">Concept</option>
            </select>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <input type="checkbox" checked={community} onChange={(e) => setCommunity(e.target.checked)} />
            <div>
              <div style={{ fontWeight: 600 }}>Welzijn / community belangrijk</div>
              <div style={{ fontSize: 12, color: "#666" }}>Ontmoeting, omkijken, activiteiten</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 13, color: "#666" }}>Waar wil je later op kunnen terugvallen? (optioneel)</div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 8 }}>
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input type="checkbox" checked={laterHelp} onChange={(e) => setLaterHelp(e.target.checked)} /> Hulp
            </label>
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input type="checkbox" checked={laterSupport} onChange={(e) => setLaterSupport(e.target.checked)} /> Ondersteuning
            </label>
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input type="checkbox" checked={laterCare} onChange={(e) => setLaterCare(e.target.checked)} /> Zorg
            </label>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          <button
            onClick={() => { setSubmitted(true); setNotifyDone(false); }}
            style={{ padding: "10px 14px", borderRadius: 10, background: "#111", color: "#fff", border: 0, cursor: "pointer" }}
          >
            Toon actueel aanbod
          </button>

          <button
            onClick={copyShareLink}
            style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", background: "#fff", color: "#111", cursor: "pointer" }}
          >
            Kopieer deel-link (voor naaste)
          </button>

          <a
            href="/voor-naasten/checklist"
            style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", textDecoration: "none", color: "#111" }}
          >
            Bezichtigings-checklist
          </a>
        </div>

        <div style={{ marginTop: 10, fontSize: 12, color: "#666" }}>
          Demo: deel-link vult antwoorden automatisch in en toont direct resultaten.
        </div>
      </div>

      {submitted && (
        <div style={{ marginTop: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <h2 style={{ margin: 0 }}>Resultaat</h2>
            <a href="/woningen/kaart" style={{ textDecoration: "underline", color: "#111" }}>
              Bekijk op kaart →
            </a>
          </div>

          {/* Samenvatting */}
          <div style={{ marginTop: 12, border: "1px solid #e6e6e6", borderRadius: 16, padding: 16, background: "#fafafa" }}>
            <div style={{ fontWeight: 700 }}>Samenvatting (deelbaar)</div>
            <ul style={{ marginTop: 10, lineHeight: 1.8 }}>
              {summaryLines.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                onClick={copyShareLink}
                style={{ padding: "10px 14px", borderRadius: 10, background: "#111", color: "#fff", border: 0, cursor: "pointer" }}
              >
                Kopieer deel-link
              </button>
              <a
                href="/voor-naasten/checklist"
                style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #111", textDecoration: "none", color: "#111" }}
              >
                Bezichtigings-checklist
              </a>
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: "#666" }}>
              Tip: stuur de link naar je naaste. De antwoorden staan dan al klaar.
            </div>
          </div>

          {/* Matches */}
          {matches.length > 0 ? (
            <div style={{ display: "grid", gap: 14, marginTop: 14 }}>
              {matches.map((x) => (
                <a
                  key={x.id}
                  href={`/woningen/${encodeURIComponent(x.id)}`}
                  style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 16, textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ fontSize: 13, color: "#666" }}>{x.place} • {x.label}</div>
                  <div style={{ fontWeight: 600, marginTop: 4 }}>{x.title}</div>
                  <div style={{ marginTop: 6, color: "#444" }}>{x.price}</div>
                </a>
              ))}
            </div>
          ) : (
            <div style={{ border: "1px solid #e6e6e6", borderRadius: 16, padding: 16, marginTop: 14 }}>
              <div style={{ fontWeight: 600 }}>Geen passend aanbod gevonden (demo)</div>
              <p style={{ color: "#444" }}>
                Laat je e-mailadres achter, dan houden we je op de hoogte zodra er passend aanbod beschikbaar is.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <input
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="E-mailadres"
                  style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd", minWidth: 260 }}
                />
                <button
                  onClick={submitNotify}
                  disabled={!notifyEmail.includes("@")}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 10,
                    background: notifyEmail.includes("@") ? "#111" : "#999",
                    color: "#fff",
                    border: 0,
                    cursor: notifyEmail.includes("@") ? "pointer" : "not-allowed"
                  }}
                >
                  Houd mij op de hoogte
                </button>
              </div>

              {notifyDone && (
                <div style={{ marginTop: 10, fontSize: 13, color: "#0a7" }}>
                  Dank! (demo) We hebben je verzoek ontvangen.
                </div>
              )}

              <div style={{ marginTop: 10, fontSize: 12, color: "#666" }}>
                In productie: koppeling met e-mailtool (Mailchimp/Brevo) + notificaties op nieuw aanbod.
              </div>
            </div>
          )}
        </div>
      )}

      <p style={{ marginTop: 24 }}><a href="/">← Terug naar VitaWoon</a></p>
    </main>
  );
}
