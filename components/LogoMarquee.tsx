import Image from "next/image";

type Merchant = {
  merchant_id: string;
  merchant_name: string;
  logo_url?: string;
};

export default function LogoMarquee({
  merchants,
}: {
  merchants: Merchant[];
}) {
  return (
    <section className="mb-12">

	<div className="bg-gradient-to-r from-orange-500 via-orange-600 to-pink-600 rounded-3xl p-6 mb-8 shadow-lg">

        <h2 className="text-3xl font-bold text-white">
          Trusted Global Brands
        </h2>

        <p className="text-orange-50 mt-1">
          Discover offers from leading merchants worldwide
        </p>

      </div>

      <div className="overflow-hidden">

        <div className="flex gap-8 animate-marquee whitespace-nowrap">

          {[...merchants, ...merchants]
            .slice(0, 20)
            .map((merchant, idx) => (

            <div
              key={`${merchant.merchant_id}-${idx}`}
              className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 min-w-[180px] text-center hover:shadow-xl transition-all"
            >

              <div className="relative h-16 mb-3">

                {merchant.logo_url ? (

                  <Image
                    src={merchant.logo_url}
                    alt={merchant.merchant_name}
                    fill
                    className="object-contain"
                  />

                ) : (

                  <div className="flex items-center justify-center h-full text-slate-400">
                    No Logo
                  </div>

                )}

              </div>

              <div className="text-sm font-semibold text-slate-800 line-clamp-2">
                {merchant.merchant_name}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
