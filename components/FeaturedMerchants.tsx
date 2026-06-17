import Link from "next/link";

type Merchant = {
  merchant_id: string;
  merchant_name: string;
  logo_url?: string;
};

type Props = {
  merchants: Merchant[];
};

export default function FeaturedMerchants({
  merchants,
}: Props) {
  return (

	<section
	  className="
	    mb-12
	    rounded-3xl
	    p-8
	    bg-gradient-to-r
	    from-cyan-700
	    via-blue-700
	    to-indigo-800
	    shadow-2xl
	  "
	>	


	<div
	  className="
	    flex
	    items-center
	    justify-between
	    mb-6
	    rounded-3xl
	    p-5
	    bg-white/10
	    backdrop-blur-xl
	    border
	    border-white/20
	    shadow-xl
	  "
	>

        <div>
	<h2 className="text-2xl md:text-3xl font-extrabold text-white">
	  Featured Merchants
	</h2>
	
	<p className="text-white/80 mt-1">
	  Discover trusted brands and retailers with exclusive offers
	</p>
        </div>

        <Link
          href="/merchants"
	className="
	  px-4
	  py-1.5
	  rounded-full
	  bg-white/15
	  border
	  border-white/20
	  text-white
	  font-semibold
	  hover:bg-white/25
	  transition
	"
        >
          View All →
        </Link>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

        {merchants.slice(0, 12).map((merchant) => (
          <Link
            key={merchant.merchant_id}
            href={`/merchant/${merchant.merchant_id}`}
		className="
		  group
		  rounded-3xl
		  p-3
		  text-center
		  bg-white/95
		  backdrop-blur-xl
		  border
		  border-white/30
		  shadow-xl
		  hover:shadow-2xl
		  hover:scale-105
		  hover:-translate-y-2
		  transition-all
		  duration-300
		"

          >
            <div className="relative h-20 mb-2">
              {merchant.logo_url ? (
		<img
		  src={merchant.logo_url}
		  alt={merchant.merchant_name}
		  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
		  loading="lazy"
		/>
              ) : (
                <div className="flex items-center justify-center h-full text-sm text-slate-400">
                  No Logo
                </div>
              )}
            </div>

		<div
		  className="
		    text-[11px]
		    text-slate-600
		    font-medium
		    truncate
		    mt-1
		  "
		>

              {merchant.merchant_name}
            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}
