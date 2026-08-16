export default function FAQSection() {
  const faqs = [
    {
      question: "How does Hub4Deals find deals?",
      answer:
        "Hub4Deals aggregates deals, coupons, discounts and promotional offers from trusted merchants, retailers and affiliate partners across multiple countries and categories.",
    },
    {
      question: "Are Hub4Deals offers verified?",
      answer:
        "We continuously review and update offers from our partners. However, pricing, availability and promotions may change without notice on merchant websites.",
    },
    {
      question: "How often are deals updated?",
      answer:
        "New deals, coupons and discounts are added daily from merchants across fashion, electronics, home, travel, beauty and more.",
    },
    {
      question: "Does Hub4Deals charge users?",
      answer:
        "No. Hub4Deals is completely free for users searching for deals, coupons and discounts.",
    },
  ];

  return (
    <section className="mb-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600">
            Everything you need to know about deals, coupons and savings on
            Hub4Deals.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 pb-4"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {faq.question}
              </h3>

              <p className="text-slate-600 leading-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
