import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";
import { getOffer } from "../../../lib/api";

type PageProps = {
  params: Promise<{
    offerId: string;
  }>;
};

export default async function OfferPage({
  params,
}: PageProps) {
  const { offerId } = await params;

  const result = await getOffer(offerId);
  const offer = result.data;

  if (!offer) {
    return (
      <>
        <Header />
        <main className="max-w-4xl mx-auto p-8">
          Offer not found
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto p-8">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="relative h-[500px]">
            <Image
              src={offer.image_url}
              alt={offer.title}
              fill
              className="object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">
              {offer.title}
            </h1>

	<p className="text-gray-600 mb-2">
	  Merchant:{" "}
	  <Link
	    href={`/merchant/${offer.merchant_id}`}
	    className="text-blue-600 hover:underline"
	  >
	    {offer.merchant_name}
	  </Link>
	</p>

	<p className="text-gray-600 mb-4">
	  Category:{" "}
	  <Link
	    href={`/category/${offer.category_id}`}
	    className="text-blue-600 hover:underline"
	  >
	    {offer.category_name}
	  </Link>
	</p>

            <p className="text-4xl font-bold mb-6">
              {offer.price} {offer.currency}
            </p>

            <a
              href={offer.tracking_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded"
            >
              View Deal
            </a>
          </div>

        </div>
      </main>
    </>
  );
}
