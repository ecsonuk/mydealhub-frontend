import WhyChooseUs from "../components/WhyChooseUs";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedMerchants from "../components/FeaturedMerchants";
import Hero from "../components/Hero";
import Header from "../components/Header";
import OfferCard from "../components/OfferCard";
import SectionTitle from "../components/SectionTitle";
import { getHomepageData } from "../lib/api";
import Footer from "../components/Footer";

import {
  Target,
  FolderOpen,
  Store,
  Globe,
} from "lucide-react";

	export default async function HomePage({
	  searchParams,
	}: {
	  searchParams: Promise<{
	    country?: string;
	  }>;
	}) {
	  const params = await searchParams;
	
	  const country =
	    params.country || "";
	
	  const data =
	    await getHomepageData(country);


  return (
    <>
      <Header />

	<main className="max-w-screen-2xl mx-auto px-8 py-8">

        <Hero />

        <CategoryGrid
          categories={data.popularCategories}
        />

        <FeaturedMerchants
          merchants={data.featuredMerchants}
        />

        {/* Trending Deals */}
        <SectionTitle title="🔥 Trending Deals" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.featuredOffers.slice(0, 8).map((offer: any) => (
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

        {/* Best Discounts */}
        <SectionTitle title="💰 Best Discounts" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.topDiscounts.slice(0, 8).map((offer: any) => (
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

        {/* Latest Offers */}
        <SectionTitle title="🆕 Newly Added Deals" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.latestOffers.slice(0, 8).map((offer: any) => (
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

        <WhyChooseUs />

      </main>

      <Footer />
    </>
  );
}
