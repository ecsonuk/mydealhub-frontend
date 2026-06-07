import Link from "next/link";

export default function Hero() {
  return (
    <section className="mb-10">

	<div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-10 py-7 shadow-xl">
	
        {/* Decorative Effects */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-300/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm mb-3">
            🔥 HOT DEALS UPDATED DAILY
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
		Save Money on
		<span className="text-yellow-200">
		  {" "}3000+ Verified Deals
		</span>
          </h1>

          {/* Description */}
          <p className="text-base text-white/90 mb-5 max-w-3xl">
            Discover exclusive discounts, coupon codes and special
            offers from 500+ trusted merchants across the United
            Kingdom, Germany and France.
          </p>

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
