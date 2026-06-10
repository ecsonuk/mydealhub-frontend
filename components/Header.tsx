"use client";

import { useRouter, useSearchParams, usePathname,} from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const [countries, setCountries] = useState<
    {
      code: string;
      name: string;
      offerCount: number;
    }[]
  >([]);

  const [countryOpen, setCountryOpen] =
    useState(false);

  const [countrySearch, setCountrySearch] =
    useState("");

  const [selectedCountry, setSelectedCountry] =
    useState("ALL");

  const countryFlags: Record<string, string> = {
  US: "🇺🇸",
  UK: "🇬🇧",
  FR: "🇫🇷",
  ES: "🇪🇸",
  DE: "🇩🇪",
  NL: "🇳🇱",
  AU: "🇦🇺",
  IT: "🇮🇹",
  CA: "🇨🇦",
  DK: "🇩🇰",
  FI: "🇫🇮",
  };

  const handleSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && search.trim()) {
      router.push(
        `/search?q=${encodeURIComponent(search)}`
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim().length >= 3) {
        router.push(
          `/search?q=${encodeURIComponent(search)}`
        );
      }
    }, 700);

  return () => clearTimeout(timer);
}, [search]);


  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/countries`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.countries || []);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const country =
      searchParams.get("country");

    if (country) {
      setSelectedCountry(country);
    } else {
      setSelectedCountry("ALL");
    }
  }, [searchParams]);

  return (
	
<header className="sticky top-0 z-50 bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 backdrop-blur-md border-b border-pink-300 shadow-sm">

	<div className="w-full px-12 xl:px-16 py-4 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-10">

          {/* LOGO */}
          <Link href="/">
	<h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
	  MyDealHub
	</h1>

	<span className="text-[11px] font-medium mt-1">
	  by{" "}
	  <span className="text-slate-500">Ad</span>
	  <span className="text-blue-500">Media</span>
	  <span className="text-purple-500">One</span>
	</span>

          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">

            <Link
              href="/"
              className="hover:text-indigo-600 transition"
            >
              Home
            </Link>

            {/* Categories Dropdown */}
            <div className="group relative">

              <button className="flex items-center gap-1 hover:text-indigo-600 transition">
                Categories
                <ChevronDown size={16} />
              </button>

		<div
		  className="
		    absolute top-full left-0 mt-3
		    max-h-[500px]
		    w-[800px]
		    overflow-y-auto
		    bg-gradient-to-br
		    from-white
		    to-slate-50
		    border border-slate-200
		    rounded-2xl
		    shadow-2xl
		    opacity-0
		    invisible
		    group-hover:visible
		    group-hover:opacity-100
		    transition-all
		    duration-200
		    p-6
		  "
		>

		<Link
		  href="/categories"
		  className="block px-4 py-3 font-semibold text-indigo-600 hover:bg-slate-50"
		>
		</Link>
		
                <div className="mb-5">

                  <Link
                    href="/categories"
                    className="block px-4 py-3 hover:bg-slate-50"
                  >
                    All Categories
                  </Link>
		<div className="border-t" />
		<div className="grid grid-cols-3 gap-x-8 gap-y-1 text-sm">
		
		<Link
		  href="/categories?group=Electronics"
		  className="block px-4 py-3 hover:bg-slate-50"
		>
		  💻 Electronics
		</Link>
		
		<Link
		  href="/categories?group=Computing"
		  className="block px-4 py-3 hover:bg-slate-50"
		>
		  🖥️ Computing
		</Link>
		
		<Link
		  href="/categories?group=Home Appliances"
		  className="block px-4 py-3 hover:bg-slate-50"
		>
		  🏠 Home Appliances
		</Link>
		
		<Link
		  href="/categories?group=Health & Beauty"
		  className="block px-4 py-3 hover:bg-slate-50"
		>
		  💄 Health & Beauty
		</Link>
		
		<Link
		  href="/categories?group=Fashion"
		  className="block px-4 py-3 hover:bg-slate-50"
		>
		  👕 Fashion
		</Link>
		
		<Link
		  href="/categories?group=Sport & Leisure"
		  className="block px-4 py-3 hover:bg-slate-50"
		>
		  ⚽ Sport & Leisure
		</Link>
		
		<Link
		  href="/categories?group=Cars & Other Vehicles"
		  className="block px-4 py-3 hover:bg-slate-50"
		>
		  🚗 Cars & Vehicles
		</Link>
		
		<Link
		  href="/categories?group=Hobby, Toys & Games"
		  className="block px-4 py-3 hover:bg-slate-50"
		>
		  🧸 Toys & Games
		</Link>
		
		<Link
		  href="/categories?group=Food & Drink"
		  className="block px-4 py-3 hover:bg-slate-50"
		>
		  🍔 Food & Drink
		</Link>
		
		<Link
		  href="/categories?group=Travel"
		  className="block px-4 py-3 hover:bg-slate-50"
		>	
		  ✈️ Travel
		</Link>
		
		<Link
		  href="/categories?group=Work & Professional"
		  className="block px-4 py-3 hover:bg-slate-50"
		>
		  💼 Work & Professional
		</Link>
		</div>		
              </div>
           </div>
 	</div>
            {/* Deals DropDown*/}
		<div className="group relative">
		
		  <button className="flex items-center gap-1 hover:text-indigo-600 transition">
		    Deals
		    <ChevronDown size={16} />
		  </button>
		
		  <div
		    className="
		      absolute top-full left-0 mt-3
		      w-64
		      bg-white
		      border border-slate-200
		      rounded-xl
		      shadow-xl
		      opacity-0
		      invisible
		      group-hover:visible
		      group-hover:opacity-100
		      transition-all
		      duration-200
		      overflow-hidden
		    "
		  >
		
		    <Link
		      href="/deals"
		      className="block px-4 py-3 hover:bg-slate-50"
		    >
		      All Deals
		    </Link>
		
		    <div className="border-t" />
		
		    <Link
		      href="/deals?type=hot"
		      className="block px-4 py-3 hover:bg-slate-50"
		    >
		      🔥 Hot Deals
		    </Link>
		
		    <Link
		      href="/deals?type=latest"
		      className="block px-4 py-3 hover:bg-slate-50"
		    >
		      🆕 Latest Deals
		    </Link>
		
		    <Link
		      href="/deals?type=discount"
		      className="block px-4 py-3 hover:bg-slate-50"
		    >
		      💰 Best Discounts
		    </Link>
		   <Link
		     href="/deals?type=savings"
		      className="block px-4 py-3 hover:bg-slate-50"
		    >
		      🏆 Top Savings
		    </Link>
		
		  </div>
		</div>


            {/* Merchants Dropdown */}
            <div className="group relative">

              <button className="flex items-center gap-1 hover:text-indigo-600 transition">
                Merchants
                <ChevronDown size={16} />
              </button>

              <div
                className="
                absolute top-full left-0 mt-3
                w-64
                bg-white
                border border-slate-200
                rounded-xl
                shadow-xl
                opacity-0
                invisible
                group-hover:visible
                group-hover:opacity-100
                transition-all
                duration-200
                overflow-hidden
              "
              >
		<Link
		  href={`/merchants?country=${selectedCountry}`}
		  className="block px-4 py-3 hover:bg-slate-50 font-medium"
		>
		  View All Merchants
		</Link>
              </div>
            </div>

          </nav>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 ml-8">

          <input
            type="text"
            placeholder="Search offers, brands, categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            className="
              hidden md:block
              w-80
              rounded-2xl
              border border-slate-300
              bg-slate-50
              px-5
              py-3
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              focus:bg-white
              transition
            "
          />

	<Link
	  href="/deals"
	  className="
	    hidden lg:flex
	    items-center
	    bg-indigo-600
	    text-white
	    px-5
	    py-3
	    rounded-xl
	    font-semibold
	    hover:bg-indigo-700
	    transition
	    mr-30
	  "
	>
	  Browse Deals
	</Link>

        {/* Country Selector */}
        <div className="relative hidden md:block">


        <button
          onClick={() => setCountryOpen(!countryOpen)}
          className="
            flex
            items-center
            gap-2
            px-4
            py-2.5
            rounded-xl
            border
            border-slate-200
            bg-white
            hover:bg-slate-50
            shadow-sm
            transition
          "
        >
          <span className="text-lg">🌍</span>

          <span className="text-sm font-medium text-slate-700">
		{selectedCountry === "ALL"
		  ? "All Countries"
		  : countries.find(
		      c => c.code === selectedCountry
		    )?.name || selectedCountry}
          </span>

          <ChevronDown size={16} />
        </button>

          {countryOpen && (
            <div
              className="
                absolute
                right-[10px]
                mt-2
                w-[220px]
                bg-white
                border
                border-slate-200
                rounded-xl
                shadow-xl
                max-h-[450px]
                overflow-hidden
                z-50
              "
            >

              <div className="p-3 border-b">

                <input
                  type="text"
                  placeholder="Search country..."
                  value={countrySearch}
                  onChange={(e) =>
                    setCountrySearch(e.target.value)
                  }
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  py-3
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                  focus:bg-white
                  transition
                "
                />

              </div>

              <div className="max-h-[350px] overflow-y-auto py-1">

		<button
		onClick={() => {
		  const params = new URLSearchParams(
		    searchParams.toString()
		  );
		
		  params.delete("country");
		
		  const query = params.toString();
		
		  router.push(
		    query
		      ? `${pathname}?${query}`
		      : pathname
		  );
		
		  setCountryOpen(false);
		}}
		  className="
		    w-full
		    text-left
		    px-4
		    py-2
		    hover:bg-slate-50
		  "
		>
		  🌍 All Countries
		</button>

                {countries
                  .filter(
                    (country) =>
                      country.code
                       .toLowerCase()
                       .includes(
                       countrySearch.toLowerCase()
                     ) ||
                  country.name
                    .toLowerCase()
                    .includes(
                    countrySearch.toLowerCase()
            )
                  )
                  .map((country) => (

		<button
		  key={country.code}
		onClick={() => {
		  const params = new URLSearchParams(
		    searchParams.toString()
		  );		
		
		  params.set(
		    "country",
		    country.code
		  );
		
		  router.push(
		    `${pathname}?${params.toString()}`
		  );
		
		  setCountryOpen(false);
		}}
		  className="
		    w-full
		    px-4
		    py-2
		    hover:bg-slate-50
		    transition
		  "
		>

		  <div className="flex items-center justify-between">
		
		    <div className="flex items-center gap-2">
		
		      <span className="text-lg">
		        {countryFlags[country.code] || "🌍"}
		      </span>
		
		      <div className="text-left">
		
		        <div className="text-sm font-medium text-slate-700">
		          {country.name}
		        </div>
		
		      </div>
		
		    </div>
		
		    <span
		      className="
		        text-xs
		        bg-indigo-50
		        text-indigo-600
		        px-2
		        py-1
		        rounded-full
		        font-medium
		      "
		    >
		      {country.offerCount}
		    </span>
		
		  </div>
		</button>

                ))}
              </div>

            </div>
          )}
        </div>

        </div>

      </div>

    </header>
  );
}
