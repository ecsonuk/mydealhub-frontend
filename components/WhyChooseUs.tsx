export default function WhyChooseUs() {
  return (
    <section className="mt-16 mb-16">

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border rounded-2xl p-10">

        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose MyDealHub?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-semibold mb-2">
              3000+ Deals
            </h3>
            <p className="text-sm text-gray-600">
              Thousands of active deals updated regularly.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl mb-3">🏪</div>
            <h3 className="font-semibold mb-2">
              500+ Merchants
            </h3>
            <p className="text-sm text-gray-600">
              Trusted stores from multiple countries.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl mb-3">📂</div>
            <h3 className="font-semibold mb-2">
              408 Categories
            </h3>
            <p className="text-sm text-gray-600">
              Easily discover deals by category.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="font-semibold mb-2">
              3 Countries
            </h3>
            <p className="text-sm text-gray-600">
              UK, Germany and France marketplace coverage.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
