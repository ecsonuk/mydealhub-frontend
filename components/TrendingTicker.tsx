"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

const scrollRef = useRef<HTMLDivElement>(null);
const [isHovered, setIsHovered] = useState(false);

useEffect(() => {
  if (isHovered) return;

  const container = scrollRef.current;

  if (!container) return;

  const interval = setInterval(() => {
    container.scrollLeft += 1;

    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth
    ) {
      container.scrollLeft = 0;
    }
  }, 30);

  return () => clearInterval(interval);
}, [isHovered]);


  return (
    <section className="mb-10">

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white overflow-hidden">

        {/* Header */}

        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-4">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-white font-bold text-xl">
                🏆 Top Brands
              </h2>

              <p className="text-white/80 text-sm">
                Most popular merchants ranked by active offers
              </p>

            </div>

            <Link
              href="/merchants"
              className="
                hidden
                md:inline-flex
                bg-white/20
                text-white
                px-4
                py-2
                rounded-xl
                text-sm
                font-medium
                hover:bg-white/30
                transition
              "
            >
              View All →
            </Link>

          </div>

        </div>

        {/* Marquee */}

	<div
	  ref={scrollRef}
	  onMouseEnter={() => setIsHovered(true)}
	  onMouseLeave={() => setIsHovered(false)}
	  className="overflow-x-auto scrollbar-auto-hide py-5"
	>

	<div
	  className="
	    flex
	    gap-5
	    w-max
	    px-5
	  "
	>

            {[...brands, ...brands].map(
              (brand, index) => (
                <Link
                  key={`${brand.merchant_id}-${index}`}
                  href={`/merchant/${brand.merchant_id}`}
                  className="
                    bg-white
                    rounded-2xl
                    border
                    border-slate-200
                    shadow-sm
                    hover:shadow-lg
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    min-w-[240px]
                    px-4
                    py-4
                    flex
		    flex-col
		    items-center
		    justify-center
                    gap-4
                    flex-shrink-0
                  "
                >

                  {/* Logo */}

                  <div
                    className="
                      relative
                      w-55
                      h-25
                      rounded-2xl
                      bg-slate-50
                      border
                      border-slate-100
                      flex-shrink-0
		      mx-auto
                    "
                  >

                    {brand.logo_url && (
                      <Image
                        src={brand.logo_url}
                        alt={brand.merchant_name}
                        fill
                        className="object-contain p-0"
                      />
                    )}

                  </div>

                </Link>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}
