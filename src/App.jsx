import {useState} from "react";
import "./app.css";

const CONTRACT_ADDRESS = "FfjR46Hmq6Bz5Hni4gAFymWwFBNKD1meBdWgLvAjpump";

const galleryImages = [
  "/gallery/chog-1.png",
  "/gallery/chog-2.png",
  "/gallery/chog-3.png",
  "/gallery/chog-4.png",
  "/gallery/chog-5.png",
  "/gallery/chog-6.png",
];

const links = [
  {
    title: "Chog Community on X",
    url: "https://x.com",
    description: "Updates, discussions and community-driven visuals.",
  },
  {
    title: "Chog Dexscreener",
    url: "https://dexscreener.com",
    description: "Official announcements, assets and project details.",
  },
  {
    title: "Monad",
    url: "https://monad.xyz",
    description:
      "Technical documentation, ecosystem resources and performance benchmarks.",
  },
];

function ContentCard({title,children}) {
  const [open,setOpen] = useState(false);

  return (
    <section className="content-section" id={title.toLowerCase().replace(/\s+/g,"-")}>
      <article
        className={`content-card ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <h2>{title}</h2>
        <div className="content-body">
          {children}
        </div>
      </article>
    </section>
  );
}

function LinkCard({title,url,description}) {
  return (
    <a className="link-card" href={url} target="_blank" rel="noreferrer">
      <strong>{title}</strong>
      <span className="link-sub">{description}</span>
    </a>
  );
}

export default function App() {
  const [navOpen,setNavOpen] = useState(false);
  const [hasCopied,setHasCopied] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS).then(() => {
      setHasCopied(true);
      setTimeout(() => setHasCopied(false),1500);
    });
  };

  return (
    <div className="shell">
      <div className="center-box">
        {/* NAVBAR */}
        <header className="nav">
          <div className="nav-left">
            <img src="/chog-favicon.webp" alt="Chog" className="nav-logo" />
            <div className="nav-pill">CHOG</div>
          </div>

          <nav className="desktop-nav">
            <a href="#about">Lore</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#memes">Memes</a>
            <a href="#links">Links</a>
          </nav>

          <button
            className="nav-toggle"
            type="button"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span />
          </button>
        </header>

        {navOpen && (
          <nav className="nav-mobile">
            <a href="#about" onClick={() => setNavOpen(false)}>Lore</a>
            <a href="#ecosystem" onClick={() => setNavOpen(false)}>Ecosystem</a>
            <a href="#memes" onClick={() => setNavOpen(false)}>Memes</a>
            <a href="#links" onClick={() => setNavOpen(false)}>Links</a>
          </nav>
        )}

        {/* HERO */}
        <main>
          <section className="hero">
            <div className="hero-inner">
              <p className="eyebrow">The mascot of Monad</p>
              <h1>In Chog We Trust</h1>

              <div className="hero-art">
                <div className="hero-orbit">
                  <div className="hero-card">
                    <img src="/chog-hero.png" alt="Chog" />
                  </div>
                  <div className="hero-tag">Live on Solana</div>
                </div>
              </div>

              <p className="hero-body">
                Chog is the cultural icon of Monad, powered by 56,000 Discord
                members and a wider ecosystem of 1.3M followers. Our Solana
                expansion brings that momentum to the fastest chain while
                honouring the community that built him.
              </p>

              <div className="hero-actions">
                <a
                  href="https://x.com"
                  className="btn primary-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  X Community
                </a>
                <a
                  href="https://monad.xyz"
                  className="btn primary-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore Monad
                </a>
                <a
                  href="#buy"
                  className="btn primary-btn"
                >
                  Buy Now
                </a>
              </div>

              {/* COPY CONTRACT ADDRESS PILL */}
              <div className="ca-copy-wrapper">
                <button
                  type="button"
                  className={`ca-copy-btn ${hasCopied ? "copied" : ""}`}
                  onClick={handleCopyCA}
                >
                  {hasCopied
                    ? "Copied!"
                    : `Copy CA: ${CONTRACT_ADDRESS}`}
                </button>
              </div>
            </div>
          </section>

          {/* MONAD LOGO STRIP */}
          <div className="monad-logo-strip">
            <img
              src="/monad-logo.svg"
              alt="Monad"
              className="monad-logo"
            />
          </div>

          {/* CONTENT SECTIONS */}
          <section className="content" id="about">
            <ContentCard title="Chog Lore">
              <p>
                Chog began as a simple, charming character inside the Monad
                community. Over time the memes, the art and the in-jokes turned
                into something heavier, a genuine mascot that people rallied
                around.
              </p>
              <p>
                The Solana expansion honours that history instead of trying to
                overwrite it. Same soul, new chain.
              </p>
            </ContentCard>

            <ContentCard title="Chog in the Monad ecosystem" id="ecosystem">
              <p>
                Within Monad, Chog sits at the crossroads of culture and
                infrastructure. He is the friendly skin over serious tech:
                performance benchmarks, research threads and build logs all find
                their way into Chog-branded formats.
              </p>
              <p>
                The goal is simple: lower the barrier to caring about deep tech
                by wrapping it in a character people actually like.
              </p>
            </ContentCard>

            <ContentCard title="What is Chog?">
              <p>
                Chog is a community-driven mascot, not a promise of returns. Do
                your own research, stay curious and never risk what you cannot
                afford to lose.
              </p>
            </ContentCard>
          </section>

          {/* MEME GALLERY */}
          <section className="gallery" id="memes">
            <h2>Chog Community Memes</h2>
            <div className="gallery-grid">
              {galleryImages.map((src,index) => (
                <div className="gallery-item" key={index}>
                  <img src={src} alt={`Chog meme ${index + 1}`} />
                </div>
              ))}
            </div>
          </section>

          {/* LINKS */}
          <section className="links-section" id="links">
            <h2>Links</h2>
            <div className="link-grid">
              {links.map(link => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  url={link.url}
                  description={link.description}
                />
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="footer">
            Chog is a community-driven mascot inspired by the Monad world.
            Stay curious, stay informed, and always do your own research.
          </footer>
        </main>
      </div>
    </div>
  );
}
