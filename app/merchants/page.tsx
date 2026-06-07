import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import { getMerchants } from "../../lib/api";

type PageProps = {
  searchParams: Promise<{
    page?: string;
    q?: string;
    country?: string;
  }>;
};

export default async function MerchantsPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  const page = Number(params.page || 1);
  const q = params.q || "";
	const country =
	  params.country === "ALL"
	    ? ""	
	    : params.country || "";
  const limit = 20;

  const data = await getMerchants(
    page,
    limit,
    q,
    country,
  );

  const totalPages = Math.ceil(
    data.total / data.limit,
  );

  return (
    <>
      <Header />

      <main className="max-w-screen-2xl mx-auto p-8">

	<div className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-xl">

	  <h1 className="text-5xl font-extrabold mb-3">
	    🏪 Trusted Merchants
	  </h1>
	
	  <p className="text-lg text-blue-100">
	    Discover {data.total}+ merchants across UK, Germany and France.
	  </p>
	
	</div>

        <form
          action="/merchants"
          method="GET"
          className="mb-6"
        >

	  <input
	    type="hidden"
	    name="country"
	    value={country}
	  />

	<input
	  type="text"
	  name="q"
	  defaultValue={q}
	  placeholder="Search merchants..."
	  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm focus:ring-2 focus:ring-indigo-500"
	/>        

	</form>

        <p className="text-sm text-gray-500 mb-6">
          Showing page {data.page} of{" "}
          {totalPages} (
          {data.total} merchants)
        </p>

	<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {data.data.map((merchant: any) => (
            <Link
              key={merchant.merchant_id}
              href={`/merchant/${merchant.merchant_id}`}
		className="group bg-white rounded-2xl p-5 shadow-md border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {merchant.logo_url ? (
                <div className="relative h-24 mb-4">
                  <Image
                    src={merchant.logo_url}
                    alt={merchant.merchant_name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="h-16 mb-3 flex items-center justify-center text-gray-400">
                  No Logo
                </div>
              )}

		<h2 className="font-semibold text-center text-slate-800 line-clamp-2 min-h-[48px]">
                {merchant.merchant_name}
              </h2>

		<div className="mt-3 flex justify-center">
		  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium">
		    {merchant.currency}
		  </span>
		</div>

            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">

          {page > 1 && (
            <Link
              href={`/merchants?page=${page - 1}&q=${encodeURIComponent(q)}&country=${country}`}
              className="border px-4 py-2 rounded"
            >
              Previous
            </Link>
          )}

          {page < totalPages && (
            <Link
             href={`/merchants?page=${page + 1}&q=${encodeURIComponent(q)}&country=${country}`}
             className="border px-4 py-2 rounded"
            >
              Next
            </Link>
          )}

        </div>
      </main>
    </>
  );
}
