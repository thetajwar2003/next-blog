import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <div className="box-center">
      <main>
        <h1>404 - That page does not seem to exist...</h1>
        <iframe
          src="https://giphy.com/embed/ISOckXUybVfQ4"
          width="480"
          height="324"
          frameBorder="0"
          allowFullScreen
        />
        <Link href="/">
          <button className="btn-blue">Take Me Home, Country Roads</button>
        </Link>
      </main>
    </div>
  );
}
