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

	<section
	  className="
	    mb-12
	    rounded-3xl
	    p-8
	    bg-gradient-to-r
	    from-violet-700
	    via-fuchsia-700
	    to-pink-700
	    shadow-2xl
	  "
	>

	<div
	  className="
	    flex
	    items-center
	    justify-between
	    mb-6
	    rounded-3xl
	    p-5
	    bg-white/10
	    backdrop-blur-xl
	    border
	    border-white/20
	    shadow-xl
	  "
	>
	<div>
	<h2 className="text-2xl md:text-3xl font-extrabold text-white">
	  Explore Categories
	</h2>

	<p className="text-white/80 mt-1">
	  Discover the most popular shopping categories and trending deals
	</p>

        </div>

        <Link
          href="/categories"
	className="
	  px-4
	  py-1.5
	  rounded-full
	  bg-white/15
	  border
	  border-white/20
	  text-white
	  font-semibold
	  hover:bg-white/25
	  transition
	"
        >
          View All →
        </Link>

      </div>

	<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">

        {categories.slice(0, 12).map((category) => (
          <Link
            key={category.category_id}
            href={`/category/${category.category_id}`}

		className="
		  rounded-3xl
		  p-3
		  text-center
		  backdrop-blur-xl
		  bg-white/95
		  border
		  border-white/30
		  shadow-xl
		  hover:shadow-2xl
		  hover:scale-105
		  hover:-translate-y-2
		  transition-all
		  duration-300
		  group
		"
	          >


		<div
		  className="
		    text-5xl
		    mb-4
		    transition-all
		    duration-300
		    group-hover:scale-125
		    group-hover:-translate-y-1
		  "
		>

              {getIcon(category.category_name)}
            </div>

            <div className="font-semibold text-slate-800 text-sm line-clamp-2 min-h-[25px]">
              {category.category_name}
            </div>

		<div
		  className="
		    inline-flex
		    items-center
		    mt-4
		    px-4
		    py-1.5
		    rounded-full
		    bg-gradient-to-r
		    from-violet-100
		    via-pink-100
		    to-orange-100
		    text-slate-700
		    text-xs
		    font-semibold
		    shadow-sm
		  "
		>
		  🔥 {category.offer_count} Deals
		</div>

          </Link>
        ))}

      </div>

    </section>
  );
}
