"use client";

import Image from "next/image";
import Link from "next/link";

type OfferCardProps = {
  offerId: string;
  title: string;
  merchantId: string;
  merchantName: string;
  categoryId?: string;
  categoryName?: string;
  countryCode?: string;
  price: string;
  currency: string;
  imageUrl?: string;
  trackingUrl?: string;
};

export default function OfferCard({
  offerId,
  title,
  merchantName,
  merchantId,
  categoryId,
  categoryName,
  countryCode,
  price,
  currency,
  imageUrl,
  trackingUrl,
}: OfferCardProps) {

const handleDealClick = async () => {
  console.log("CLICKED", offerId);

  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/click`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          offer_id: offerId,
          merchant_id: merchantId,
          category_id: categoryId,
          country_code: countryCode,
        }),
      }
    );
  } catch (error) {
    console.error("Click tracking failed", error);
  }

  if (trackingUrl) {
    window.open(trackingUrl, "_blank");
  }
};

  return (
    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">

      <div className="relative">

	<div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
	  ⚡ Hot Deal
	</div>

	<div className="absolute top-3 right-3 z-10 bg-white text-red-500 text-xs font-bold px-2 py-1 rounded-full">
	  Ends Soon
	</div>

        <Link href={`/offer/${offerId}`}>
          {imageUrl && (
            <div className="relative w-full h-24 bg-gray-50">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-contain p-4"
              />
            </div>
          )}
        </Link>

      </div>

      <div className="p-2.5">

        <Link href={`/offer/${offerId}`}>
		<h3 className="font-semibold text-sm leading-5 line-clamp-2 min-h-[34px] overflow-hidden hover:text-blue-600">
            {title}
          </h3>
        </Link>

        {categoryId && categoryName && (
          <Link
            href={`/category/${categoryId}`}
            className="inline-block mt-2 text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 hover:bg-gray-200"
          >
            {categoryName}
          </Link>
        )}

	<div className="mt-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-lg p-2.5">

	  <div className="text-xs uppercase tracking-wide text-gray-500">
	    Deal Price
	  </div>

	  <div className="text-xl font-bold text-green-600">
	    {price} {currency}
	  </div>

	</div>
	<button
	  onClick={handleDealClick}
	className="mt-3 block w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold cursor-pointer transition-all duration-200 hover:scale-[1.02]"	
	>
	  View Deal →
	</button>

      </div>

    </div>
  );
}
