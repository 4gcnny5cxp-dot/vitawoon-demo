export const metadata = {
  title: "VitaWoon",
  description:
    "Ontdek woningen waar u nu prettig woont — met voorzieningen, hulp en zorg beschikbaar wanneer dat later nodig is."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
