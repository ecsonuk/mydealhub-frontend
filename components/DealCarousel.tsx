"use client";

import OfferCard from "./OfferCard";

export default function DealCarousel({
  offers,
}: {
  offers: any[];
}) {
  return (
    <div className="overflow-hidden">

      <div className="flex gap-4 animate-marquee w-max">

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
