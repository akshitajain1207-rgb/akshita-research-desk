import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import "./styles.css";
import CoforgeCase from "./CoforgeCase";
import HDFCCase from "./HDFCCase";
import AxisCase from "./AxisCase";
import NetflixCase from "./NetflixCase";
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
];

function caseIdFromHash() {
  const match = window.location.hash.match(/^#case-(0[1-4])$/);
  return match?.[1] ?? null;
}

function caseFromHash() {
  const id = caseIdFromHash();
  return projects.find((project) => project[0] === id) ?? null;
}

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
  if (type === "research") return <CoforgePreview />;
  if (type === "merger") return <HDFCPreview />;
  if (type === "peers") return <AxisPreview />;
  if (type === "dcf") return <NetflixPreview />;
  return null;
}

function CoforgePreview() {
  return (
    <div className="project-art coforge-art">
      <header className="art-masthead">
        <span>GROWTH BRIDGE / Q1 FY27</span>
        <span>COFORGE LIMITED</span>
      </header>
      <div className="coforge-art-figures">
        <div><strong>49.2%</strong><span>REPORTED GROWTH</span></div>
        <i>VS</i>
        <div><strong>~1.1%</strong><span>ORGANIC CC GROWTH</span></div>
      </div>
      <div className="coforge-art-chart">
        <svg viewBox="0 0 520 132" role="img" aria-label="Schematic comparison of reported and organic growth">
          <line className="art-gridline" x1="0" y1="30" x2="520" y2="30" />
          <line className="art-gridline" x1="0" y1="67" x2="520" y2="67" />
          <line className="art-gridline" x1="0" y1="104" x2="520" y2="104" />
          <path className="coforge-reported-line" d="M8 105 C82 99 116 90 173 77 S261 58 310 42 S415 27 511 16" />
          <path className="coforge-organic-line" d="M8 111 C90 108 150 110 214 105 S330 103 390 100 S464 98 511 94" />
          <line className="coforge-encora-marker" x1="310" y1="13" x2="310" y2="119" />
        </svg>
        <span className="coforge-chart-label reported-label">REPORTED</span>
        <span className="coforge-chart-label organic-label">ORGANIC</span>
        <span className="coforge-chart-label encora-label">ENCORA</span>
      </div>
      <footer className="coforge-art-foot">
        <span>12-MONTH TARGET</span><strong>₹1,900</strong>
        <span>ACQUISITION-LED SCALE / ORGANIC CONVERSION</span>
      </footer>
    </div>
  );
}

function HDFCPreview() {
  return (
    <div className="project-art hdfc-art">
      <header className="art-masthead">
        <span>TRANSACTION ARCHITECTURE</span><span>01 JULY 2023</span>
      </header>
      <div className="hdfc-art-layout">
        <dl className="hdfc-art-facts">
          <div><dt>DEAL VALUE</dt><dd>~$40B</dd></div>
          <div><dt>CONSIDERATION</dt><dd>100%<small>SHARE SWAP</small></dd></div>
          <div><dt>COMPLETED</dt><dd>JUL 2023</dd></div>
        </dl>
        <div className="hdfc-art-flow" aria-label="HDFC Ltd merges into HDFC Bank through a share swap">
          <strong>HDFC LTD</strong><i className="hdfc-flow-stem" />
          <span className="hdfc-swap-label">42 : 25 SHARE SWAP</span>
          <i className="hdfc-flow-stem hdfc-flow-arrow" />
          <strong>HDFC BANK</strong><i className="hdfc-flow-stem hdfc-flow-arrow" />
          <b>COMBINED ENTITY</b>
        </div>
      </div>
      <footer className="art-footnote">REVERSE MERGER / ONE BALANCE SHEET</footer>
    </div>
  );
}

function AxisPreview() {
  const peers = [
    ["Axis Bank", "1.82x", "1.82x", "15.20x", true],
    ["HDFC Bank", "1.91x", "1.91x", "14.90x"],
    ["ICICI Bank", "2.64x", "2.72x", "18.40x"],
    ["Kotak Mahindra", "2.26x", "2.27x", "20.50x"],
    ["Federal Bank", "2.05x", "2.05x", "18.60x"],
    ["Peer median*", "2.16x", "2.16x", "18.50x", false, true],
  ];
  return (
    <div className="project-art axis-art">
      <header className="art-masthead">
        <span>PRIVATE BANKS / TRADING COMPS</span><span>VALUATION SHEET</span>
      </header>
      <div className="axis-art-title">
        <strong>AXIS BANK</strong><span>TARGET / 4-PEER UNIVERSE</span>
      </div>
      <table className="axis-art-table">
        <thead><tr><th>COMPANY</th><th>P/B</th><th>P/TBV</th><th>P/E</th></tr></thead>
        <tbody>
          {peers.map(([name, pb, ptbv, pe, isTarget, isMedian]) => (
            <tr className={`${isTarget ? "is-target" : ""} ${isMedian ? "is-median" : ""}`} key={name}>
              <th scope="row">{name}{isTarget && <small>TARGET</small>}</th>
              <td>{pb}</td><td>{ptbv}</td><td>{pe}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="art-footnote">* MEDIAN EXCLUDES AXIS BANK / FY26 BOOK BASIS</footer>
    </div>
  );
}

function NetflixPreview() {
  const flow = ["REVENUE", "EBIT", "NOPAT", "FREE CASH FLOW", "WACC", "TERMINAL VALUE", "INTRINSIC VALUE"];
  const years = ["2026E", "2027E", "2028E", "2029E", "2030E", "TV"];
  return (
    <div className="project-art netflix-art">
      <header className="art-masthead">
        <span>DISCOUNTED CASH FLOW</span><span>MODEL ARCHITECTURE</span>
      </header>
      <ol className="netflix-art-flow">
        {flow.map((step, index) => (
          <li className={index === flow.length - 1 ? "flow-final" : ""} key={step}>
            <span>0{index + 1}</span><strong>{step}</strong>
            {index < flow.length - 1 && <i aria-hidden="true">↓</i>}
          </li>
        ))}
      </ol>
      <div className="netflix-art-horizon">
        <span>FORECAST HORIZON</span>
        <div>{years.map((year) => <b key={year}>{year}</b>)}</div>
      </div>
    </div>
  );
}

function Case({ p, onOpen }) {
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

          <button onClick={() => onOpen(p)}>
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
  const [activeCase, setActiveCase] = useState(caseFromHash);
  const activeCaseRef = useRef(activeCase);
  const caseScrollRef = useRef(window.scrollY);

  useReveal();

  useEffect(() => {
    const handlePopState = (event) => {
      const stateCaseId = event.state?.researchDeskCaseEntry
        ? event.state.researchDeskCaseId
        : null;
      const caseId = stateCaseId || caseIdFromHash();
      const nextCase = projects.find((project) => project[0] === caseId) ?? null;
      const wasCaseOpen = activeCaseRef.current !== null;

      activeCaseRef.current = nextCase;
      setActiveCase(nextCase);

      if (wasCaseOpen && !nextCase) {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => window.scrollTo(0, caseScrollRef.current));
        });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openCase = (selected) => {
    if (!selected || !["01", "02", "03", "04"].includes(selected[0]) || activeCaseRef.current) return;

    caseScrollRef.current = window.scrollY;
    const caseUrl = `${window.location.pathname}${window.location.search}#case-${selected[0]}`;
    window.history.pushState(
      {
        ...(window.history.state || {}),
        researchDeskCaseEntry: true,
        researchDeskCaseId: selected[0],
        researchDeskScrollY: caseScrollRef.current,
      },
      "",
      caseUrl
    );

    activeCaseRef.current = selected;
    setActiveCase(selected);
  };

  const closeCase = () => {
    const state = window.history.state;
    if (
      state?.researchDeskCaseEntry &&
      state.researchDeskCaseId === activeCaseRef.current?.[0]
    ) {
      window.history.back();
      return;
    }

    const { researchDeskCaseEntry, researchDeskCaseId, researchDeskScrollY, ...deskState } = state || {};
    window.history.replaceState(
      deskState,
      "",
      `${window.location.pathname}${window.location.search}`
    );
    activeCaseRef.current = null;
    setActiveCase(null);
    window.requestAnimationFrame(() => window.scrollTo(0, caseScrollRef.current));
  };

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
            <span>01 — 04</span>
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
              Four case files across equity research, M&amp;A,
              comparable-company analysis and DCF valuation. Each
              project is built to answer a specific investment question.
            </p>
          </div>

          <div className="cases">
    {projects.map((project) => (
  <Case
    key={project[0]}
    p={project}
    onOpen={openCase}
  />
))}
          </div>
        </section>

        <section className="development" id="development">
          <div className="section" data-reveal>
            <span>IN DEVELOPMENT</span>
          </div>
          <div className="development-entry" data-reveal>
            <h2>QUANTITATIVE BACKTESTING</h2>
            <p>
              Building a systematic backtesting framework to study strategy
              performance, risk and return behaviour.
            </p>
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
              <h2>Research, modelling &amp; markets.</h2>
            </div>
            <div className="resume-actions" aria-describedby="resume-file-status">
              <button type="button" disabled>
                VIEW RESUME <span aria-hidden="true">↗</span>
              </button>
              <button type="button" disabled>
                DOWNLOAD RESUME <span aria-hidden="true">↓</span>
              </button>
            </div>
            <p className="resume-file-status" id="resume-file-status">
              Resume PDF not found. Place the PDF in <code>public/</code> to enable these actions.
            </p>
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
            <a href="mailto:akshitajain1207@gmail.com">
              <Mail size={16} />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/akshita1jain/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="linkedin-icon">in</span>
              LinkedIn
            </a>
          </div>
        </section>
            </main>

      {activeCase?.[0] === "01" && (
        <CoforgeCase
          onClose={closeCase}
        />
      )}
      {activeCase?.[0] === "02" && (
        <HDFCCase
          onClose={closeCase}
        />
      )}
      {activeCase?.[0] === "03" && (
        <AxisCase
          onClose={closeCase}
        />
      )}
      {activeCase?.[0] === "04" && (
        <NetflixCase
          onClose={closeCase}
        />
      )}

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
