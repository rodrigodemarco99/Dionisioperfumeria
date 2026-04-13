import { useEffect } from "react";

import heroImg from "@assets/Gemini_Generated_Image_66h5hk66h5hk66h5_(1)_1776041591795.png";

import img01 from "@assets/Captura_de_pantalla_2026-03-10_160500_1776041552664.jpg";
import img02 from "@assets/Captura_de_pantalla_2026-03-10_160513_1776041552664.jpg";
import img03 from "@assets/Captura_de_pantalla_2026-03-10_160524_1776041552665.jpg";
import img04 from "@assets/Captura_de_pantalla_2026-03-10_160536_1776041552666.jpg";
import img05 from "@assets/Captura_de_pantalla_2026-03-10_160548_1776041552666.jpg";
import img06 from "@assets/Captura_de_pantalla_2026-03-10_160637_1776041552670.jpg";

import img07 from "@assets/Captura_de_pantalla_2026-03-10_160421_1776041552662.jpg";
import img08 from "@assets/Captura_de_pantalla_2026-03-10_160434_1776041552662.jpg";
import img09 from "@assets/Captura_de_pantalla_2026-03-10_160446_1776041552663.jpg";

import img10 from "@assets/Captura_de_pantalla_2026-03-10_160345_1776041552661.jpg";
import img11 from "@assets/Captura_de_pantalla_2026-03-10_160601_1776041552667.jpg";
import img12 from "@assets/Captura_de_pantalla_2026-03-10_160615_1776041552667.jpg";
import img13 from "@assets/Captura_de_pantalla_2026-03-10_160626_1776041552668.jpg";

const WA_LINK = "https://wa.me/5491132393925?text=Hola!%20Me%20interesa%20este%20perfume.";

const arabes = [
  { img: img01, name: "Badee Al Oud Honor & Glory", marca: "Lattafa" },
  { img: img02, name: "Badee Al Oud Oud for Glory", marca: "Lattafa" },
  { img: img03, name: "Badee Al Oud Sublime", marca: "Lattafa" },
  { img: img04, name: "Badee Al Oud Rose", marca: "Lattafa" },
  { img: img05, name: "Badee Al Oud Amethyst", marca: "Lattafa" },
  { img: img06, name: "9pm Night Out", marca: "Afnan" },
];

const aaa = [
  { img: img07, name: "Club de Nuit Intense Man", marca: "Armaf" },
  { img: img08, name: "Club de Nuit Woman", marca: "Armaf" },
  { img: img09, name: "Club de Nuit Untold", marca: "Armaf" },
];

const bodySplash = [
  { img: img10, name: "Odyssey Mandarin Sky", marca: "Armaf" },
  { img: img11, name: "Odyssey Candee", marca: "Armaf" },
  { img: img12, name: "Odyssey Tyrant", marca: "Armaf" },
  { img: img13, name: "Odyssey Limoni", marca: "Armaf" },
];

function PerfumeCard({ img, name, marca }: { img: string; name: string; marca: string }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="perfume-card-link">
        <div className="perfume-card">
          <div className="perfume-img-wrap">
            <img src={img} alt={name} className="perfume-img" loading="lazy" />
          </div>
          <div className="perfume-info">
            <p className="perfume-marca">{marca}</p>
            <p className="perfume-name">{name}</p>
            <span className="consultar-btn">
              <i className="bi bi-whatsapp me-1"></i>Consultar
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    if (!document.getElementById('bootstrap-js')) {
      const script = document.createElement('script');
      script.id = 'bootstrap-js';
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const links = document.querySelectorAll('a.nav-scroll-link');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = (link as HTMLAnchorElement).getAttribute('href');
        if (target) {
          const el = document.querySelector(target);
          if (el) {
            const navHeight = document.querySelector('.dionisio-navbar')?.clientHeight ?? 70;
            const top = (el as HTMLElement).offsetTop - navHeight;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
        const navbarCollapse = document.getElementById('mainNavbar');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      });
    });

    const navbar = document.querySelector('.dionisio-navbar') as HTMLElement;
    const handleScroll = () => {
      if (window.scrollY > 60) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        body {
          font-family: 'Raleway', sans-serif;
          background-color: #0a0806;
          color: #f0ebe3;
          padding-bottom: 70px;
        }

        /* NAVBAR */
        .dionisio-navbar {
          background: rgba(10, 8, 6, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          transition: background 0.3s;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }
        .dionisio-navbar.scrolled {
          background: rgba(10, 8, 6, 0.97);
          box-shadow: 0 2px 20px rgba(0,0,0,0.6);
        }
        .navbar-brand-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #c9a84c !important;
          letter-spacing: 0.05em;
        }
        .nav-link-custom {
          font-family: 'Raleway', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: #d4cfc8 !important;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.5rem 1rem !important;
          transition: color 0.2s;
          text-decoration: none;
        }
        .nav-link-custom:hover {
          color: #c9a84c !important;
        }
        .navbar-toggler {
          border: 1px solid rgba(201,168,76,0.4) !important;
        }
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28201,168,76,0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }

        /* HERO */
        .hero-section {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          background-color: #0a0806;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('${heroImg}');
          background-size: cover;
          background-position: center top;
          filter: brightness(0.45);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom,
            rgba(10,8,6,0.3) 0%,
            rgba(10,8,6,0.1) 40%,
            rgba(10,8,6,0.7) 80%,
            rgba(10,8,6,1) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 2rem 1.5rem;
        }
        .hero-welcome {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(0.9rem, 2.8vw, 1.15rem);
          font-weight: 300;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e8e0d0;
          margin-bottom: 0.4rem;
        }
        .hero-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a84c;
          border: 1px solid rgba(201,168,76,0.5);
          padding: 0.35rem 1rem;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 10vw, 6.5rem);
          font-weight: 300;
          line-height: 1.05;
          color: #f5f0e8;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }
        .hero-title span {
          color: #c9a84c;
          font-style: italic;
        }
        .hero-subtitle {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(0.8rem, 2.5vw, 1rem);
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b0a89a;
          margin-bottom: 2.5rem;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #c9a84c;
          color: #0a0806;
          font-family: 'Raleway', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 0.85rem 2.2rem;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s;
          border: none;
        }
        .hero-cta:hover {
          background: #e0bb60;
          color: #0a0806;
          transform: translateY(-2px);
        }
        .hero-scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          color: rgba(201,168,76,0.6);
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* SECTION HEADERS */
        .section-divider {
          width: 50px;
          height: 1px;
          background: #c9a84c;
          margin: 0 auto 1.2rem;
        }
        .section-tag {
          font-size: 0.68rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 0.6rem;
          font-weight: 500;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 6vw, 3.2rem);
          font-weight: 400;
          color: #f5f0e8;
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }
        .section-desc {
          font-size: 0.88rem;
          color: #8a8278;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .perfume-section {
          padding: 5rem 0 4rem;
        }
        .perfume-section:nth-child(even) {
          background: rgba(255,255,255,0.015);
        }

        /* PERFUME CARDS */
        .perfume-card-link {
          text-decoration: none;
          display: block;
        }
        .perfume-card {
          background: #12100d;
          border: 1px solid rgba(201,168,76,0.1);
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .perfume-card:hover {
          border-color: rgba(201,168,76,0.5);
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.15);
        }
        .perfume-img-wrap {
          overflow: hidden;
          background: #1a1714;
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .perfume-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }
        .perfume-card:hover .perfume-img {
          transform: scale(1.08);
        }
        .perfume-info {
          padding: 1rem;
          text-align: center;
        }
        .perfume-marca {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 0.2rem;
          font-weight: 600;
        }
        .perfume-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          color: #e8e2d8;
          margin-bottom: 0.7rem;
          line-height: 1.3;
        }
        .consultar-btn {
          display: inline-flex;
          align-items: center;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #25D366;
          border: 1px solid rgba(37,211,102,0.35);
          padding: 0.3rem 0.8rem;
          transition: background 0.2s, color 0.2s;
        }
        .perfume-card:hover .consultar-btn {
          background: #25D366;
          color: #0a0806;
        }

        /* WHATSAPP FLOATING BAR */
        .wa-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #25D366;
          color: #fff;
          text-align: center;
          padding: 0.85rem 1rem;
          z-index: 2000;
          font-family: 'Raleway', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          box-shadow: 0 -3px 20px rgba(37,211,102,0.3);
          transition: background 0.2s;
        }
        .wa-bar:hover {
          background: #1ebe5a;
          color: #fff;
          text-decoration: none;
        }
        .wa-bar i {
          font-size: 1.2rem;
        }

        /* FOOTER */
        .dionisio-footer {
          background: #07060400;
          border-top: 1px solid rgba(201,168,76,0.1);
          padding: 2.5rem 1rem;
          text-align: center;
        }
        .footer-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          color: #c9a84c;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .footer-tagline {
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #5a5450;
        }

        @media (max-width: 575px) {
          .perfume-info { padding: 0.75rem; }
          .perfume-name { font-size: 0.85rem; }
          .perfume-marca { font-size: 0.6rem; }
          .consultar-btn { font-size: 0.62rem; padding: 0.25rem 0.6rem; }
          .wa-bar { font-size: 0.75rem; padding: 0.75rem 0.5rem; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-md dionisio-navbar">
        <div className="container">
          <a className="navbar-brand navbar-brand-text" href="#">
            Dionisio Perfumería
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto gap-md-1">
              <li className="nav-item">
                <a className="nav-link-custom nav-scroll-link" href="#arabes">Perfumes Árabes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link-custom nav-scroll-link" href="#aaa">Perfumes AAA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link-custom nav-scroll-link" href="#body-splash">Body Splash</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">Fragancias Exclusivas</div>
          <p className="hero-welcome">Bienvenido a</p>
          <h1 className="hero-title">
            Dionisio<br /><span>Perfumería</span>
          </h1>
          <p className="hero-subtitle">El arte del buen olfato</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hero-cta">
            <i className="bi bi-whatsapp"></i>
            Consultar por WhatsApp
          </a>
        </div>
        <div className="hero-scroll-hint">
          <i className="bi bi-chevron-down"></i>
          Descubrí
        </div>
      </header>

      {/* PERFUMES ÁRABES */}
      <section id="arabes" className="perfume-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-divider"></div>
            <p className="section-tag">Oriente en tu piel</p>
            <h2 className="section-title">Perfumes Árabes</h2>
            <p className="section-desc">
              Fragancias orientales de casas árabes reconocidas mundialmente. Oud, especias y maderas nobles.
            </p>
          </div>
          <div className="row g-3">
            {arabes.map((p, i) => (
              <PerfumeCard key={i} img={p.img} name={p.name} marca={p.marca} />
            ))}
          </div>
        </div>
      </section>

      {/* PERFUMES AAA */}
      <section id="aaa" className="perfume-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-divider"></div>
            <p className="section-tag">Calidad Premium</p>
            <h2 className="section-title">Perfumes AAA</h2>
            <p className="section-desc">
              Perfumes de alta gama, inspirados en las mejores fragancias del mundo a precios accesibles.
            </p>
          </div>
          <div className="row g-3 justify-content-center">
            {aaa.map((p, i) => (
              <PerfumeCard key={i} img={p.img} name={p.name} marca={p.marca} />
            ))}
          </div>
        </div>
      </section>

      {/* BODY SPLASH */}
      <section id="body-splash" className="perfume-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-divider"></div>
            <p className="section-tag">Frescura todo el día</p>
            <h2 className="section-title">Body Splash</h2>
            <p className="section-desc">
              Splashes corporales vibrantes y frescos, ideales para el día a día. Ligeros, duraderos y únicos.
            </p>
          </div>
          <div className="row g-3">
            {bodySplash.map((p, i) => (
              <PerfumeCard key={i} img={p.img} name={p.name} marca={p.marca} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="dionisio-footer">
        <p className="footer-brand">Dionisio Perfumería</p>
        <p className="footer-tagline">Buenos Aires, Argentina</p>
      </footer>

      {/* WHATSAPP FLOATING BAR */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="wa-bar">
        <i className="bi bi-whatsapp"></i>
        ¡Cualquier perfume que no veas, consultá acá!
      </a>
    </>
  );
}
