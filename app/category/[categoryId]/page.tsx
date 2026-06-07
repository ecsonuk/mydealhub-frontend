import Link from "next/link";
import Header from "@/components/Header";
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

      <div className="container mx-auto px-4 py-8">

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">

          <h1 className="text-3xl font-bold mb-3">
            {category.category_name}
          </h1>

          <p className="text-gray-600">
            {category.full_path}
          </p>

        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Available Offers
          </h2>

          <span className="text-sm text-gray-500">
            Page {page} of {totalPages}
          </span>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

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

        <div className="flex justify-center gap-4 mt-10">

          {page > 1 && (
            <Link
              href={`/category/${categoryId}?page=${page - 1}`}
              className="border px-4 py-2 rounded"
            >
              Previous
            </Link>
          )}

          {page < totalPages && (
            <Link
              href={`/category/${categoryId}?page=${page + 1}`}
              className="border px-4 py-2 rounded"
            >
              Next
            </Link>
          )}

        </div>

      </div>
    </>
  );
}
