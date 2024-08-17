import React from "react";
import { useParams } from "react-router-dom";
import brandInfo from "../../config/brand-info.json";

type Props = {};

const ServiceDetails = (props: Props) => {
  const param = useParams();
  console.log(param);
  const matchingService = brandInfo.services.find((s) => s.slug === param.id);
  if (!matchingService) {
    return <div></div>;
  }
  return (
    <div>
      <img src={matchingService.imageUrl} className="w-full max-h-80" alt={matchingService.slug} />
      <div className="m-4">
        <h2 className="text-4xl font-bold my-12">{matchingService.heading}</h2>
        {matchingService.paragraphes.map((text, index) => (
          <>
            <p className="text-left">{text}</p>
            {!text && <br />}
          </>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
