import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, FileText, Mail, Menu, X } from "lucide-react";
import "./styles.css";

const projects = [
  [
    "01",
    "COFORGE",
    "Equity Research",
    "Can the business sustain its growth trajectory?",
    "research",
    "FUNDAMENTAL RESEARCH",
    ["Equity Research", "Business Analysis", "Valuation"],
  ],
  [
    "02",
    "HDFC LTD × HDFC BANK",
    "M&A Analysis",
    "What changes when two financial ecosystems become one?",
    "merger",
    "TRANSACTION ANALYSIS",
    ["M&A", "Strategic Analysis", "Synergies"],
  ],
  [
    "03",
    "AXIS BANK",
    "Comparable Company Analysis",
    "How does the bank compare across its peer set?",
    "peers",
    "RELATIVE VALUATION",
    ["Banking", "Comps", "Relative Valuation"],
  ],
  [
    "04",
    "NETFLIX",
    "DCF Valuation",
    "What does a business look like when reduced to cash flows?",
    "dcf",
    "INTRINSIC VALUATION",
    ["DCF", "Financial Modelling", "Valuation"],
  ],
  [
    "05",
    "BACKTESTING MODEL",
    "Quantitative Finance",
    "What happens when an investment idea meets historical data?",
    "backtest",
    "SYSTEMATIC RESEARCH",
    ["Backtesting", "Strategy", "Quantitative Finance"],
  ],
  [
    "06",
    "PE INVESTMENT COMMITTEE",
    "Private Markets",
    "How should an investment case move from screening to IC?",
    "memo",
    "PRIVATE MARKETS",
    ["PE", "Underwriting", "Investment Committee"],
  ],
];

const notes = [
  [
    "30 SEP 2026",
    "The Yen Trade",
    "Rates, carry and the mechanics behind cross-border yen borrowing.",
  ],
  [
    "SEP 2026",
    "Indian Banking",
    "Following the metrics that matter across the banking sector.",
  ],
  [
    "SEP 2026",
    "Copper & The Next Cycle",
    "A research note on copper, demand and the broader cycle.",
  ],
  [
    "SEP 2026",
    "IRDAI Rule Changes",
    "Breaking down what changed and why markets reacted.",
  ],
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function Mini({ type }) {
  if (type === "research") {
    return (
      <div className="mini research">
        <small>RESEARCH SNAPSHOT</small>

        <div className="chart">
          <i />
          <i />
          <i />
        </div>

        <div className="mf">
          <span>BUSINESS</span>
          <span>NUMBERS</span>
          <span>THESIS</span>
        </div>
      </div>
    );
  }

  if (type === "merger") {
    return (
      <div className="mini merger">
        <div className="node">
          HDFC
          <br />
          <small>LTD</small>
        </div>

        <b>→</b>

        <div className="node">
          HDFC
          <br />
          <small>BANK</small>
        </div>

        <b>→</b>

        <div className="node round">
          ONE
          <br />
          <small>ECOSYSTEM</small>
        </div>
      </div>
    );
  }

  if (type === "peers") {
    return (
      <div className="mini peers">
        <small>PEER SET / RELATIVE VIEW</small>

        {["HDFC", "ICICI", "KOTAK", "AXIS"].map((name, index) => (
          <div className="peer" key={name}>
            <span>{name}</span>

            <i>
              <b style={{ width: `${58 + index * 9}%` }} />
            </i>
          </div>
        ))}
      </div>
    );
  }

  if (type === "dcf") {
    return (
      <div className="mini dcf">
        {[
          "REVENUE",
          "EBIT",
          "FCF",
          "TERMINAL VALUE",
          "ENTERPRISE VALUE",
        ].map((item, index) => (
          <div key={item}>
            <span>0{index + 1}</span>
            <b>{item}</b>
            <em>→</em>
          </div>
        ))}
      </div>
    );
  }

  if (type === "backtest") {
    return (
      <div className="mini back">
        <small>EQUITY CURVE / STRATEGY</small>

        <svg
          viewBox="0 0 500 170"
          preserveAspectRatio="none"
        >
          <path d="M0 145 C35 140 55 148 90 122 S140 125 175 104 S220 118 255 83 S310 102 340 66 S400 77 430 42 S470 50 500 17" />

          <path
            className="bench"
            d="M0 150 C70 145 120 138 180 131 S290 119 370 105 S440 95 500 85"
          />
        </svg>

        <div className="key">
          STRATEGY　 BENCHMARK
        </div>
      </div>
    );
  }

  return (
    <div className="mini memo">
      <span className="stamp">IN PROGRESS</span>

      <strong>
        INVESTMENT
        <br />
        COMMITTEE
      </strong>

      <div>
        <span>SCREENING</span>
        <span>UNDERWRITING</span>
        <span>DUE DILIGENCE</span>
        <span>IC DECISION</span>
      </div>
    </div>
  );
}

function Case({ p }) {
  return (
    <article className="case" data-reveal>
      <div className="case-top">
        <span>CASE FILE {p[0]}</span>
        <small>CASE FILE / {p[5]}</small>
      </div>

      <div className="case-body">
        <div>
          <label>{p[1]}</label>

          <h3>{p[2]}</h3>

          <p>{p[3]}</p>

          <div className="tags">
            {p[6].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View case file
            <ArrowUpRight size={15} />
          </button>
        </div>

        <Mini type={p[4]} />
      </div>
    </article>
  );
}

function App() {
  const [menu, setMenu] = useState(false);

  useReveal();

  const go = (id) => {
    setMenu(false);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <div className="top">
        <span>AKSHITA JAIN RESEARCH DESK</span>
        <span>VOL. 01 / 2026</span>
        <span className="wide">
          BUSINESSES · MARKETS · INVESTMENT CASES
        </span>
      </div>

      <nav>
        <button className="mark" onClick={() => go("home")}>
          AJ<span>.</span>
        </button>

        <div className={`links ${menu ? "open" : ""}`}>
          <button onClick={() => go("cases")}>Case Files</button>
          <button onClick={() => go("notes")}>Market Notes</button>
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>

        <button
          className="menub"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy" data-reveal>
            <div className="kicker">
              <i />
              INDEPENDENT RESEARCH DESK
            </div>

            <h1>
              Understanding
              <br />
              <em>businesses</em>
              <br />
              before the market does.
            </h1>

            <p>
              Researching companies, analysing transactions and
              building investment cases.
            </p>

            <div className="actions">
              <button onClick={() => go("cases")}>
                Explore the desk
                <ArrowUpRight size={16} />
              </button>

              <button onClick={() => go("about")}>
                About the analyst
              </button>
            </div>
          </div>

          <div className="portrait" data-reveal>
            <div className="photo">
              <img
                src="/akshita-portrait.png"
                alt="Akshita Jain"
              />

              <div>
                <span>AKSHITA JAIN</span>
                <span>RESEARCH / MARKETS</span>
              </div>
            </div>

            <aside>
              OBSERVING
              <br />
              THE NUMBERS
              <br />
              BEHIND THE STORY
            </aside>
          </div>

          <div className="hero-foot">
            <span>SCROLL TO EXPLORE</span>
            <i />
            <span>01 — 06</span>
          </div>
        </section>

        <section className="desk" id="cases">
          <div className="section" data-reveal>
            <span>01</span>
            THE RESEARCH DESK
          </div>

          <div className="intro" data-reveal>
            <h2>
              Selected
              <br />
              <em>investment work.</em>
            </h2>

            <p>
              Six case files across equity research, transactions,
              valuation, quantitative finance and private markets.
              Each project is built to answer a specific investment
              question.
            </p>
          </div>

          <div className="cases">
            {projects.map((project) => (
              <Case key={project[0]} p={project} />
            ))}
          </div>
        </section>

        <section className="notes" id="notes">
          <div className="section" data-reveal>
            <span>02</span>
            MARKET NOTES
          </div>

          <div className="intro" data-reveal>
            <h2>
              What I'm
              <br />
              <em>watching.</em>
            </h2>

            <p>
              Short-form research and market observations published
              alongside the deeper case work.
            </p>
          </div>

          <div className="note-list">
            {notes.map((note) => (
              <article
                className="note"
                data-reveal
                key={note[1]}
              >
                <small>{note[0]}</small>

                <h3>{note[1]}</h3>

                <p>{note[2]}</p>

                <b>↗</b>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="section" data-reveal>
            <span>03</span>
            ABOUT THE ANALYST
          </div>

          <div className="about-grid">
            <div data-reveal>
              <small>CURIOUS ABOUT</small>

              <h2>
                What makes
                <br />
                <em>businesses valuable.</em>
              </h2>
            </div>

            <div className="about-copy" data-reveal>
              <p className="lead">
                I research businesses, break down their numbers
                and build investment cases.
              </p>

              <p>
                My work sits at the intersection of equity research,
                valuation, M&A, financial modelling and markets —
                with an emphasis on understanding the business
                before reducing it to a number.
              </p>

              <div className="focus">
                {[
                  "Equity Research",
                  "Valuation",
                  "M&A",
                  "Financial Modelling",
                  "Markets",
                  "Quantitative Finance",
                ].map((item, index) => (
                  <span key={item}>
                    <b>0{index + 1}</b>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="resume" id="resume">
          <div className="paper" data-reveal>
            <div>
              <div className="section">
                <span>04</span>
                RESUME
              </div>

              <h2>
                A concise view
                <br />
                <em>of the work.</em>
              </h2>
            </div>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              <FileText size={17} />
              Add resume PDF
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section className="contact" id="contact">
          <small data-reveal>
            05 / OPEN TO CONVERSATIONS
          </small>

          <h2 data-reveal>
            Have a research
            <br />
            <em>question?</em>
          </h2>

          <p data-reveal>
            For internships, research conversations, project
            discussions and finance opportunities.
          </p>

          <div className="contact-links" data-reveal>
            <a href="mailto:akshita@example.com">
              <Mail size={16} />
              Email
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="linkedin-icon">in</span>
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 AKSHITA JAIN</span>
        <span>RESEARCH · MARKETS · VALUATION</span>

        <button onClick={() => go("home")}>
          BACK TO TOP ↑
        </button>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);