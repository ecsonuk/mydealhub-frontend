import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-1">

            <div className="max-w-7xl mx-auto px-6 py-10">
      
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Hub4Deals
            </h2>

            <p className="text-sm text-gray-400">
		  Discover thousands of verified deals from trusted merchants
		  across multiple countries and categories worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">
              Explore
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/categories" className="hover:text-white">
                  Categories
                </Link>
              </li>

              <li>
                <Link href="/merchants" className="hover:text-white">
                  Merchants
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">
              Legal
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>

		<li>
		  <Link
		    href="/contact"
		    className="hover:text-white"
		  >
		    Contact Us
		  </Link>
		</li>

            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">
              Marketplace
            </h3>

		<ul className="space-y-2 text-sm">
		  <li>Verified Deals</li>
		  <li>Trusted Merchants</li>
		  <li>Global Categories</li>
		  <li>Worldwide Coverage</li>

		  <li className="pt-2">
		    <a
		      href="mailto:marketing@hub4deals.com"
		      className="text-indigo-300 hover:text-white transition-colors"
		    >
		      📧 marketing@hub4deals.com
		    </a>
		  </li>
		</ul>


          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © 2026 Hub4Deals.com. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
