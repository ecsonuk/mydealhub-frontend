import Link from "next/link";

type Category = {
  category_id: string;
  category_name: string;
  offer_count: string;
};

type Props = {
  categories: Category[];
};

const getIcon = (name: string) => {
  const lower = name.toLowerCase();

  if (lower.includes("clothing")) return "👕";
  if (lower.includes("fashion")) return "👗";
  if (lower.includes("shoe")) return "👟";
  if (lower.includes("sport")) return "⚽";
  if (lower.includes("electronic")) return "💻";
  if (lower.includes("computer")) return "🖥️";
  if (lower.includes("phone")) return "📱";
  if (lower.includes("beauty")) return "💄";
  if (lower.includes("health")) return "❤️";
  if (lower.includes("home")) return "🏠";
  if (lower.includes("garden")) return "🌿";
  if (lower.includes("travel")) return "✈️";
  if (lower.includes("face")) return "🧴";
  if (lower.includes("beauty")) return "💄";
  if (lower.includes("make")) return "💄";
  if (lower.includes("skin")) return "🧴";
  if (lower.includes("care")) return "💆";
  if (lower.includes("car ")) return "🚗";
  if (lower.includes("car parts")) return "🚗";
  if (lower.includes("automotive")) return "🚗";
  if (lower.includes("toy")) return "🧸";
  if (lower.includes("book")) return "📚";

  return "🏷️";
};

export default function CategoryGrid({
  categories,
}: Props) {
  return (
    <section className="mb-12 rounded-3xl p-8">

	<div className="flex items-center justify-between mb-8 bg-gradient-to-r from-orange-500 via-orange-600 to-pink-600 rounded-3xl p-6 shadow-lg">

        <div>
          <h2 className="text-3xl font-bold text-white">
            Popular Categories
          </h2>

          <p className="text-orange-50 mt-1">
            Browse the most popular deal categories
          </p>
        </div>

        <Link
          href="/categories"
          className="text-white font-medium hover:text-orange-100 transition"
        >
          View All →
        </Link>

      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

        {categories.slice(0, 12).map((category) => (
          <Link
            key={category.category_id}
            href={`/category/${category.category_id}`}
            className="bg-gradient-to-b from-white to-slate-50 rounded-3xl p-5 text-center shadow-md border border-slate-100 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 group"
          >

            <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">
              {getIcon(category.category_name)}
            </div>

            <div className="font-semibold text-slate-800 text-sm line-clamp-2 min-h-[40px]">
              {category.category_name}
            </div>

            <div className="inline-block mt-3 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
              {category.offer_count} offers
            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}
