import Image from "next/image";
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
    <section className="mb-12 rounded-3xl p-8">

      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Featured Merchants
          </h2>

          <p className="text-slate-500 mt-1">
            Shop from trusted brands and retailers
          </p>
        </div>

        <Link
          href="/merchants"
          className="text-blue-600 font-medium hover:text-blue-700 transition"
        >
          View All →
        </Link>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

        {merchants.slice(0, 12).map((merchant) => (
          <Link
            key={merchant.merchant_id}
            href={`/merchant/${merchant.merchant_id}`}
            className="bg-white rounded-2xl p-5 text-center shadow-md border border-slate-100 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-14 mb-4">
              {merchant.logo_url ? (
                <Image
                  src={merchant.logo_url}
                  alt={merchant.merchant_name}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-sm text-slate-400">
                  No Logo
                </div>
              )}
            </div>

            <div className="text-sm text-slate-800 font-semibold line-clamp-2">
              {merchant.merchant_name}
            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}
