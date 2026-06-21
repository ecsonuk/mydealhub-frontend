import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OfferCard from "../../components/OfferCard";
import SectionTitle from "../../components/SectionTitle";
import { getHomepageData } from "../../lib/api";

type PageProps = {
  searchParams: Promise<{
    type?: string;
    country?: string;
  }>;
};
	
export default async function DealsPage({
  searchParams,
}: PageProps) {

const params = await searchParams;

const dealType = params.type || "all";
const country =
  params.country === "ALL"
    ? ""
    : params.country || "";

const data = await getHomepageData(
  country,
);

  return (
    <>
      <Header />

      <main className="max-w-screen-2xl mx-auto px-8 py-8">

<section className="mb-8 rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-8 text-white shadow-xl">

  <h1 className="text-5xl font-extrabold mb-3">
    {dealType === "hot" && "🔥 Hot Deals"}
    {dealType === "discount" && "💰 Best Discounts"}
    {dealType === "savings" && "🏆 Top Savings"}
    {dealType === "latest" && "🆕 Latest Deals"}
    {dealType === "exclusive" && "💎 Exclusive Offers"}
    {dealType === "all" && "🔥 Deals Hub"}
  </h1>

  <p className="text-lg text-white/90 max-w-4xl">
    {dealType === "hot" &&
      "Discover the most popular and trending deals right now."}

    {dealType === "discount" &&
      "Browse the biggest savings and highest discounts available today."}

    {dealType === "latest" &&
      "Explore the newest deals recently added to Hub4Deals."}

    {dealType === "exclusive" &&
      "Premium and featured offers from our highest value merchants."}

    {dealType === "all" &&
      "Explore hot deals, best discounts, top savings and the latest offers in one place."}
  </p>

  <div className="mt-4 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
    Thousands of Offers Updated Daily
  </div>

</section>

	{/* Hot Deals */}
	{(dealType === "all" ||
	  dealType === "hot") && (
	  <>
		{dealType === "all" && (
		  <SectionTitle title="🔥 Hot Deals" />
		)}
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
	      {data.featuredOffers.slice(0, 12).map((offer: any) => (
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
	  </>
	)}

        {/* Best Discounts */}
	{(dealType === "all" ||
	  dealType === "discount") && (
	  <>
		{dealType === "all" && (
		  <SectionTitle title="💰 Best Discounts" />
		)}
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
	      {data.topDiscounts.slice(0, 12).map((offer: any) => (
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
	  </>
	)}

        {/* Latest Deals */}
	{(dealType === "all" ||
	  dealType === "latest") && (
	  <>
		{dealType === "all" && (
		  <SectionTitle title="🆕 Latest Deals" />
		)}
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
	      {data.latestOffers.slice(0, 12).map((offer: any) => (
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
	  </>
	)}

	{/* Exclusive Offers */}
	{dealType === "exclusive" && (

	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

	    {data.exclusiveOffers
	      .slice(0, 12)
	      .map((offer: any) => (

	      <OfferCard
	        key={offer.offer_id}
	        offerId={offer.offer_id}
	        merchantId={offer.merchant_id}
	        categoryId={offer.category_id}
	        categoryName={offer.category_name}
	        countryCode={offer.country_code}
	        title={offer.title}
	        merchantName={offer.merchant_name}
	        imageUrl={offer.image_url}
	        price={offer.price}
	        currency={offer.currency}
	        trackingUrl={offer.tracking_url}
	      />

	    ))}

	  </div>

	)}

	{/* Top Savings */}
	{(dealType === "all" ||
	  dealType === "savings") && (
	  <>

                {dealType === "all" && (
                  <SectionTitle title="🏆 Top Savings" />
                )}
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

	      {data.topSavings
	        .slice(0, 12)
	        .map((offer: any) => (

	        <OfferCard
	          key={offer.offer_id}
	          offerId={offer.offer_id}
	          merchantId={offer.merchant_id}
	          categoryId={offer.category_id}
	          categoryName={offer.category_name}
	          countryCode={offer.country_code}
	          title={offer.title}
	          merchantName={offer.merchant_name}
	          imageUrl={offer.image_url}
	          price={offer.price}
	          currency={offer.currency}
	          trackingUrl={offer.tracking_url}
	        />
	      ))}
	    </div>
	  </>
	)}

      </main>

      <Footer />
    </>
  );
}
