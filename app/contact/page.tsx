export const metadata = {
  title: "Contact Us | Hub4Deals",
  description:
    "Get in touch with the Hub4Deals team for enquiries, feedback or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">
        Contact Us
      </h1>

      <div className="bg-white border rounded-2xl p-8 shadow-sm">

        <p className="text-gray-700 mb-6">
          We'd love to hear from you. Whether you have questions,
          feedback, advertising enquiries, partnership opportunities
          or suggestions regarding deals listed on Hub4Deals, please
          feel free to contact us.
        </p>

        <div className="space-y-8">

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Contact Information
            </h2>

            <p className="text-gray-600">
              Email:
              {" "}
              <a
                href="mailto:sales@admediaone.com"
                className="text-blue-600 hover:underline"
              >
                sales@admediaone.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Business & Partnership Enquiries
            </h2>

            <p className="text-gray-600">
              For affiliate partnerships, advertising opportunities,
              merchant collaborations or other business-related
              enquiries, please contact us via the email address above.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Response Time
            </h2>

            <p className="text-gray-600">
              We aim to respond to all enquiries within 1–2 business
              days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              About Hub4Deals
            </h2>

            <p className="text-gray-600">
              Hub4Deals is a deal discovery platform that helps users
              find discounts, offers and promotions from trusted online
              merchants across multiple categories and countries.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}
