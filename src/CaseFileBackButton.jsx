import React from "react";
import "./case-file-navigation.css";

export default function CaseFileBackButton({ onClick }) {
  return (
    <button className="case-file-back" type="button" onClick={onClick}>
      <span aria-hidden="true">←</span> BACK TO RESEARCH DESK
    </button>
  );
}
