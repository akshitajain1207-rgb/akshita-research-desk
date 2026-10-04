import React from "react";
import "./netflix-case.css";
import CaseFileBackButton from "./CaseFileBackButton";

const modelSteps = [
  "HISTORICAL FINANCIALS",
  "FORECAST ASSUMPTIONS",
  "FREE CASH FLOW",
  "DISCOUNT RATE",
  "TERMINAL VALUE",
  "INTRINSIC VALUE",
];

export default function NetflixCase({ onClose }) {
  return (
    <div className="netflix-overlay">
      <header className="netflix-topbar">
        <CaseFileBackButton onClick={onClose} />
        <span>CASE FILE 04 / DCF VALUATION</span>
        <button onClick={onClose} className="netflix-close" aria-label="Close case file">
          ×
        </button>
      </header>

      <div className="netflix-scroll">
        <main className="netflix-document">
          <div className="netflix-kicker">INTRINSIC VALUATION / FINANCIAL MODELLING</div>

          <section className="netflix-hero">
            <p className="netflix-label">NETFLIX</p>
            <h1>THE VALUE OF THE NEXT DECADE.</h1>
            <p className="netflix-question">
              What does Netflix&apos;s future cash-flow profile imply for intrinsic value?
            </p>
          </section>

          <section className="netflix-section netflix-logic" aria-labelledby="netflix-logic-title">
            <div className="netflix-section-title">
              <span>01</span>
              <h2 id="netflix-logic-title">MODEL LOGIC</h2>
            </div>
            <ol className="netflix-flow">
              {modelSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </section>

          <section className="netflix-section netflix-built" aria-labelledby="netflix-built-title">
            <div className="netflix-section-title">
              <span>02</span>
              <h2 id="netflix-built-title">WHAT I BUILT</h2>
            </div>
            <p>
              A five-year DCF model built from historical financials and forecast assumptions. The model projects the financial statements, derives unlevered free cash flow, discounts forecast cash flows, estimates terminal value, and includes sensitivity analysis.
            </p>
          </section>

          <section className="netflix-section netflix-output" aria-labelledby="netflix-output-title">
            <div className="netflix-section-title">
              <span>03</span>
              <h2 id="netflix-output-title">KEY OUTPUT</h2>
            </div>
            <p className="netflix-units">DCF VALUATION / $ IN THOUSANDS</p>
            <dl className="netflix-values">
              <div>
                <dt>ENTERPRISE VALUE</dt>
                <dd>$259,588</dd>
              </div>
              <div>
                <dt>EQUITY VALUE</dt>
                <dd>$216,642</dd>
              </div>
            </dl>
          </section>

          <section className="netflix-materials" aria-labelledby="netflix-materials-title">
            <div className="netflix-materials-copy">
              <span>RESEARCH MATERIAL</span>
              <h2 id="netflix-materials-title">NETFLIX DCF VALUATION MODEL</h2>
              <p>
                Completed financial modelling workbook containing the assumptions, forecasts, DCF calculation, terminal value and sensitivity analysis.
              </p>
            </div>
            <a
              href="/reports/assignment_financial_modelling_final_completed_no_footnote_exact.xlsx"
              target="_blank"
              rel="noreferrer"
            >
              OPEN DCF MODEL <span aria-hidden="true">↗</span>
            </a>
          </section>

          <p className="netflix-disclaimer">
            This is an independent academic/portfolio analysis and not investment advice.
          </p>
        </main>
      </div>
    </div>
  );
}
