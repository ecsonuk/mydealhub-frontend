import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero({
  stats,
  heroDeals,
}: {
  stats?: {
    offers: string;
    merchants: string;
    categories: string;
    countries: string;
  };

  heroDeals?: any[];
}) {

const deals = heroDeals || [];

  return (
    <section className="mb-14">

	<div className="hero-bg relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 px-10 py-7 shadow-xl">
	
        {/* Decorative Effects */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-300/20 rounded-full blur-3xl" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">

	<div>

	<div className="mb-4 overflow-hidden">

	  <div
	    className="
	      flex
	      gap-2
	      whitespace-nowrap
	      w-max
	      animate-pill-ticker
	    "
	  >	
	  <Link
	    href="/deals"
	    className="bg-white/20 px-4 py-2 rounded-full text-white text-xs font-medium hover:bg-white/30 transition flex-shrink-0"
	  >
	    🔥 Trending Today
	  </Link>
	
	  <Link
	    href="/deals?type=hot"
	    className="bg-white/20 px-4 py-2 rounded-full text-white text-xs font-medium hover:bg-white/30 transition flex-shrink-0"
	  >
	    ⚡ Flash Deals
	  </Link>
	
	  <Link
	    href="/deals?type=exclusive"
	    className="bg-white/20 px-4 py-2 rounded-full text-white text-xs font-medium hover:bg-white/30 transition flex-shrink-0"
	  >
	    💎 Exclusive Offers
	  </Link>
	
	  <Link
	    href="/deals?type=savings"
	    className="bg-white/20 px-4 py-2 rounded-full text-white text-xs font-medium hover:bg-white/30 transition flex-shrink-0"
	  >
	    🏆 Top Savings
	  </Link>
	
	  <Link
	    href="/deals?type=latest"
	    className="bg-white/20 px-4 py-2 rounded-full text-white text-xs font-medium hover:bg-white/30 transition flex-shrink-0"
	  >
	    🆕 New Today
	  </Link>
	
	  <Link
	    href="/deals"
	    className="bg-white/20 px-4 py-2 rounded-full text-white text-xs font-medium hover:bg-white/30 transition flex-shrink-0"
	  >
	    🔥 Trending Today
	  </Link>
	
	  <Link
	    href="/deals?type=hot"
	    className="bg-white/20 px-4 py-2 rounded-full text-white text-xs font-medium hover:bg-white/30 transition flex-shrink-0"
	  >
	    ⚡ Flash Deals
	  </Link>
	
	  <Link
	    href="/deals?type=exclusive"
	    className="bg-white/20 px-4 py-2 rounded-full text-white text-xs font-medium hover:bg-white/30 transition flex-shrink-0"
	  >
	    💎 Exclusive Offers
	  </Link>

	<Link
	  href="/deals?type=savings"
	  className="bg-white/20 px-4 py-2 rounded-full text-white text-xs font-medium hover:bg-white/30 transition flex-shrink-0"
	>
	  🏆 Top Savings
	</Link>
	
	<Link
	  href="/deals?type=latest"
	  className="bg-white/20 px-4 py-2 rounded-full text-white text-xs font-medium hover:bg-white/30 transition flex-shrink-0"
	>
	  🆕 New Today
	</Link>


	</div>
    </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm mb-3">
            🌎 GLOBAL DEALS MARKETPLACE
          </div>

          {/* Main Heading */}
	<h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
	  Save Money with
	  <span className="text-yellow-200">
	    {" "}Verified Deals Worldwide
	  </span>
	</h1>

          {/* Description */}
        <p className="text-base text-white/90 mb-5 max-w-3xl">
          Discover exclusive discounts, coupon codes and special
          offers from trusted merchants across multiple countries,
          categories and leading brands worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">

          <Link
            href="/deals"
            className="bg-white text-orange-600 px-5 py-2.5 rounded-xl font-bold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Browse Deals →
          </Link>

          <Link
            href="/categories"
            className="border border-white/70 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
          >
            Browse Categories
          </Link>

          <Link
            href="/merchants"
            className="border border-white/70 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
          >
            Explore Merchants
          </Link>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-white">
              <AnimatedCounter value={Number(stats?.offers || 0)} />
            </div>
            <div className="text-white/80 text-xs">
              Active Deals
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-white">
              <AnimatedCounter value={Number(stats?.merchants || 0)} />
            </div>
            <div className="text-white/80 text-xs">
              Merchants
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-white">
              <AnimatedCounter value={Number(stats?.categories || 0)} />
            </div>
            <div className="text-white/80 text-xs">
              Categories
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-white">
              <AnimatedCounter value={Number(stats?.countries || 0)} />
            </div>
            <div className="text-white/80 text-xs">
              Countries
            </div>
          </div>

        </div>

</div>

<div className="hidden lg:flex flex-col">

  <div className="text-white font-bold text-lg mb-3">
    🔥 Trending Right Now
  </div>

  <div className="overflow-hidden h-[340px] rounded-2xl">

    <div className="animate-trending-vertical flex flex-col gap-3">

	{[...deals, ...deals].map((deal, idx) => (

        <div
          key={`${deal.offer_id}-${idx}`}
          className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl p-3"
        >

          <div className="flex items-center gap-3">

            <img
              src={deal.image_url}
              alt={deal.title}
              className="w-12 h-12 object-contain bg-white rounded-lg p-1"
            />

            <div className="flex-1 min-w-0">

              <div className="text-white text-xs font-semibold truncate">
                {deal.title}
              </div>

              <div className="text-yellow-200 text-[11px]">
                {deal.merchant_name}
              </div>

              <div className="text-white font-bold mt-1">
                {deal.price} {deal.currency}
              </div>

            </div>

            <a
              href={deal.tracking_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-yellow-100"
            >
              Grab Deal →
            </a>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}
