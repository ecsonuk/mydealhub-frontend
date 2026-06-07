export const metadata = {
  title: "About Us | MyDealHub",
  description:
    "Learn more about MyDealHub and our mission to help shoppers discover the best online deals.",
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">
        About MyDealHub
      </h1>

      <div className="space-y-6 text-gray-700 leading-8">

        <p>
          MyDealHub is a deal discovery platform designed to help shoppers
          find the best online offers from trusted merchants across multiple
          countries.
        </p>

        <p>
          Our mission is simple: make it easier for consumers to discover
          valuable discounts, special promotions and exclusive deals in one
          convenient place.
        </p>

        <p>
          We aggregate thousands of offers across a wide range of categories,
          including fashion, electronics, home & garden, sports, automotive,
          beauty and more.
        </p>

        <p>
          Through partnerships with leading affiliate networks and merchants,
          MyDealHub continuously updates deal listings to provide visitors
          with fresh and relevant offers.
        </p>

        <p>
          Whether you're searching for everyday savings or special promotions,
          MyDealHub helps you compare opportunities and discover deals that
          match your interests.
        </p>

      </div>

    </main>
  );
}
