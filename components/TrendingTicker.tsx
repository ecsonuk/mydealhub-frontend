"use client";

import Image from "next/image";
import Link from "next/link";

type Brand = {
  merchant_id: string;
  merchant_name: string;
  logo_url?: string;
  offer_count: string;
};

type Props = {
  brands: Brand[];
};

export default function TrendingTicker({
  brands,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm mb-8 border overflow-hidden">

      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 font-semibold">
        🏆 Top Brands By Active Offers
      </div>

      <div className="overflow-hidden">

        <div
          className="
            flex
            gap-6
            px-4
            py-4
            w-max
            animate-marquee
          "
        >

          {[...brands, ...brands].map(
            (brand, index) => (
              <Link
                key={`${brand.merchant_id}-${index}`}
                href={`/merchant/${brand.merchant_id}`}
                className="
                  flex
                  items-center
                  gap-3
                  bg-slate-50
                  rounded-xl
                  px-4
                  py-3
                  min-w-[260px]
                  hover:bg-slate-100
                  transition
                  flex-shrink-0
                "
              >

                <div className="relative w-14 h-14 flex-shrink-0">

                  {brand.logo_url && (
                    <Image
                      src={brand.logo_url}
                      alt={brand.merchant_name}
                      fill
                      className="object-contain"
                    />
                  )}

                </div>

                <div>

                  <div className="font-semibold">
                    {brand.merchant_name}
                  </div>

                  <div className="text-green-600 text-sm font-medium">
                    {brand.offer_count} Active Deals
                  </div>

                </div>

              </Link>
            )
          )}

        </div>

      </div>

    </div>
  );
}
