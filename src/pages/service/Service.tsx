import React from "react";
import BreadcrumBanner from "../../components/BreadcrumBanner";
import brandInfo from "../../config/brand-info.json";
import ImageWithText from "../../components/ImageWithText";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className="">
      <BreadcrumBanner />
      <div className="my-8">
        <h2 className="text-red-500 font-bold">Our services</h2>
        <h3 className="text-lg md:text-2xl font-semibold my-20">
          What Ph.D. Support Services we provide for our researchers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {brandInfo.services.map((s, index) => (
            <ImageWithText heading={s.heading} imageUrl={s.imageUrl} paragraphes={s.paragraphes} slug={s.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
