import Link from "next/link";
import Header from "../../components/Header";
import Pagination from "@/components/Pagination";
import Footer from "../../components/Footer";
import { getCategories } from "../../lib/api";

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

	<section className="mb-6 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white shadow-xl">

	<h1 className="text-5xl font-extrabold mb-3">
	    📂 {group ? `${group} Categories` : "Browse Categories"}
	  </h1>

	<p className="text-lg text-white/90 max-w-4xl">
	    {group
	      ? `Explore deals and offers available under ${group}.`
	      : "Explore thousands of deals organized by category from leading brands and retailers."}
	  </p>

	<div className="mt-4 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
	    {data.total} Categories Available

	  </div>
	</section>

        <form
          action="/categories"
          method="GET"
          className="mb-6 relative"
        >
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Search categories..."
    	className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

	<button
	  type="submit"
	  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
	>
	  Search
	</button>
        </form>

	<p className="text-sm text-slate-500 mb-6">
	  Showing <span className="font-semibold">{data.data.length}</span> categories on page{" "}
	  <span className="font-semibold">{data.page}</span> of{" "}
	  <span className="font-semibold">{totalPages}</span>
	</p>

	{data.data.length === 0 ? (
	  <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
	    <div className="text-5xl mb-4">📂</div>
	    <h2 className="text-xl font-bold mb-2">
	      No Categories Found
	    </h2>
	    <p className="text-slate-500">
	      Try adjusting your search criteria.
	    </p>
	  </div>
	) : (

	<div className="bg-white/40 rounded-3xl p-4">
	<div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-4">	
	    {data.data.map((category: any) => (

            <Link
              key={category.category_id}
              href={`/category/${category.category_id}`}
		className="group bg-white border border-slate-200 rounded-2xl p-5 min-h-[190px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-400 transition-all duration-300"
            >

	<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-100 to-purple-100 text-4xl transition-transform duration-300 group-hover:scale-110">
	  {
	    categoryIcons[
	      category.full_path.split(" > ")[0]
	    ] || "📂"
	  }

	</div>

	<h2 className="text-lg font-bold text-slate-800 leading-snug mb-2 group-hover:text-indigo-600 transition-colors">
	  {category.category_name}
	</h2>

	<p className="text-xs text-slate-500 line-clamp-2 min-h-[32px] mb-3">
	  {category.full_path}
	</p>

	<div className="flex-grow"></div>

	<div className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-1.5 shadow-md">
	  <span className="text-xs font-semibold text-white">
	    🔥 {category.offer_count} Active Offers
	  </span>
	</div>

	<div className="mt-5 pt-4 border-t border-slate-100">
	  <div className="text-sm font-semibold text-indigo-600 group-hover:text-indigo-800">
	    Browse Deals →
	  </div>
	</div>

            </Link>
          ))}
	  </div>
	</div>
	)}

	<Pagination
	  page={page}
	  totalPages={totalPages}
	  baseUrl="/categories"
	  queryString={`q=${encodeURIComponent(q)}&group=${encodeURIComponent(group)}&country=${country}`}
	/>	
	
      </main>

      <Footer />
    </>
  );
}
