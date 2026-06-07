import Header from "../../components/Header";
import OfferCard from "../../components/OfferCard";
import SectionTitle from "../../components/SectionTitle";
import { searchData } from "../../lib/api";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || "";

  const data = query
    ? await searchData(query)
    : {
        offers: [],
        merchants: [],
        categories: [],
      };

  return (
    <>
      <Header />

      <main className="max-w-screen-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-2">
          Search Results
        </h1>

        <p className="text-gray-600 mb-8">
          Query: {query}
        </p>

        <SectionTitle
          title={`Offers (${data.offers?.length || 0})`}
        />

        {data.offers?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.offers.map((offer: any) => (
	<OfferCard
	  offerId={offer.offer_id}
	  merchantId={offer.merchant_id}
	  categoryId={offer.category_id}
	  categoryName={offer.category_name}
	  countryCode={offer.country_code}
	  key={offer.offer_id}
	  title={offer.title}
	  merchantName={offer.merchant_name}
	  price={offer.price}
	  currency={offer.currency}
	  imageUrl={offer.image_url}
	  trackingUrl={offer.tracking_url}
	/>
            ))}
          </div>
        ) : (
          <p>No offers found.</p>
        )}
      </main>
    </>
  );
}
