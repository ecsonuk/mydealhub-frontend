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

	<div
	  className="
	    bg-gradient-to-r
	    from-slate-900
	    via-blue-950
	    to-slate-900
	    rounded-3xl
	    p-6
	    text-white
	    shadow-2xl
	  "
	>

	<h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3">
	  Why Shoppers Trust Hub4Deals
	</h2>

	<p className="text-center text-white/70 text-sm mb-5 max-w-3xl mx-auto">
	  We focus on quality over quantity — verified deals, trusted merchants, and real savings.
	</p>

	<div className="grid md:grid-cols-3 gap-8">

	<div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 max-w-sm mx-auto w-full text-center border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-xl">
	  <div className="text-4xl mb-3">
	    ✅
	  </div>

	  <h3 className="text-lg font-bold mb-2">
	    Verified Deals
	  </h3>

	  <p className="text-white/70 text-sm">
	    Every deal is reviewed before publication to help shoppers avoid expired, misleading, or low-quality offers.
	  </p>
	</div>

	<div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 max-w-sm mx-auto w-full text-center border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-xl">
	  <div className="text-4xl mb-3">
	    🏬
	  </div>

	  <h3 className="text-lg font-bold mb-2">
	    Trusted Retailers
	  </h3>

	  <p className="text-white/70 text-sm">
	    Shop with confidence from recognized brands and reputable online stores across multiple countries.
	  </p>
	</div>

	<div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 max-w-sm mx-auto w-full text-center border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-xl">
	  <div className="text-4xl mb-3">
	    ⚡
	  </div>

	  <h3 className="text-lg font-bold mb-2">
	    Save Time & Money
	  </h3>

	  <p className="text-white/70 text-sm">
	    No more searching dozens of websites. Discover the best discounts, coupons, and offers in one place.
	  </p>
	</div>


        </div>

      </div>

    </section>
  );
}
