export default function AnnouncementBar() {
  return (
    <div
      className="
        bg-gradient-to-r
        from-slate-900
        via-purple-900
        to-slate-900
        text-white
        text-[11px]
        py-0.4
        overflow-hidden
        border-b
        border-purple-700/40
      "
    >
      <div
        className="
          text-center
          font-semibold
          tracking-wide
	  animate-premium-glow
	  drop-shadow-[0_0_16px_rgba(255,255,255,0.7)]
        "
      >
        <span className="text-yellow-300">🔥</span> Hot Deals Expiring Soon
        {" • "}
        <span className="text-orange-300">⚡</span> Flash Sales Live Now
        {" • "}
        <span className="text-green-300">🎁</span> Exclusive Discounts Added Daily
        {" • "}
        <span className="text-pink-300">🏆</span> Biggest Savings Available Today
        {" • "}
        <span className="text-cyan-300">🌍</span> Global Deals Marketplace
        {" • "}
      </div>
    </div>
  );
}
