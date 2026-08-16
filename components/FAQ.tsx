export default function FAQ() {
  const faqs = [
    {
      question: "How does Hub4Deals work?",
      answer:
        "Hub4Deals aggregates deals, discounts and coupon offers from trusted merchants and affiliate partners across multiple countries and categories.",
    },
    {
      question: "Are the deals on Hub4Deals verified?",
      answer:
        "We continuously review and update offers from our partners. However, pricing and availability may change without notice on merchant websites.",
    },
    {
      question: "Do I purchase products directly from Hub4Deals?",
      answer:
        "No. Hub4Deals helps you discover offers. Purchases are completed directly on the retailer's website.",
    },
    {
      question: "How often are deals updated?",
      answer:
        "New deals and discounts are added daily from merchants across fashion, electronics, home, travel, beauty and more.",
    },
    {
      question: "Is Hub4Deals free to use?",
      answer:
        "Yes. Hub4Deals is completely free for users searching for deals, coupons and discounts.",
    },
  ];

  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      }}
    />
    <section className="max-w-7xl mx-auto mb-12">
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 pb-4"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {faq.question}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
}
