"use client";

import { siteInfo } from "../data/siteData";

export default function TopBar() {
  const tickerItemsDuplicated = [
    ...siteInfo.tickerItems,
    ...siteInfo.tickerItems,
    ...siteInfo.tickerItems,
    ...siteInfo.tickerItems
  ];

  return (
    <div className="top-bar-full">
      <div className="ticker-wrap-full">
        <div className="ticker-move-full">
          {tickerItemsDuplicated.map((item, idx) => (
            <span key={idx} className="ticker-item-full">
              ⚡ {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
