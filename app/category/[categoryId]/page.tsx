import { Metadata } from "next";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import { getCategory } from "@/lib/api";
import OfferCard from "@/components/OfferCard";

type PageProps = {
  params: Promise<{
    categoryId: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    categoryId: string;
  }>;
}): Promise<Metadata> {

  const { categoryId } = await params;

  const data = await getCategory(
    categoryId,
    1,
    1,
  );

  if (!data.success) {
    return {
      title: "Category Not Found | Hub4Deals",
    };
  }

  const category = data.category;

  const description =
    `Browse ${category.category_name} deals, discounts and offers from trusted merchants on Hub4Deals.`;

  const canonical =
    `https://www.hub4deals.com/category/${categoryId}`;

  return {
    title:
      `${category.category_name} Deals & Discounts | Hub4Deals`,

    description,

    alternates: {
      canonical,
    },

    openGraph: {
      title:
        `${category.category_name} Deals & Discounts`,
      description,
      url: canonical,
      siteName: "Hub4Deals",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title:
        `${category.category_name} Deals & Discounts`,
      description,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: PageProps) {
  const { categoryId } = await params;
  const query = await searchParams;

  const page = Number(query.page || "1");
  const limit = 20;

  const data = await getCategory(
    categoryId,
    page,
    limit
  );

  if (!data.success) {
    return (
      <>
        <Header />

        <div className="container mx-auto px-4 py-8">
          Category not found
        </div>
      </>
    );
  }

  const category = data.category;

  const totalPages = Math.ceil(
    data.total / data.limit
  );

  return (
    <>
      <Header />

	<main className="max-w-screen-2xl mx-auto p-8">

	<section className="mb-8 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 text-white">

	  <h1 className="text-3xl font-bold mb-2">
	    📂 {category.category_name}
	  </h1>

	  <p className="text-white/90 mb-4">
	    {category.full_path}
	  </p>

	  <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
	    🔥 {data.total} Offers Available
	  </div>

	</section>

	<div className="flex justify-between items-center mb-4">
	  <h2 className="text-xl font-bold text-slate-800">
	    🔥 Available Offers
	  </h2>

	  <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
	    Page {page} of {totalPages}
	  </span>
	</div>

	{data.offers.length === 0 ? (

	  <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
	    <div className="text-5xl mb-4">📦</div>

	    <h3 className="text-xl font-bold mb-2">
	      No Offers Available
	    </h3>

	    <p className="text-slate-500">
	      There are currently no offers in this category.
	    </p>
	  </div>

	) : (

	  <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

	    {data.offers.map((offer: any) => (
	      <OfferCard
	        key={offer.offer_id}
	        offerId={offer.offer_id}
	        categoryId={offer.category_id}
	        categoryName={offer.category_name}
	        countryCode={offer.country_code}
	        merchantId={offer.merchant_id}
	        title={offer.title}
	        merchantName={offer.merchant_name}
	        imageUrl={offer.image_url}
	        price={offer.price}
	        currency={offer.currency}
	        trackingUrl={offer.tracking_url}
	      />
	    ))}

	  </div>

	)}

	<Pagination
	  page={page}
	  totalPages={totalPages}
	  baseUrl={`/category/${categoryId}`}
	/>

        </main>

    </>
  );
}
