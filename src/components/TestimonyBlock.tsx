import React from "react";
import Testimony from "../components-ui/Testimony";
import brandInfo from "../config/brand-info.json";

type Props = {};

const TestimonyBlock = (props: Props) => {
  return (
    <div className="bg-primary-500 my-4 py-24 text-white font-bold flex justify-center align-middle text-center">
      <div className="sm:mx-96">
        <h3 className="my-8 font-bold text-lg">WHAT OUR CUSTOMERS SAY</h3>
        <Testimony testimonies={brandInfo.home.testimonies} />
      </div>
    </div>
  );
};

export default TestimonyBlock;
