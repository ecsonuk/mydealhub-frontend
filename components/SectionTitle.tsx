type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({
  title,
}: SectionTitleProps) {

  const descriptions: Record<string, string> = {
    "🔥 Hot Deals":
      "Trending deals and popular offers from top merchants.",
    "💰 Best Discounts":
      "Highest discounts and biggest markdowns available today.",
    "🆕 Latest Deals":
      "Fresh offers recently added to Hub4Deals.",
    "🏆 Top Savings":
      "Maximum savings opportunities across all categories.",
  };

  return (
	<div className="mt-8 mb-5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 text-white shadow-lg">

	<h2 className="text-3xl font-bold mb-1">
        {title}
      </h2>

	<p className="text-white/80 text-sm">
        {descriptions[title] || "Discover great deals and offers."}
      </p>

    </div>
  );
}
