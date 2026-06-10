type Props = {
  stats: {
    offers: string;
    merchants: string;
    categories: string;
    countries: string;
  };
};

export default function WhyChooseUs({
  stats,
}: Props) {
  return (
    <section className="mb-12">

      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-8 text-white">

	<h2 className="text-5xl font-extrabold text-center mb-3 drop-shadow-lg">
          Why Millions Choose MyDealHub
        </h2>

        <p className="text-center text-orange-50 mb-10">
          Discover verified deals from trusted merchants worldwide
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

	<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
	<div className="text-4xl font-bold drop-shadow-lg">
	  🔥 {stats.offers}
	</div>
            <div className="text-orange-50 mt-2">
              Active Deals
            </div>
          </div>

	<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
	<div className="text-4xl font-bold drop-shadow-lg">
	  🏬 {stats.merchants}
	</div>
            <div className="text-orange-50 mt-2">
              Trusted Merchants
            </div>
          </div>

	<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
	<div className="text-4xl font-bold drop-shadow-lg">
	  📂 {stats.categories}
	</div>
            <div className="text-orange-50 mt-2">
              Categories
            </div>
          </div>

	<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
	<div className="text-4xl font-bold drop-shadow-lg">
	  🌎 {stats.countries}
	</div>
            <div className="text-orange-50 mt-2">
              Countries
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
