import Link from "next/link";
import React from "react";

function header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Scale</Link>
    </header>
  );
}

export default header;
