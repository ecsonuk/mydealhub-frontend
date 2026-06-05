import Header from "../components/Header";
import { getHomepageData } from "../lib/api";
import OfferCard from "../components/OfferCard";

export default async function HomePage() {
  const data = await getHomepageData();

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Featured Offers
        </h2>
	<div className="mb-6 text-sm text-gray-600">
	  Featured: {data.featuredOffers.length} |
	  Discounts: {data.topDiscounts.length} |
	  Merchants: {data.featuredMerchants.length} |
	  Categories: {data.popularCategories.length} |
	  Latest: {data.latestOffers.length}
	</div>

        {data.featuredOffers.map((offer: any) => (
          <OfferCard
            key={offer.offer_id}
            title={offer.title}
            merchantName={offer.merchant_name}
            price={offer.price}
            currency={offer.currency}
          />
        ))}
      </main>
    </>
  );
}
