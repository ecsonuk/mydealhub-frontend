import Image from "next/image";
import Header from "@/components/Header";
import { getMerchant } from "@/lib/api";
import OfferCard from "@/components/OfferCard";

type PageProps = {
  params: Promise<{
    merchantId: string;
  }>;
};

export default async function MerchantPage({
  params,
}: PageProps) {
  const { merchantId } = await params;

  const data = await getMerchant(merchantId);

  if (!data.success) {
    return (
      <div className="container mx-auto px-4 py-8">
        Merchant not found
      </div>
    );
  }

  const merchant = data.merchant;

  return (
  <>
    <Header />

    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center gap-6">
          {merchant.logo_url && (
            <Image
              src={merchant.logo_url}
              alt={merchant.merchant_name}
              width={120}
              height={120}
            />
          )}

          <div>
            <h1 className="text-3xl font-bold">
              {merchant.merchant_name}
            </h1>

            <p className="mt-3 text-gray-600">
              {merchant.summary}
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6">
        Available Offers
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {data.offers.map((offer: any) => (
          <OfferCard
            key={offer.offer_id}
            offerId={offer.offer_id}
            merchantId={merchant.merchant_id}
	    countryCode={offer.country_code}
            title={offer.title}
            merchantName={merchant.merchant_name}
            imageUrl={offer.image_url}
            price={offer.price}
            currency={offer.currency}
            trackingUrl={offer.tracking_url}
          />
        ))}
      </div>
    </div>
  </>
  );
}
