import React from "react";
import "./coforge-case.css";
import CaseFileBackButton from "./CaseFileBackButton";

export default function CoforgeCase({ onClose }) {
  return (
    <div className="coforge-overlay">
      <div className="coforge-topbar">
        <CaseFileBackButton onClick={onClose} />
        <span>AKSHITA JAIN RESEARCH DESK / CASE FILE 01</span>

        <button onClick={onClose} className="coforge-close">
          ×
        </button>
      </div>

      <div className="coforge-scroll">
        <main className="coforge-detail">

          <div className="coforge-kicker">
            EQUITY RESEARCH / INITIATING COVERAGE / SEPTEMBER 2026
          </div>

          <section className="coforge-hero">
            <div>
              <p className="coforge-label">COFORGE LIMITED</p>

              <h1>
                49.2% REPORTED GROWTH. <br />
                ~1.1% ORGANIC CC GROWTH.
              </h1>

              <p className="coforge-intro">
                A research case examining Coforge's transformation after
                Cigniti and Encora, with the central question being whether
                headline growth can translate into sustainable underlying
                growth.
              </p>
            </div>

            <div className="coforge-rating">
              <span>RESEARCH VIEW</span>
              <strong>HOLD</strong>
              <small>12-month target ₹1,900</small>
            </div>
          </section>

          <section className="coforge-section">
            <div className="coforge-section-title">
              <span>01</span>
              <h2>The numbers first</h2>
            </div>

            <div className="coforge-metrics">

              <div>
                <small>Q1 FY27 Revenue Growth</small>
                <strong>49.2%</strong>
                <p>YoY consolidated growth</p>
              </div>

              <div>
                <small>Organic CC Growth</small>
                <strong>~1.1%</strong>
                <p>YoY, excluding Encora and exited businesses</p>
              </div>

              <div>
                <small>EBIT Margin</small>
                <strong>16.0%</strong>
                <p>Q1 FY27 consolidated</p>
              </div>

              <div>
                <small>FCF / PAT</small>
                <strong>95.3%</strong>
                <p>Q1 FY27 conversion</p>
              </div>

              <div>
                <small>Encora Deal</small>
                <strong>$2.35bn</strong>
                <p>Approximate acquisition value</p>
              </div>

              <div>
                <small>New Debt</small>
                <strong>$550m</strong>
                <p>Three-year facility</p>
              </div>

            </div>
          </section>

          <section className="coforge-section">
            <div className="coforge-section-title">
              <span>02</span>
              <h2>The growth gap</h2>
            </div>

            <div className="coforge-growth">

              <div className="coforge-growth-card headline">
                <span>HEADLINE GROWTH</span>
                <strong>49.2%</strong>
                <p>
                  Q1 FY27 consolidated revenue growth, with Encora entering
                  the reported base.
                </p>
              </div>

              <div className="coforge-growth-card organic">
                <span>ORGANIC GROWTH</span>
                <strong>~1.1%</strong>
                <p>
                  Q1 FY27 organic constant-currency growth after stripping
                  out Encora and exited businesses.
                </p>
              </div>

            </div>

            <p className="coforge-body">
              The key analytical distinction in the report is between
              reported scale and underlying demand. The 49% headline growth
              is real, but it does not yet demonstrate equivalent organic
              momentum.
            </p>
          </section>

          <section className="coforge-section">
            <div className="coforge-section-title">
              <span>03</span>
              <h2>What changed?</h2>
            </div>

            <div className="coforge-two-column">

              <div className="coforge-card">
                <span>ENCORA</span>
                <strong>$2.35–2.36bn</strong>
                <p>
                  The all-stock acquisition added an AI-native engineering
                  franchise, AIVA, LatAm delivery capability and additional
                  Hi-Tech and Healthcare exposure.
                </p>
              </div>

              <div className="coforge-card">
                <span>SHAREHOLDER DILUTION</span>
                <strong>~20%</strong>
                <p>
                  Approximately 9.38 crore new Coforge shares were issued to
                  Encora sellers as part of the transaction.
                </p>
              </div>

              <div className="coforge-card">
                <span>BALANCE SHEET</span>
                <strong>$550m</strong>
                <p>
                  New three-year debt facility used to refinance Encora's
                  existing debt.
                </p>
              </div>

              <div className="coforge-card">
                <span>ORDER VISIBILITY</span>
                <strong>$2.23bn</strong>
                <p>
                  Q1 FY27 executable order book for the next twelve months,
                  up 27% QoQ.
                </p>
              </div>

            </div>
          </section>

          <section className="coforge-section">
            <div className="coforge-section-title">
              <span>04</span>
              <h2>Margin & cash conversion</h2>
            </div>

            <div className="coforge-bars">

              <div className="coforge-bar-row">
                <span>FY26A EBIT margin</span>
                <div>
                  <i style={{ width: "72%" }}></i>
                </div>
                <b>14.4%</b>
              </div>

              <div className="coforge-bar-row">
                <span>Q1 FY27 EBIT margin</span>
                <div>
                  <i style={{ width: "80%" }}></i>
                </div>
                <b>16.0%</b>
              </div>

              <div className="coforge-bar-row">
                <span>FY27E EBIT margin</span>
                <div>
                  <i style={{ width: "79%" }}></i>
                </div>
                <b>15.7%</b>
              </div>

            </div>

            <p className="coforge-body">
              Margin improvement is one of the clearer positives in the
              research. FY26A EBIT margin expanded to 14.4%, while Q1 FY27
              reached 16.0%. Free cash flow conversion also moved sharply
              higher to 95.3% of PAT.
            </p>
          </section>

          <section className="coforge-section">
            <div className="coforge-section-title">
              <span>05</span>
              <h2>Forecast framework</h2>
            </div>

            <div className="coforge-table">

              <div className="coforge-table-row head">
                <span>₹ crore</span>
                <span>FY26A</span>
                <span>FY27E</span>
                <span>FY28E</span>
                <span>FY29E</span>
              </div>

              <div className="coforge-table-row">
                <span>Revenue</span>
                <span>16,403</span>
                <span>24,400</span>
                <span>27,816</span>
                <span>31,432</span>
              </div>

              <div className="coforge-table-row">
                <span>EBITDA</span>
                <span>3,046</span>
                <span>4,880</span>
                <span>5,702</span>
                <span>6,601</span>
              </div>

              <div className="coforge-table-row">
                <span>EBIT</span>
                <span>2,365</span>
                <span>3,831</span>
                <span>4,590</span>
                <span>5,406</span>
              </div>

            </div>
          </section>

          <section className="coforge-section coforge-valuation">
            <div className="coforge-section-title">
              <span>06</span>
              <h2>The valuation tension</h2>
            </div>

            <p className="coforge-body">
              The report's valuation framework produces a meaningful gap
              between intrinsic valuation and market-multiple cross-checks.
            </p>

            <div className="coforge-valuation-list">

              <div>
                <span>Organic-consensus DCF</span>
                <strong>₹1,077</strong>
              </div>

              <div>
                <span>Forward P/E cross-check</span>
                <strong>₹1,830</strong>
              </div>

              <div>
                <span>Forward EV / EBITDA</span>
                <strong>₹1,706–1,927</strong>
              </div>

              <div className="target">
                <span>Research target price</span>
                <strong>₹1,900</strong>
              </div>

            </div>

            <div className="coforge-price">
              <span>CURRENT PRICE / 25 SEP 2026</span>
              <strong>₹1,784</strong>
            </div>
          </section>

          <section className="coforge-section">
            <div className="coforge-section-title">
              <span>07</span>
              <h2>What could change the view?</h2>
            </div>

            <div className="coforge-watch">

              <div>
                <strong>01</strong>
                <h3>Organic growth</h3>
                <p>
                  A sustained acceleration beyond the Q1 FY27 organic
                  growth base would materially change the growth narrative.
                </p>
              </div>

              <div>
                <strong>02</strong>
                <h3>Governance</h3>
                <p>
                  Board reconstitution and any further developments remain
                  an unresolved risk in the report.
                </p>
              </div>

              <div>
                <strong>03</strong>
                <h3>Integration</h3>
                <p>
                  Encora integration costs, execution and margin trajectory
                  are key variables.
                </p>
              </div>

              <div>
                <strong>04</strong>
                <h3>Leverage</h3>
                <p>
                  Debt paydown against management's stated three-year plan
                  is an important capital-discipline indicator.
                </p>
              </div>

            </div>
          </section>

          <section className="coforge-conclusion">
            <span>RESEARCH CONCLUSION</span>

            <h2>
              HOLD
            </h2>

            <p>
              The research balances improving margins, cash conversion,
              order visibility and acquired capabilities against the
              relatively small organic-growth base, rising leverage,
              dilution and unresolved governance developments.
            </p>

            <strong>12-MONTH TARGET: ₹1,900</strong>
          </section>

          <section className="coforge-section coforge-research-materials">
            <div className="coforge-section-title">
              <span>RESEARCH MATERIALS</span>
              <h2>Original Equity Research Report</h2>
            </div>

            <div className="coforge-report-card">
              <div>
                <h3>Coforge — Equity Research: Initiating Coverage</h3>
                <p>27 September 2026 · 11 pages</p>
              </div>

              <a
                href="/reports/Coforge_Equity_Research_Report.pdf"
                target="_blank"
                rel="noreferrer"
              >
                VIEW FULL RESEARCH REPORT ↗
              </a>
            </div>
          </section>

          <div className="coforge-disclaimer">
            Based on the uploaded Coforge Equity Research report dated
            27 September 2026. Figures and conclusions shown here are
            derived from that report. The report states that it was
            prepared for illustration and discussion and is not investment
            advice.
          </div>


        </main>
      </div>
    </div>
  );
}
