import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Website Operator
            </h2>

            <p>Hub4Deals</p>
            <p>Operated by AdMediaOne Digital LLP</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Registered Address
            </h2>

            <p>
              [567/5,Gali No. 4, Patel Nagar, GURUGRAM, HARYANA, 122001]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Contact Information
            </h2>

            <p>Email: marketing@hub4deals.com</p>
            <p>Website: https://hub4deals.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Registration Information
            </h2>

            <p>
              LLP Registration Number:
              [ACX-6764]
            </p>

            <p>
              GST/VAT Number:
              [06ACOFA1339C1ZQ]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Responsible for Content
            </h2>

            <p>AdMediaOne Digital LLP</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Disclaimer
            </h2>

            <p>
              Hub4Deals provides promotional offers, discounts,
              coupons and affiliate deals from third-party merchants.
              Availability, pricing and terms are controlled by the
              respective merchants and may change without notice.
            </p>
          </div>

          <div className="pt-6 border-t">
            <Link
              href="/"
              className="text-blue-600 hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
