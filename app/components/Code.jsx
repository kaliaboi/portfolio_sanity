"use client";
import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-atom-dark.css";

export default function Code({ value }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${value.language}`}>{value.code}</code>
      </pre>
    </div>
  );
}
