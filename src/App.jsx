import React, {useState} from "react";
import "./App.css";

const App = ()=> {
  const [openCard,setOpenCard] = useState("what");
  const [navOpen,setNavOpen] = useState(false);
  const [copied,setCopied] = useState(false);

  const handleCardClick = (id)=> {
    setOpenCard(prev => (prev === id ? null : id));
  };

  const copyCA = ()=> {
    const ca = "FfjR46Hmq6Bz5Hni4gAFymWwFBNKD1meBdWgLvAjpump";
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(()=> setCopied(false), 1400);
  };

  return (
    <div className="shell">
      <div className="center-box">

        {/* NAVBAR */}
        <nav className="nav">
          <div className="nav-left">
            <img
              src="/Horizontal_Logo_white.png"
              alt="Chog logo"
              className="nav-logo"
            />
          </div>

          {/* DESKTOP NAV */}
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
            type="button"
            className="nav-toggle"
            onClick={()=> setNavOpen(prev => !prev)}
            aria-label="Toggle navigation"
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

            {/* IMAGE BOX */}
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
              Chog is the cultural icon of Monad, powered by 56,000 Discord members
              and a wider ecosystem of 1.3M followers. Our Solana expansion
              brings that momentum to the fastest chain while honouring the
              community that built him.
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

            {/* NEW COPY CONTRACT BUTTON */}
            <div className="ca-copy-wrapper">
              <button
                className={`ca-copy-btn ${copied ? "copied" : ""}`}
                onClick={copyCA}
              >
                {copied ? "Copied!" : "Copy CA"}
              </button>
            </div>

            <div className="monad-logo-wrapper">
              <img
                src="/monadlogo.png"
                alt="Monad Logo"
                className="monad-logo"
              />
            </div>
          </div> {/* end hero-inner */}

          {/* VIDEO SECTION */}
          <div className="chog-video-wrapper">
            <video
              className="chog-video"
              src="/chog-video.mp4"  // or src={chogVideo} if you used the import
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </main>

        {/* CONTENT SECTIONS */}
        <section className="content" id="about">
          {/* WHAT IS CHOG? */}
          <div className="content-section">
            <div
              className={`content-card ${openCard === "what" ? "open" : ""}`}
              onClick={()=> handleCardClick("what")}
            >
              <h2>What is Chog?</h2>

              {openCard === "what" && (
                <div className="content-body">
                  <p>
                    Chog is the official mascot of Monad and one of the most
                    recognisable characters in the L1 ecosystem today. Born from
                    a simple, charming character design, Chog quickly became
                    more than a profile picture. He became a cultural marker for
                    the Monad community: playful, iconic and instantly
                    memorable.
                  </p>
                  <p>
                    The Chog NFT community has grown into one of the largest
                    art-driven groups in crypto, with over{" "}
                    <strong>56,000 members in Discord</strong>. Artists,
                    collectors and builders all contribute to what Chog
                    represents. He is not just a mascot, he is the face of a
                    movement that values creativity, humour and community-driven
                    energy.
                  </p>
                  <p>
                    Our Solana project pays respect to this legacy. We honour
                    the art, the culture and the people who built the Chog
                    identity long before any token ever existed.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* CHOG LORE */}
          <div className="content-section" id="lore">
            <div
              className={`content-card ${openCard === "lore" ? "open" : ""}`}
              onClick={()=> handleCardClick("lore")}
            >
              <h2>Chog Lore</h2>

              {openCard === "lore" && (
                <div className="content-body">
                  <p>
                    Chog does not have a strict, written storyline. His lore
                    lives in the community. Every emoji, every meme and every
                    new piece of artwork adds another layer to who Chog is. That
                    is why he feels alive, he evolves as the community evolves.
                  </p>
                  <p>
                    The Chog NFT Discord is one of the strongest culture hubs in
                    the space. Thousands of holders and artists contribute
                    daily, creating new visuals, new jokes and new
                    interpretations that shape the personality of the mascot
                    representing the Monad ecosystem.
                  </p>
                  <p>
                    Our Solana memecoin is built as an extension of that lore.
                    It is a <strong>tribute project, not a replacement</strong>,
                    celebrating the art, the humour and the spirit that Chog
                    represents while introducing the character to the speed and
                    culture of Solana.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* CHOG IN THE MONAD ECOSYSTEM */}
          <div className="content-section" id="usage">
            <div
              className={`content-card ${
                openCard === "ecosystem" ? "open" : ""
              }`}
              onClick={()=> handleCardClick("ecosystem")}
            >
              <h2>Monad Ecosystem</h2>

              {openCard === "ecosystem" && (
                <div className="content-body">
                  <p>
                    Chog is more than a mascot. He has become the unofficial
                    greeter for anyone entering the Monad world. With Monad’s
                    upcoming mainnet expansion, a rapidly growing ecosystem and
                    over <strong>1.3 million followers on X</strong>, Chog sits
                    at the centre of a wave that is only getting bigger.
                  </p>
                  <p>
                    The Chog NFT community helped define the visual and cultural
                    identity of the chain. They shaped the meme culture, the
                    aesthetic style and the sense of belonging around Monad. As
                    $MON launches and Monad attracts global attention, the
                    cultural power of Chog grows alongside it.
                  </p>
                  <p>
                    Our Solana memecoin taps into that momentum. It connects
                    Solana’s fast-paced environment with the iconic mascot of
                    Monad, bridging communities, celebrating the artists and
                    giving the Chog identity a new home on the fastest chain in
                    crypto.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery">
          <h2>Chog Community Memes</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/chogpic (1).jpg" alt="Chog meme 1" />
            </div>
            <div className="gallery-item">
              <img src="/chogpic (1).png" alt="Chog meme 2" />
            </div>
            <div className="gallery-item">
              <img src="/chogpic (2).jpg" alt="Chog meme 3" />
            </div>
            <div className="gallery-item">
              <img src="/chogpic (2).png" alt="Chog meme 4" />
            </div>
            <div className="gallery-item">
              <img src="/chogpic (3).jpg" alt="Chog meme 5" />
            </div>
            <div className="gallery-item">
              <img src="/chogpic (3).png" alt="Chog meme 6" />
            </div>
            <div className="gallery-item">
              <img src="/chogpic (4).jpg" alt="Chog meme 7" />
            </div>
            <div className="gallery-item">
              <img src="/chogpic (5).jpg" alt="Chog meme 8" />
            </div>
            <div className="gallery-item">
              <img src="/chogpic (6).jpg" alt="Chog meme 9" />
            </div>
            <div className="gallery-item">
              <img src="/chogpic (7).jpg" alt="Chog meme 10" />
            </div>
            <div className="gallery-item">
              <img src="/chogpic (8).jpg" alt="Chog meme 11" />
            </div>
            <div className="gallery-item">
              <img src="/chogpic (9).jpg" alt="Chog meme 12" />
            </div>
          </div>
        </section>

        {/* LINKS */}
        <section id="links" className="section links-section">
          <h2>Links</h2>
          <div className="link-grid">
            <a
              href="https://x.com/i/communities/1992325121328173450"
              target="_blank"
              rel="noreferrer"
              className="link-card"
            >
              <span>🟣 Chog Community on X</span>
              <span className="link-sub">
                Updates, discussions and community-driven visuals.
              </span>
            </a>

            <a
              href="https://dexscreener.com/solana/86dusa7bohe8ya6bcoydmdzrb7texxmysbrtp6epw5bz"
              target="_blank"
              rel="noreferrer"
              className="link-card"
            >
              <span>🐦 Chog Dexscreener</span>
              <span className="link-sub">
                Official announcements, assets and project details.
              </span>
            </a>

            <a
              href="https://www.monad.xyz/"
              target="_blank"
              rel="noreferrer"
              className="link-card"
            >
              <span>💠 Monad</span>
              <span className="link-sub">
                Technical documentation, ecosystem resources and performance
                benchmarks.
              </span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>
            Chog is a community-driven mascot inspired by the Monad world. Stay
            curious, stay informed, and always do your own research.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default App;
