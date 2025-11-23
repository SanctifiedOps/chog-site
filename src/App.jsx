import React, {useState} from "react";
import "./App.css";

const App = ()=> {
  const [openCard,setOpenCard] = useState("what");
  const [navOpen,setNavOpen] = useState(false);

  const handleCardClick = (id)=> {
    setOpenCard(prev => (prev === id ? null : id));
  };

  return (
    <div className="shell">
      <div className="center-box">
        
        {/* NAV */}
        <nav className="nav">
          <div className="nav-left">
            <img
              src="/Horizontal_Logo_white.png"
              alt="Chog logo"
              className="nav-logo"
            />
          </div>

          <div className="desktop-nav">
            <a href="#about">About</a>
            <a href="#lore">Lore</a>
            <a href="https://discord.gg/chog" target="_blank" rel="noreferrer">
              Discord
            </a>
            <a
              href="https://x.com/i/communities/1992325121328173450"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-pill"
            >
              Join X community
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="nav-toggle"
            onClick={()=> setNavOpen(prev=>!prev)}
          >
            <span />
            <span />
          </button>
        </nav>

        {/* MOBILE MENU */}
        {navOpen && (
          <div className="nav-mobile">
            <a href="#about" onClick={()=> setNavOpen(false)}>About</a>
            <a href="#lore" onClick={()=> setNavOpen(false)}>Lore</a>
            <a
              href="https://discord.gg/chog"
              target="_blank"
              rel="noreferrer"
              onClick={()=> setNavOpen(false)}
            >
              Discord
            </a>
            <a
              href="https://x.com/i/communities/1992325121328173450"
              target="_blank"
              rel="noopener noreferrer"
              onClick={()=> setNavOpen(false)}
            >
              X community
            </a>
          </div>
        )}

        {/* HERO */}
        <main className="hero">
          <div className="hero-inner">
            <p className="eyebrow">The mascot of Monad</p>

            <h1>In Chog We Trust</h1>

            <div className="hero-art">
              <div className="hero-orbit">
                <div className="hero-card">
                  <img src="/chog-logo.jpg" alt="Chog" />
                </div>
                <div className="hero-tag">
                  <span>Live on Solana</span>
                </div>
              </div>
            </div>

            <p className="hero-body">
              Chog is the cultural icon of Monad, powered by 56,000 NFT holders and a wider ecosystem of 1.3M followers. Our Solana expansion brings that momentum to the fastest chain while honouring the community that built him.
            </p>

            <div className="hero-actions">
              <a
                href="https://x.com/i/communities/1992325121328173450"
                className="btn primary-btn"
                target="_blank"
                rel="noreferrer"
              >
                X Community
              </a>

              <a
                href="https://www.monad.xyz/"
                className="btn primary-btn"
                target="_blank"
                rel="noreferrer"
              >
                Explore Monad
              </a>

              <a
                href="https://jup.ag/?sell=So11111111111111111111111111111111111111112&buy=FfjR46Hmq6Bz5Hni4gAFymWwFBNKD1meBdWgLvAjpump"
                className="btn primary-btn"
                target="_blank"
                rel="noreferrer"
              >
                Buy Now
              </a>
            </div>

            <p className="hero-caption">FfjR46Hmq6Bz5Hni4gAFymWwFBNKD1meBdWgLvAjpump</p>

            <div className="monad-logo-wrapper">
              <img
                src="/monadlogo.png"
                alt="Monad Logo"
                className="monad-logo"
              />
            </div>
          </div>
        </main>

        {/* CONTENT */}
        <section className="content" id="about">
          <div className="content-section">
            <div
              className={`content-card ${openCard === "what" ? "open" : ""}`}
              onClick={()=> handleCardClick("what")}
            >
              <h2>What is Chog?</h2>

              {openCard === "what" && (
                <div className="content-body">
                  <p>
                    Chog is the official mascot of Monad and one of the most recognisable characters in the L1 ecosystem today. Born from a simple, charm
