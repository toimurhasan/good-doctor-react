import React from "react";
import { Breadcrumb } from "./Breadcrumb";
import { BannerHeading } from "./BannerHeading";

export const Banner = () => {
  return (
    <div className="text-white bg-linear-to-tr from-blue-700 to bg-blue-200 px-2 xl:px-0">
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        <Breadcrumb />
        <BannerHeading />
      </div>
    </div>
  );
};
