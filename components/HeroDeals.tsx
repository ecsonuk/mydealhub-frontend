"use client";

import { useEffect, useRef, useState } from "react";
import OfferCard from "./OfferCard";

export default function HeroDeals({
  offers,
}: {
  offers: any[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      if (!paused) {
        container.scrollLeft += 0.5;

        if (
          container.scrollLeft >=
          container.scrollWidth / 2
        ) {
          container.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      ref={scrollRef}
      className="
        overflow-x-auto
        overflow-y-hidden
        scrollbar-hide
        cursor-grab
        select-none
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex gap-4 min-w-max">

        {[...offers, ...offers].map(
          (offer, index) => (
            <div
              key={`${offer.offer_id}-${index}`}
              className="w-[240px] flex-shrink-0"
            >
              <OfferCard
                offerId={offer.offer_id}
                merchantId={offer.merchant_id}
                categoryId={offer.category_id}
                categoryName={offer.category_name}
                countryCode={offer.country_code}
                title={offer.title}
                merchantName={offer.merchant_name}
                price={offer.price}
                currency={offer.currency}
                imageUrl={offer.image_url}
                trackingUrl={offer.tracking_url}
              />
            </div>
          )
        )}

      </div>
    </div>
  );
}
