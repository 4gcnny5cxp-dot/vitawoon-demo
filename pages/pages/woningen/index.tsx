export default function Woningen() {
  const woningen = [
    { id: "1", title: "Licht appartement met lift", place: "Amsterdam" },
    { id: "2", title: "Gelijkvloers wonen nabij winkels", place: "Utrecht" },
    { id: "3", title: "Serviceflat met ontmoetingsruimte", place: "Haarlem" }
  ];

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Woningen (demo)</h1>
      <p style={{ color: "#444" }}>
        Ontdek woningen waar u nu prettig woont — met voorzieningen, hulp en zorg beschikbaar wanneer dat later nodig is.
      </p>

      <ul style={{ lineHeight: 1.8 }}>
        {woningen.map((w) => (
          <li key={w.id}>
            <a href={`/woningen/${w.id}`}>{w.title}</a> — {w.place}
          </li>
        ))}
      </ul>

      <p style={{ marginTop: "24px" }}><a href="/">← Terug naar VitaWoon</a></p>
    </main>
  );
}
