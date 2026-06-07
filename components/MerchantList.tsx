"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Merchant = {
  merchant_id: string;
  merchant_name: string;
  logo_url?: string;
  currency?: string;
};

export default function MerchantList({
  merchants,
}: {
  merchants: Merchant[];
}) {
  const [search, setSearch] = useState("");

  const filteredMerchants = merchants.filter((merchant) =>
    merchant.merchant_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search merchants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 mb-6"
      />

      <p className="text-sm text-gray-500 mb-4">
        Showing {filteredMerchants.length} merchants
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMerchants.map((merchant) => (
          <Link
            key={merchant.merchant_id}
            href={`/merchant/${merchant.merchant_id}`}
            className="border rounded-lg p-4 hover:shadow-md transition bg-white"
          >
            {merchant.logo_url ? (
              <div className="relative h-16 mb-3">
                <Image
                  src={merchant.logo_url}
                  alt={merchant.merchant_name}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="h-16 mb-3 flex items-center justify-center text-gray-400">
                No Logo
              </div>
            )}

            <h2 className="font-semibold">
              {merchant.merchant_name}
            </h2>

            <p className="text-xs text-gray-500 mt-2">
              {merchant.currency}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
