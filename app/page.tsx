import WhyChooseUs from "../components/WhyChooseUs";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedMerchants from "../components/FeaturedMerchants";
import Hero from "../components/Hero";
import Header from "../components/Header";
import OfferCard from "../components/OfferCard";
import SectionTitle from "../components/SectionTitle";
import { getHomepageData } from "../lib/api";
import Footer from "../components/Footer";
import Link from "next/link";
import AnnouncementBar from "../components/AnnouncementBar";
import TrendingTicker from "../components/TrendingTicker";
import HeroDeals from "../components/HeroDeals";

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

	const uniqueHeroDeals = [];
	const merchantSet = new Set();

	for (const offer of data.topDiscounts) {
	  if (!merchantSet.has(offer.merchant_name)) {
	    merchantSet.add(offer.merchant_name);
	    uniqueHeroDeals.push(offer);
	  }
	
	  if (uniqueHeroDeals.length === 10) break;
	}

  return (
    <>
      <AnnouncementBar />
      <Header />

	<main className="w-full px-6 xl:px-10 py-8">

	<Hero
	  stats={data.stats}
	  heroDeals={uniqueHeroDeals}
	/>

	<TrendingTicker brands={data.topBrands} />

        {/* Trending Deals */}
	<section className="bg-gradient-to-b from-white to-slate-50 rounded-3xl shadow-lg p-6 mb-10 border border-slate-100">
	  <SectionTitle title="🔥 Trending Deals" />
	
	<HeroDeals
	  offers={data.featuredOffers}
	/>

	</section>

        <CategoryGrid
          categories={data.popularCategories}
        />

        <FeaturedMerchants
          merchants={data.featuredMerchants}
        />

	{/* Biggest Discounts */}
	<section className="bg-gradient-to-b from-white to-slate-50 rounded-3xl shadow-lg p-6 mb-10 border border-slate-100">
	  <SectionTitle title="💸 Biggest Discounts" />
	
	  <HeroDeals
	    offers={data.topDiscounts}
	  />

	</section>

        {/* Latest Offers */}
	<section className="bg-gradient-to-b from-white to-slate-50 rounded-3xl shadow-lg p-6 mb-10 border border-slate-100">
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
	
	</section>

	<WhyChooseUs stats={data.stats} />

      </main>

      <Footer />
    </>
  );
}
