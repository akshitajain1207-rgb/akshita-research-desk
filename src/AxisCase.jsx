import React from "react";
import "./axis-case.css";
import CaseFileBackButton from "./CaseFileBackButton";

const peerValuation = [
  ["Axis Bank", "Target", "1.82x", "1.82x", "15.20x"],
  ["HDFC Bank", "Peer", "1.91x", "1.91x", "14.90x"],
  ["ICICI Bank", "Peer", "2.64x", "2.72x", "18.40x"],
  ["Kotak Mahindra Bank", "Peer", "2.26x", "2.27x", "20.50x"],
  ["Federal Bank", "Peer", "2.05x", "2.05x", "18.60x"],
];

const peerOperating = [
  ["Axis Bank", "14.16%", "1.51%", "3.46%", "19.00%", "1.28%", "38.00%", "14.64%"],
  ["HDFC Bank", "13.80%", "1.85%", "3.40%", "15.40%", "1.17%", "32.30%", "17.40%"],
  ["ICICI Bank", "17.14%", "2.49%", "4.36%", "19.60%", "1.38%", "39.50%", "16.19%"],
  ["Kotak Mahindra Bank", "11.98%", "2.14%", "4.53%", "15.00%", "1.18%", "40.30%", "22.40%"],
  ["Federal Bank", "12.01%", "1.22%", "3.33%", "15.00%", "1.52%", "32.23%", "15.89%"],
];

const impliedValues = [
  { method: "P/B", peerMedian: "2.16x", implied: "₹1,491.07", upside: "+18.62%" },
  { method: "P/TBV", peerMedian: "2.16x", implied: "₹1,493.17", upside: "+18.79%" },
  { method: "P/E", peerMedian: "18.50x", implied: "₹1,529.90", upside: "+21.71%" },
];

function PeerValuationTable() {
  return (
    <div className="axis-table-scroll">
      <table className="axis-data-table axis-valuation-table">
        <thead>
          <tr>
            <th>Bank</th>
            <th>Role</th>
            <th>P/B</th>
            <th>P/TBV</th>
            <th>P/E</th>
          </tr>
        </thead>
        <tbody>
          {peerValuation.map(([bank, role, pb, ptbv, pe]) => (
            <tr className={role === "Target" ? "axis-target-row" : ""} key={bank}>
              <th scope="row">{bank}</th>
              <td>{role}</td>
              <td>{pb}</td>
              <td>{ptbv}</td>
              <td>{pe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OperatingTable() {
  return (
    <div className="axis-table-scroll">
      <table className="axis-data-table axis-operating-table">
        <thead>
          <tr>
            <th>Bank</th>
            <th>ROE</th>
            <th>ROA</th>
            <th>NIM</th>
            <th>Loan growth</th>
            <th>GNPA</th>
            <th>CASA</th>
            <th>CET1</th>
          </tr>
        </thead>
        <tbody>
          {peerOperating.map(([bank, roe, roa, nim, loanGrowth, gnpa, casa, cet1]) => (
            <tr className={bank === "Axis Bank" ? "axis-target-row" : ""} key={bank}>
              <th scope="row">{bank}</th>
              <td>{roe}</td>
              <td>{roa}</td>
              <td>{nim}</td>
              <td>{loanGrowth}</td>
              <td>{gnpa}</td>
              <td>{casa}</td>
              <td>{cet1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AxisCase({ onClose }) {
  return (
    <div className="axis-overlay">
      <header className="axis-topbar">
        <CaseFileBackButton onClick={onClose} />
        <span>CASE FILE 03 / COMPARABLE COMPANY ANALYSIS</span>
        <button onClick={onClose} className="axis-close" aria-label="Close case file">
          ×
        </button>
      </header>

      <div className="axis-scroll">
        <main className="axis-document">
          <div className="axis-kicker">PRIVATE BANKING / RELATIVE VALUATION / 18 SEPTEMBER 2026</div>

          <section className="axis-hero">
            <div className="axis-hero-main">
              <p className="axis-label">AXIS BANK</p>
              <h1>THE MULTIPLE TELLS A STORY.</h1>
              <p className="axis-deck">Is Axis Bank fairly valued relative to its closest private-sector banking peers?</p>
              <p className="axis-intro">A comparable-company analysis of Axis Bank using relative valuation multiples and operating-quality indicators.</p>
            </div>
            <aside className="axis-hero-data">
              <span>VALUATION DATE</span>
              <strong>18 SEP 2026</strong>
              <i />
              <span>AXIS BANK / SHARE PRICE</span>
              <strong>₹1,257</strong>
              <i />
              <span>PEER SET</span>
              <p>HDFC Bank · ICICI Bank<br />Kotak Mahindra Bank · Federal Bank</p>
            </aside>
          </section>

          <section className="axis-section" aria-labelledby="axis-peer-heading">
            <div className="axis-section-heading">
              <span>01</span>
              <div>
                <p>THE PEER SET</p>
                <h2 id="axis-peer-heading">WHO DOES AXIS BANK TRADE AGAINST?</h2>
              </div>
            </div>
            <div className="axis-section-content">
              <p className="axis-copy">Axis Bank is the target company. HDFC Bank, ICICI Bank, Kotak Mahindra Bank and Federal Bank form the peer set used for the workbook’s relative valuation comparisons.</p>
              <PeerValuationTable />
            </div>
          </section>

          <section className="axis-section" aria-labelledby="axis-multiple-heading">
            <div className="axis-section-heading">
              <span>02</span>
              <div>
                <p>THE MULTIPLE</p>
                <h2 id="axis-multiple-heading">WHAT IS THE MARKET PAYING FOR AXIS?</h2>
              </div>
            </div>
            <div className="axis-section-content">
              <p className="axis-copy">The workbook anchors bank valuation to price-to-book and price-to-tangible-book. Price-to-earnings is retained as a secondary cross-check.</p>
              <div className="axis-multiple-rows">
                <div><strong>P/B</strong><span>Axis 1.82x</span><span>Peer median, ex-Axis 2.16x</span><b>−15.70%</b></div>
                <div><strong>P/TBV</strong><span>Axis 1.82x</span><span>Peer median, ex-Axis 2.16x</span><b>−15.82%</b></div>
                <div><strong>P/E</strong><span>Axis 15.20x</span><span>Peer median, ex-Axis 18.50x</span><b>−17.84%</b></div>
              </div>
              <p className="axis-note">Current multiple premium / (discount) to the median of the four peers, excluding Axis Bank.</p>
            </div>
          </section>

          <section className="axis-section" aria-labelledby="axis-quality-heading">
            <div className="axis-section-heading">
              <span>03</span>
              <div>
                <p>THE QUALITY</p>
                <h2 id="axis-quality-heading">DOES AXIS DESERVE ITS MULTIPLE?</h2>
              </div>
            </div>
            <div className="axis-section-content">
              <p className="axis-copy">Q1 FY27 operating indicators provide context for the valuation spread. The figures below are the workbook’s standardized peer comparison.</p>
              <OperatingTable />
              <p className="axis-note">Operating basis: Q1 FY27. Lower GNPA indicates lower gross non-performing assets as a share of advances; the workbook presents ratios without assigning a recommendation.</p>
            </div>
          </section>

          <section className="axis-section" aria-labelledby="axis-relative-heading">
            <div className="axis-section-heading">
              <span>04</span>
              <div>
                <p>RELATIVE VALUE</p>
                <h2 id="axis-relative-heading">WHAT DOES THE PEER MEDIAN IMPLY?</h2>
              </div>
            </div>
            <div className="axis-section-content">
              <p className="axis-copy">Each method applies the median multiple of HDFC Bank, ICICI Bank, Kotak Mahindra Bank and Federal Bank to the corresponding Axis Bank per-share metric.</p>
              <div className="axis-implied-list">
                {impliedValues.map((item) => (
                  <div key={item.method}>
                    <span>{item.method} / PEER MEDIAN {item.peerMedian}</span>
                    <strong>{item.implied}</strong>
                    <b>{item.upside}</b>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="axis-section" aria-labelledby="axis-crosscheck-heading">
            <div className="axis-section-heading">
              <span>05</span>
              <div>
                <p>THE CROSS-CHECK</p>
                <h2 id="axis-crosscheck-heading">DO THE METHODS AGREE?</h2>
              </div>
            </div>
            <div className="axis-section-content">
              <div className="axis-crosscheck">
                <div className="axis-crosscheck-head"><span>METHOD</span><span>IMPLIED PRICE</span><span>UPSIDE / (DOWNSIDE)</span></div>
                {impliedValues.map((item) => (
                  <div key={item.method}><strong>{item.method}</strong><span>{item.implied}</span><b>{item.upside}</b></div>
                ))}
              </div>
              <p className="axis-note">P/B and P/TBV are the primary valuation methods in the workbook. P/E is a secondary cross-check.</p>
            </div>
          </section>

          <section className="axis-section axis-verdict" aria-labelledby="axis-verdict-heading">
            <div className="axis-section-heading">
              <span>06</span>
              <div>
                <p>THE VERDICT</p>
                <h2 id="axis-verdict-heading">WHAT DOES THE RELATIVE VALUATION SAY?</h2>
              </div>
            </div>
            <div className="axis-section-content axis-verdict-columns">
              <div>
                <span>MODEL OUTPUT</span>
                <p>At the workbook’s ₹1,257 share-price input, all three relative-valuation methods produce implied prices above the current price. The workbook QA sheet marks the tangible-book bridge and valuation checks as PASS.</p>
              </div>
              <div>
                <span>ANALYST INTERPRETATION</span>
                <p>Axis Bank trades below the selected peer medians on P/B, P/TBV and P/E in this model. The indicated relative value is positive across the three methods; this is a workbook-based comparison, not an explicit BUY, HOLD or SELL recommendation.</p>
              </div>
            </div>
          </section>

          <section className="axis-research-materials">
            <div>
              <span>RESEARCH MATERIALS</span>
              <h2>Banking Industry CCA / Tangible Book Model</h2>
            </div>
            <a href="/reports/Banking_Industry_CCA_PROPER_TBVPS_V2.xlsx" target="_blank" rel="noreferrer">
              OPEN SUPPORTING WORKBOOK ↗
            </a>
          </section>

          <p className="axis-disclaimer">This is an independent academic/portfolio analysis and not investment advice.</p>
          <p className="axis-source-line">Source: Banking Industry CCA workbook · FY26 audited balance-sheet basis · Q1 FY27 operating basis · 18 September 2026 valuation date.</p>
        </main>
      </div>
    </div>
  );
}
