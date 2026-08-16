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
import HowItWorks from "../components/HowItWorks";
import AboutHub4Deals from "../components/AboutHub4Deals";
import FAQ from "../components/FAQ";
import Script from "next/script";

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

	const uniqueHeroDeals = data.topDiscounts.slice(0, 20);

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hub4Deals",
  url: "https://www.hub4deals.com",
  logo: "https://www.hub4deals.com/icon.png",
  description:
    "Hub4Deals helps shoppers discover the latest deals, discounts, coupons and offers from trusted merchants worldwide.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hub4Deals",
  url: "https://www.hub4deals.com",
  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://www.hub4deals.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

  return (
    <>

<Script
  id="organization-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationSchema),
  }}
/>

<Script
  id="website-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(websiteSchema),
  }}
/>

	<AnnouncementBar />

      <Header />

	<main className="w-full mx-auto px-4 md:px-6 xl:px-8 py-8">

	<Hero
	  stats={data.stats}
	  heroDeals={uniqueHeroDeals}
	/>

	<TrendingTicker brands={data.topBrands} />

	<HowItWorks />

	{/* Trending Deals */}
	<section
	  className="
	    rounded-3xl
	    bg-gradient-to-r
	    from-orange-600
	    via-pink-600
	    to-purple-700
	    shadow-2xl
	    px-6
	    py-4
	    mb-10
	  "
	>

	<div className="mb-3">
	  <SectionTitle title="🔥 Trending Deals" />
	
	  <p className="text-white/80 text-sm mt-1">
	    Hand-picked trending deals from top merchants worldwide
	  </p>
	</div>
	
	<HeroDeals
	  offers={data.featuredOffers}
	/>

	</section>

        {/* Biggest Discounts */}
        <section
          className="
            rounded-3xl
            bg-gradient-to-r
            from-emerald-600
            via-cyan-600
            to-blue-700
            shadow-2xl
            px-6
            py-4
            mb-10
          "
>

          <SectionTitle title="💸 Biggest Discounts" />

           <p className="text-white/80 text-sm mb-4">
             Highest savings and best value deals available today
           </p>

          <HeroDeals
            offers={data.topDiscounts}
          />

        </section>

        {/* New Today */}
        <section
          className="
            rounded-3xl
            bg-gradient-to-r
            from-slate-600
            via-blue-950
            to-sky-800
            shadow-2xl
            px-6
            py-4
            mb-10
          "
        >

          <SectionTitle title="🆕 New Today" />

          <p className="text-white/80 text-sm mb-4">
            Fresh offers recently added to Hub4Deals
          </p>

          <HeroDeals
            offers={data.latestOffers}
          />

        </section>


        <CategoryGrid
          categories={data.popularCategories}
        />

        <FeaturedMerchants
          merchants={data.featuredMerchants}
        />

	<WhyChooseUs stats={data.stats} />

	<FAQ />

	<AboutHub4Deals />

      </main>

      <Footer />

    </>
  );
}
