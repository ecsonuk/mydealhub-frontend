import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero({
  stats,
}: {

stats?: {
  offers: string;
  merchants: string;
  categories: string;
  countries: string;
};

}) {

  return (
    <section className="mb-10">

	<div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-10 py-7 shadow-xl">
	
        {/* Decorative Effects */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-300/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl">

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


<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 max-w-3xl">

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

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">

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

        </div>

      </div>

    </section>
  );
}
