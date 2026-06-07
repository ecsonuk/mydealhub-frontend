"use client";

import { useState } from "react";
import Link from "next/link";

type Category = {
  category_id: string;
  category_name: string;
  level_no: number;
};

export default function CategorySearch({
  categories,
}: {
  categories: Category[];
}) {
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.category_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Showing {filteredCategories.length} categories
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCategories.map((category) => (
          <Link
            key={category.category_id}
            href={`/category/${category.category_id}`}
            className="border rounded-lg p-4 hover:shadow-md transition bg-white"
          >
            <h2 className="font-semibold">
              {category.category_name}
            </h2>

            <p className="text-xs text-gray-500 mt-2">
              Level {category.level_no}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
