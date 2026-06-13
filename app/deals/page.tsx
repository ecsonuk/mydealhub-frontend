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

	<div className="mb-10">
	
	  <h1 className="text-4xl font-bold">
	    {dealType === "hot" && "🔥 Hot Deals"}
	    {dealType === "discount" && "💰 Best Discounts"}
	    {dealType === "savings" && "🏆 Top Savings"}
	    {dealType === "latest" && "🆕 Latest Deals"}
	    {dealType === "exclusive" && "💎 Exclusive Offers"}
	    {dealType === "all" && "🔥 Deals Hub"}
	  </h1>
	
	  {dealType === "hot" && (
	    <p className="mt-3 text-slate-600 text-lg">
	      Discover the most popular and trending deals right now.
	    </p>
	  )}
	
	  {dealType === "discount" && (
	    <p className="mt-3 text-slate-600 text-lg">
	      Browse the biggest savings and highest discounts available today.
	    </p>
	  )}
		
	  {dealType === "latest" && (
	    <p className="mt-3 text-slate-600 text-lg">
	      Explore the newest deals recently added to Hub4Deals.
	    </p>
	  )}

	{dealType === "exclusive" && (
	  <p className="mt-3 text-slate-600 text-lg">
	    Premium and featured offers from our highest value merchants.
	  </p>
	)}
	
	  {dealType === "all" && (
	    <p className="mt-3 text-slate-600 text-lg">
	      Explore hot deals, best discounts and the latest offers in one place.
	    </p>
	  )}
	
	</div>

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
