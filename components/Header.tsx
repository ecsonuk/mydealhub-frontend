export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          MyDealHub
        </h1>

        <input
          type="text"
          placeholder="Search offers..."
          className="border rounded-lg px-4 py-2 w-80"
        />
      </div>
    </header>
  );
}
