import React from "react";
import "./hdfc-case.css";
import CaseFileBackButton from "./CaseFileBackButton";

const sections = [
  {
    number: "01",
    title: "WHY A REVERSE MERGER?",
    body: "HDFC Ltd, the parent housing-finance company, amalgamated into its banking subsidiary. The case study frames this structure as the regulatory route for combining the two balance sheets under a single banking entity. The merger became effective on 1 July 2023 after regulatory and court approvals.",
  },
  {
    number: "02",
    title: "WHAT WAS THE SWAP RATIO WORTH?",
    body: "HDFC Ltd shareholders received 42 HDFC Bank shares for every 25 HDFC Ltd shares: an exchange ratio of 1.68. The source describes a valuation framework spanning market price, net asset value, comparable earnings, book value and discounted cash flow. It compares the agreed ratio with an approximately 1.61 market-price ratio, while noting that the available schedules are not sufficient for a definitive fairness conclusion.",
    data: [
      ["Exchange ratio", "42 : 25"],
      ["Implied HDFC Bank shares per HDFC Ltd share", "1.68"],
      ["Consideration", "100% share swap"],
    ],
  },
  {
    number: "03",
    title: "WHERE WERE THE SYNERGIES?",
    body: "The thesis centred on funding economics and distribution. The case study estimates that about 70% of HDFC Ltd customers did not hold an HDFC Bank account, leaving room for mortgage-linked deposits and broader product relationships. It also identifies movement from HDFC Ltd’s wholesale funding toward the bank’s deposit base as a potential margin lever; the source cautions against treating the full funding-cost difference as a realised synergy.",
    data: [
      ["HDFC Ltd customers without an HDFC Bank account", "~70%"],
      ["Home-loan turnaround time after integration", "~⅓ of prior time"],
      ["Savings-account attachment to incremental disbursals", "35% → 80%"],
    ],
  },
  {
    number: "04",
    title: "DID THEY MATERIALISE?",
    body: "FY25 showed progress in liability-side rebalancing: deposits grew faster than loans and the credit-deposit ratio moved down. Loan growth was deliberately moderated during that adjustment, while net interest margin remained under pressure from legacy funding and integration dynamics.",
    data: [
      ["Deposit growth", "+14.1% YoY"],
      ["Credit-deposit ratio", "~110% → 96%"],
      ["Incremental deposit market share", "14.6%"],
      ["Loan growth", "+5.4% YoY"],
      ["Net interest margin", "3.48% in FY25"],
    ],
  },
  {
    number: "05",
    title: "WAS IT A GOOD DEAL?",
    body: "The source assessment is mixed in the short term and structurally compelling over the longer term. Balance-sheet rebalancing and mortgage distribution provide early evidence of integration progress. Margin recovery and mortgage-led earnings growth remain works in progress, so the strategic rationale has not yet translated into a complete synergy verdict.",
  },
  {
    number: "06",
    title: "WHAT MATTERS NEXT?",
    body: "The case study identifies mortgage growth and net interest margin recovery as the central tests. Track deposit mobilisation, the credit-deposit ratio, funding mix, mortgage distribution and cross-sell conversion alongside asset quality and capital returns. These indicators show whether a larger combined balance sheet is producing durable operating returns.",
    data: [
      ["Funding", "Deposit growth · credit-deposit ratio · cost of funds"],
      ["Mortgage franchise", "Disbursals · growth · profitability"],
      ["Cross-sell", "Account attachment · products per customer"],
      ["Returns", "NIM · asset quality · capital efficiency"],
    ],
  },
];

function MergerDiagram() {
  return (
    <figure className="hdfc-merger-visual" aria-label="HDFC Ltd and HDFC Bank combine into one balance sheet">
      <div className="hdfc-merger-parties">
        <div className="hdfc-entity hdfc-entity-lender">
          <span>HDFC LTD</span>
          <i aria-hidden="true" />
        </div>
        <div className="hdfc-merger-link" aria-hidden="true">
          <i />
          <span>42 : 25</span>
          <i />
        </div>
        <div className="hdfc-entity hdfc-entity-bank">
          <span>HDFC BANK</span>
          <i aria-hidden="true" />
        </div>
      </div>
      <div className="hdfc-combined-rule" aria-hidden="true">
        <i />
      </div>
      <figcaption>ONE BALANCE SHEET / TWO FRANCHISES</figcaption>
    </figure>
  );
}

function EditorialData({ rows }) {
  return (
    <dl className="hdfc-editorial-data">
      {rows.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function HDFCCase({ onClose }) {
  return (
    <div className="hdfc-overlay">
      <header className="hdfc-topbar">
        <CaseFileBackButton onClick={onClose} />
        <span>CASE FILE 02 / M&amp;A RESEARCH DOSSIER</span>
        <button onClick={onClose} className="hdfc-close" aria-label="Close case file">
          ×
        </button>
      </header>

      <div className="hdfc-scroll">
        <main className="hdfc-document">
          <div className="hdfc-kicker">TRANSACTION ANALYSIS / INDIA / JULY 2023</div>

          <section className="hdfc-hero">
            <div className="hdfc-hero-copy">
              <p className="hdfc-label">HDFC LTD × HDFC BANK</p>
              <h1>THE MERGER THAT REBUILT SCALE.</h1>
              <p className="hdfc-deck">Did the HDFC merger deliver its synergy promise?</p>
            </div>
            <MergerDiagram />
          </section>

          <section className="hdfc-deal-facts" aria-label="Deal facts">
            <div>
              <strong>~$40B</strong>
              <span>DEAL VALUE</span>
            </div>
            <div>
              <strong>REVERSE MERGER</strong>
              <span>TRANSACTION TYPE</span>
            </div>
            <div>
              <strong>JUL 2023</strong>
              <span>COMPLETED</span>
            </div>
            <div>
              <strong>₹17.87L Cr</strong>
              <span>COMBINED ASSETS</span>
            </div>
          </section>

          <div className="hdfc-sections">
            {sections.map((section) => (
              <section className="hdfc-section" key={section.number}>
                <div className="hdfc-section-heading">
                  <span>{section.number}</span>
                  <h2>{section.title}</h2>
                </div>
                <div className="hdfc-section-copy">
                  <p>{section.body}</p>
                  {section.data && <EditorialData rows={section.data} />}
                </div>
              </section>
            ))}
          </div>

          <section className="hdfc-research-materials">
            <div>
              <span>RESEARCH MATERIALS</span>
              <h2>Original HDFC Ltd × HDFC Bank M&amp;A Analysis</h2>
            </div>
            <a href="/reports/HDFC_MA_Case_Study.pdf" target="_blank" rel="noreferrer">
              VIEW FULL REPORT ↗
            </a>
          </section>

          <p className="hdfc-source-note">
            Analysis and reported figures are drawn from the supplied HDFC Ltd–HDFC Bank M&amp;A case study. FY25 indicators are presented as reported in that source.
          </p>
        </main>
      </div>
    </div>
  );
}
