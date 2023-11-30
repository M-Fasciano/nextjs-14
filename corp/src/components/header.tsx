import Link from "next/link";
import React from "react";

function header() {
  return (
    <header className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <div className="font-bold text-3xl">
          <Link href="/">Home</Link>
        </div>
        <div className="space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </header>
  );
}

export default header;
