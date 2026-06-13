"use client";

import { useEffect, useState } from "react";

export default function CountryPopup() {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState("ALL");

  useEffect(() => {
    const locked = localStorage.getItem("countryLocked");

    if (locked === "true") return;

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
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-[9999] flex items-center justify-center">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-xl font-bold mb-3">
          🌍 Country Detection
        </h2>

        <p className="text-slate-600 mb-6">
          We detected your location as <b>{country}</b>.
          Would you like to see deals available in your country?
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => {
              localStorage.setItem("country", country);
              localStorage.setItem("countryLocked", "true");
              location.reload();
            }}
            className="flex-1 bg-indigo-600 text-white rounded-xl py-3"
          >
            Yes
          </button>

          <button
            onClick={() => {
              localStorage.setItem("country", "ALL");
              localStorage.setItem("countryLocked", "true");
              location.reload();
            }}
            className="flex-1 border rounded-xl py-3"
          >
            All Countries
          </button>
        </div>
      </div>
    </div>
  );
}
