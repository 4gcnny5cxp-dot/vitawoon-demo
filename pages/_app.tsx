import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="appShell">
      <header className="topbar">
        <a href="/" className="brand">
          <span className="brandMark">Vita</span>Woon
        </a>

        <nav className="nav">
          <a href="/woningen" className="navLink">Woningen</a>
          <a href="/vitacheck" className="navLink">VitaCheck</a>
          <a href="/voor-naasten" className="navLink">Voor naasten</a>
          <a href="/voor-aanbieders" className="navLink">Voor aanbieders</a>
          <a href="/vitadomus" className="navLink">VitaDomus</a>
        </nav>
      </header>

      <Component {...pageProps} />

      <footer className="footer">
        <div className="footerInner">
          <div className="muted">Demo-omgeving • VitaWoon / VitaDomus</div>
          <div className="muted">Wonen centraal • hulp, ondersteuning en zorg optioneel</div>
        </div>
      </footer>
    </div>
  );
}
