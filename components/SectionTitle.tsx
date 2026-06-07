type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({
  title,
}: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold mt-12 mb-6">
      {title}
    </h2>
  );
}
