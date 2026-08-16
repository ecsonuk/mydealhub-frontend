export default function HowItWorks() {
  return (
    <section className="mb-10">
      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-3xl font-bold mb-6">
          How Hub4Deals Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div>
            <h3 className="font-semibold mb-2">
              1. Discover Deals
            </h3>

            <p className="text-sm text-slate-600">
              We collect offers from trusted merchants and affiliate partners.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              2. Compare Offers
            </h3>

            <p className="text-sm text-slate-600">
              Browse discounts across multiple countries and categories.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              3. Visit Merchant
            </h3>

            <p className="text-sm text-slate-600">
              Clicking a deal redirects you to the merchant website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              4. Save Money
            </h3>

            <p className="text-sm text-slate-600">
              Shop directly with retailers and enjoy available discounts.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
