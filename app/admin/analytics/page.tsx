"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {  ResponsiveContainer,  LineChart,  Line,  XAxis,  YAxis,  Tooltip, LabelList,} from "recharts";

export default function AnalyticsPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

const today = new Date();

const defaultEnd =
  today.toISOString().split("T")[0];

const defaultStartDate = new Date();

defaultStartDate.setDate(
  today.getDate() - 7
);

const defaultStart =
  defaultStartDate
    .toISOString()
    .split("T")[0];

const [startDate, setStartDate] =
  useState(defaultStart);

const [endDate, setEndDate] =
  useState(defaultEnd);

  const [lastUpdated, setLastUpdated] =
  useState("");

  useEffect(() => {
    const token =
      localStorage.getItem("adminToken");

    if (!token) {
      router.push("/admin/login");
      return;
    }

    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const token =
        localStorage.getItem("adminToken");

      let url =
        `${process.env.NEXT_PUBLIC_API_URL}/analytics/dashboard`;

      if (startDate && endDate) {
        url +=
          `?startDate=${startDate}&endDate=${endDate}`;
      }

      const response = await fetch(url, {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem(
          "adminToken",
        );

        router.push("/admin/login");
        return;
      }

      const result =
        await response.json();
	
	setData(result);

	setLastUpdated(
	  new Date().toLocaleString(),
	);


    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

const applyPreset = (days: number) => {
  const today = new Date();

  const end =
    today.toISOString().split("T")[0];

  const startDateObj = new Date();

  startDateObj.setDate(
    today.getDate() - days
  );

  const start =
    startDateObj
      .toISOString()
      .split("T")[0];

  setStartDate(start);
  setEndDate(end);

  setTimeout(() => {
    loadDashboard();
  }, 100);
};

  const logout = () => {
    localStorage.removeItem(
      "adminToken",
    );

    router.push("/admin/login");
  };

const formatChartDate = (value: string | number) => {
  const date = new Date(String(value));

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
};


  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold mt-2">
          Analytics Dashboard
        </h1>
<div className="flex gap-2">

  <button
    onClick={loadDashboard}
	className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition"
  >
    Refresh
  </button>

  <button
    onClick={logout}
	className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-700 transition"
  >
    Logout
  </button>

</div>
</div>

      {/* Date Filters */}

      <div className="bg-white rounded-xl p-4 shadow mb-8 flex gap-4 items-end">

        <div>
          <label className="block text-sm mb-1">
            Start Date
          </label>

          <input
            type="date"
            value={startDate}
            onChange={(e) =>
              setStartDate(
                e.target.value,
              )
            }
            className="border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">
            End Date
          </label>

          <input
            type="date"
            value={endDate}
            onChange={(e) =>
              setEndDate(
                e.target.value,
              )
            }
            className="border rounded p-2"
          />
        </div>

        <button
          onClick={loadDashboard}
	className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition"
        >
          Apply
        </button>

	<button
	  onClick={() => applyPreset(0)}
	  className="bg-slate-200 px-3 py-2 rounded cursor-pointer hover:bg-slate-400 transition"
	>
	  Today
	</button>
	
	<button
	  onClick={() => applyPreset(7)}
	  className="bg-slate-200 px-3 py-2 rounded cursor-pointer hover:bg-slate-400 transition"
	>
	  7 Days
	</button>
	
	<button
	  onClick={() => applyPreset(30)}
	  className="bg-slate-200 px-3 py-2 rounded cursor-pointer hover:bg-slate-400 transition"
	>
	  30 Days
	</button>
	
	<button	
	  onClick={() => applyPreset(90)}
	  className="bg-slate-200 px-3 py-2 rounded cursor-pointer hover:bg-slate-400 transition"
	>
	  90 Days
	</button>

      </div>

	<div className="text-sm text-slate-500 mb-4">
	  Last Updated: {lastUpdated}
	</div>

      {/* KPI Cards */}

      <div className="grid grid-cols-5 gap-4 mb-8">
	<div className="bg-white p-4 rounded-xl shadow border-t-4 border-blue-500 hover:shadow-lg transition">
	<div className="text-sm text-slate-500 flex items-center gap-2">
	  🖱️ Total Clicks
	</div>
          <div className="text-4xl font-bold mt-2">
            {data?.summary?.totalClicks}
          </div>
        </div>

	<div className="bg-white p-4 rounded-xl shadow border-t-4 border-green-500 hover:shadow-lg transition">
          <div className="text-sm text-slate-500">
            🌍 Countries
          </div>
          <div className="text-4xl font-bold mt-2">
            {data?.summary?.uniqueCountries}
          </div>
        </div>

	<div className="bg-white p-4 rounded-xl shadow border-t-4 border-purple-500 hover:shadow-lg transition">
          <div className="text-sm text-slate-500">
            🏪 Merchants
          </div>
          <div className="text-4xl font-bold mt-2">
            {data?.summary?.uniqueMerchants}
          </div>
        </div>

	<div className="bg-white p-4 rounded-xl shadow border-t-4 border-orange-500 hover:shadow-lg transition">
          <div className="text-sm text-slate-500">
            📂 Categories
          </div>
          <div className="text-4xl font-bold mt-2">
            {data?.summary?.uniqueCategories}
          </div>
        </div>

	<div className="bg-white p-4 rounded-xl shadow border-t-4 border-red-500 hover:shadow-lg transition">
          <div className="text-sm text-slate-500">
            🎁 Offers
          </div>
          <div className="text-4xl font-bold mt-2">
            {data?.summary?.uniqueOffers}
          </div>
        </div>

      </div>

<div className="bg-white rounded-xl shadow p-4 mb-4">

  <h2 className="font-bold text-lg mb-3">
    Daily Trend
  </h2>

  <div style={{ width: "100%", height: 180 }}>

    <ResponsiveContainer>

      <LineChart
        data={[...(data?.dailyTrend || [])].reverse()}
      >

	<XAxis
	  dataKey="day"
	  tick={{ fontSize: 12 }}
	  tickFormatter={formatChartDate}
	/>

        <YAxis />

	<Tooltip
	  labelFormatter={(label) =>
	    formatChartDate(String(label))
	  }
	/>

	<Line
	  type="monotone"
	  dataKey="clicks"
	  strokeWidth={3}
	>
	  <LabelList
	    dataKey="clicks"
	    position="top"
	  />
	</Line>

      </LineChart>

    </ResponsiveContainer>

  </div>

</div>


<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

  {/* Top Merchants */}

  <div className="bg-white rounded-xl shadow p-6">

    <h2 className="font-bold text-lg mb-3">
      Top Merchants
    </h2>

   <div className="space-y-3">

    {data?.topMerchants?.map(
    (
      merchant: any,
      index: number,
    ) => (

      <div
        key={merchant.merchant_id}
        className="
          flex
          justify-between
          items-center
          border-b
          pb-2
        "
      >

        <div className="flex items-center gap-3">

          <span className="
            w-6
            text-slate-500
            font-semibold
          ">
            #{index + 1}
          </span>

          <span>
            {merchant.merchant_name}
          </span>

        </div>

        <span className="
          font-bold
          text-blue-600
        ">
          {merchant.clicks}
        </span>

      </div>

    )
  )}

</div>


  </div>

  {/* Top Categories */}

  <div className="bg-white rounded-xl shadow p-4">

    <h2 className="font-bold text-lg mb-3">
      Top Categories
    </h2>
  
<div className="space-y-1">

  {data?.topCategories?.map(
    (
      category: any,
      index: number,
    ) => (

      <div
        key={category.category_id}
        className="
          flex
          justify-between
          items-center
          border-b
          pb-2
          pt-2
        "
      >

        <div className="flex items-center gap-3">

          <span
            className="
              w-6
              text-slate-500
              font-semibold
            "
          >
            #{index + 1}
          </span>

          <span>
            {category.category_name}
          </span>

        </div>

        <span
          className="
            font-bold
            text-blue-600
          "
        >
          {category.clicks}
        </span>

      </div>

    )
  )}

</div>

</div>


  {/* Top Countries */}

  <div className="bg-white rounded-xl shadow p-4">

    <h2 className="font-bold text-lg mb-3">
      Top Countries
    </h2>

<div className="space-y-1">

  {data?.topCountries?.map(
    (
      country: any,
      index: number,
    ) => (

      <div
        key={country.country_code}
        className="
          flex
          justify-between
          items-center
          border-b
          pb-2
          pt-2
        "
      >

        <div className="flex items-center gap-3">

          <span
            className="
              w-6
              text-slate-500
              font-semibold
            "
          >
            #{index + 1}
          </span>

          <span>
            {country.country_code}
          </span>

        </div>

        <span
          className="
            font-bold
            text-blue-600
          "
        >
          {country.clicks}
        </span>

      </div>

    )
  )}

</div>


  </div>

  {/* Top Offers */}

  <div className="bg-white rounded-xl shadow p-4">

    <h2 className="font-bold text-lg mb-3">
      Top Offers
    </h2>

<div className="space-y-1">

  {data?.topOffers?.map(
    (
      offer: any,
      index: number,
    ) => (

      <div
        key={offer.offer_id}
        className="
          flex
          justify-between
          items-center
          border-b
          pb-2
          pt-2
        "
      >

        <div className="flex items-center gap-3">

          <span
            className="
              w-6
              text-slate-500
              font-semibold
            "
          >
            #{index + 1}
          </span>

          <span className="truncate">
            {offer.title?.length > 40
              ? offer.title.substring(0, 40) + "..."
              : offer.title}
          </span>

        </div>

        <span
          className="
            font-bold
            text-blue-600
          "
        >
          {offer.clicks}
        </span>

      </div>

    )
  )}

</div>


  </div>

</div>
    </main>
  );
}
