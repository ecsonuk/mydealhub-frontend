type OfferCardProps = {
  title: string;
  merchantName: string;
  price: string;
  currency: string;
};

export default function OfferCard({
  title,
  merchantName,
  price,
  currency,
}: OfferCardProps) {
  return (
    <div className="border rounded p-4 mb-4">
      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <p>
        Merchant: {merchantName}
      </p>

      <p>
        Price: {price} {currency}
      </p>
    </div>
  );
}
