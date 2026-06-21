"use client";

import { useEffect, useState } from "react";

export default function CountryPopup() {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState("ALL");

  useEffect(() => {
    const locked = localStorage.getItem("countryLocked");

    if (locked === "true") return;

    const timer = setTimeout(() => {
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          setCountry(data.country_code || "ALL");
          setShow(true);
        })
        .catch(() => {
          setCountry("ALL");
          setShow(true);
        });
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] w-[340px]">
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xl">

        <h2 className="text-lg font-bold text-slate-800 mb-2">
          🌍 Local Deals Available
        </h2>

        <p className="text-sm text-slate-600 mb-4">
          We detected your location as{" "}
          <span className="font-semibold text-slate-800">
            {country}
          </span>.
          <br />
          Would you like to browse local deals?
        </p>

        <div className="flex gap-2">

          <button
            onClick={() => {
              localStorage.setItem("country", country);
              localStorage.setItem("countryLocked", "true");
              setShow(false);
              location.reload();
            }}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2.5 text-sm font-semibold transition-colors"
          >
            Yes
          </button>

          <button
            onClick={() => {
              localStorage.setItem("country", "ALL");
              localStorage.setItem("countryLocked", "true");
              setShow(false);
            }}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl py-2.5 text-sm font-semibold transition-colors"
          >
            All Countries
          </button>

        </div>

        <button
          onClick={() => setShow(false)}
          className="mt-3 w-full text-xs text-slate-500 hover:text-slate-700"
        >
          Dismiss
        </button>

      </div>
    </div>
  );
}
