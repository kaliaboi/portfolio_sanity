"use client";
import React, { useEffect } from "react";
import Prism from "prismjs";
import "../snippet-theme/prism-night-owl.css";

export default function Code({ value }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code p-20">
      <pre className="">
        <code className={`language-${value.language}`}>{value.code}</code>
      </pre>
    </div>
  );
}
