import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import { getMerchant } from "@/lib/api";
import OfferCard from "@/components/OfferCard";

type PageProps = {
  params: Promise<{
    merchantId: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    merchantId: string;
  }>;
}): Promise<Metadata> {

  const { merchantId } = await params;

  const data = await getMerchant(
    merchantId,
    1,
    1,
  );

  if (!data.success) {
    return {
      title: "Merchant Not Found | Hub4Deals",
    };
  }

  const merchant = data.merchant;

  return {
    title: `${merchant.merchant_name} Deals, Coupons & Discounts | Hub4Deals`,

    description:
      merchant.summary?.slice(0, 155) ||
      `Browse latest deals and offers from ${merchant.merchant_name}.`,
  };
}


    export default async function MerchantPage({
      params,
      searchParams,
    }: PageProps) {

  const { merchantId } = await params;
  const query = await searchParams;

  const page = Number(query.page || 1);
  const limit = 20;

  const data = await getMerchant(
    merchantId,
    page,
    limit,
  );

  const totalPages = Math.ceil(
    data.total / data.limit,
  );


  if (!data.success) {
    return (
      <div className="container mx-auto px-4 py-8">
        Merchant not found
      </div>
    );
  }

  const merchant = data.merchant;

  return (
  <>
    <Header />

    <div className="container mx-auto px-4 py-8">
	<div
	  className="
	    mb-8
	    rounded-3xl
	    bg-gradient-to-r
	    from-cyan-700
	    via-blue-700
	    to-indigo-800
	    p-8
	    shadow-2xl
	    text-white
	  "
	>
	  <div className="flex flex-col md:flex-row items-center gap-8">
          {merchant.logo_url && (
	<div
	  className="
	    bg-white
	    rounded-3xl
	    p-6
	    shadow-xl
	  "	
	>
	  <Image
	    src={merchant.logo_url}
	    alt={merchant.merchant_name}
	    width={160}
	    height={160}
	  />
	</div>
          )}

          <div>
		<h1 className="text-4xl md:text-5xl font-extrabold">
              {merchant.merchant_name}
            </h1>

		<p className="mt-4 text-white/90 max-w-3xl">
		{merchant.summary}
		</p>

		<div className="flex flex-wrap gap-2 mt-3 w-full">

		  <span
		    className="
		      px-4 py-2
		      rounded-full
		      bg-white/15
		      border border-white/20
		      text-sm
		      font-medium
		    "
		  >
		    🏬 Trusted Merchant
		  </span>

		<span
		  className="
		    px-4 py-2
		    rounded-full
		    bg-white/15
		    border border-white/20
		    text-sm
		    font-medium
		  "
		>
		  🔥 {data.total} Active Deals
		</span>

		<span
		  className="
		    px-4 py-2
		    rounded-full
		    bg-emerald-500/20
		    border border-emerald-300/20
		    text-sm
		    font-medium
		  "
		>
		  💳 {merchant.currency}
		</span>

		{merchant.merchant_tier && (
		  <span
		    className="
		      px-4 py-2
		      rounded-full
		      bg-amber-500/20
		      border border-amber-300/30
		      text-sm
		      font-medium
		    "
		  >
		    ⭐ {merchant.merchant_tier}
		  </span>
		)}
		
		{merchant.delivery_countries?.length > 0 && (
		  <span
		    className="
		      px-4 py-2
		      rounded-full
		      bg-cyan-500/20
		      border border-cyan-300/20
		      text-sm
		      font-medium
		    "
		  >
		    🌍 Available in {merchant.delivery_countries.length}
		    {merchant.delivery_countries.length === 1
		      ? " Country"
		      : " Countries"}
		  </span>
		)}

		</div>
	
          </div>
        </div>
      </div>

	<div className="mb-6">

	  <h2 className="text-3xl font-bold">
	    🔥 {data.total} Latest Deals from {merchant.merchant_name}
	  </h2>

	  <p className="text-slate-500 mt-2">
	    Browse the newest discounts, coupons and offers available today.
	  </p>

	</div>

	<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.offers.map((offer: any) => (
          <OfferCard
            key={offer.offer_id}
            offerId={offer.offer_id}
            merchantId={merchant.merchant_id}
	    countryCode={offer.country_code}
            title={offer.title}
            merchantName={merchant.merchant_name}
            imageUrl={offer.image_url}
            price={offer.price}
            currency={offer.currency}
            trackingUrl={offer.tracking_url}
          />
        ))}

</div>

	<Pagination
	  page={page}
	  totalPages={totalPages}
	  baseUrl={`/merchant/${merchantId}`}
	/>

    </div>
  </>

  );
}
