import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getCategories } from "../../lib/api";
import Image from "next/image";

type PageProps = {
  searchParams: Promise<{
    page?: string;
    q?: string;
    group?: string;
    country?: string;
  }>;
};

const categoryIcons: Record<string, string> = {
  Electronics: "💻",
  Computing: "🖥️",
  Fashion: "👕",
  "Health & Beauty": "💄",
  "Home Appliances": "🏠",
  "Food & Drink": "🍔",
  Travel: "✈️",
  "Sport & Leisure": "⚽",
  "Cars & Other Vehicles": "🚗",
  "Hobby, Toys & Games": "🧸",
  "Internet & Telecom": "📱",
  "House & Home": "🛋️",
  "Baby & Kids": "👶",
};

export default async function CategoriesPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  const page = Number(params.page || 1);
  const q = params.q || "";
  const group = params.group || "";
  const country = params.country || "";
  const limit = 20;

  const data = await getCategories(
    page,
    limit,
    q,
    group,
    country,
  );

  const totalPages = Math.ceil(
    data.total / data.limit,
  );

  return (
    <>
      <Header />

      <main className="max-w-screen-2xl mx-auto p-8">

	<h1 className="text-4xl font-bold mb-2">
	  {group ? `${group} Categories` : "Categories"}
	</h1>

	<p className="text-gray-600 mb-8">
	  {group
	    ? `Browse categories under ${group}.`
	    : "Browse all available deal categories."}
	</p>

        <form
          action="/categories"
          method="GET"
          className="mb-6"
        >
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Search categories..."
            className="w-full border rounded-lg px-4 py-3"
          />
        </form>

        <p className="text-sm text-gray-500 mb-6">
          Showing page {data.page} of {totalPages}
          {" "}({data.total} categories)
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">

          {data.data.map((category: any) => (
            <Link
              key={category.category_id}
              href={`/category/${category.category_id}`}
		className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transition-all duration-300"
            >

	<div className="text-4xl mb-4">
	  {
	    categoryIcons[
	      category.full_path.split(" > ")[0]
	    ] || "📂"
	  }
	</div>

              <h2 className="font-semibold">
                {category.category_name}
              </h2>

		<div className="mt-3 inline-flex items-center rounded-full bg-blue-50 px-3 py-1">
		  <span className="text-xs font-medium text-blue-600">
		    {category.offer_count} offers
		  </span>
		</div>	

            </Link>
          ))}

        </div>

        <div className="flex justify-center gap-4 mt-10">

          {page > 1 && (
            <Link
		href={`/categories?page=${page - 1}&q=${encodeURIComponent(q)}&group=${encodeURIComponent(group)}&country=${country}`}
              className="border px-4 py-2 rounded"
            >
              Previous
            </Link>
          )}

          {page < totalPages && (
            <Link
		href={`/categories?page=${page + 1}&q=${encodeURIComponent(q)}&group=${encodeURIComponent(group)}&country=${country}`}
              className="border px-4 py-2 rounded"
            >
              Next
            </Link>
          )}

        </div>

      </main>

      <Footer />
    </>
  );
}
