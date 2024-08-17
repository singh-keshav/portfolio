import React from "react";
import BreadcrumBanner from "../../components/BreadcrumBanner";
import Accordion from "../../components-ui/Accordian";

import brandInfo from "../../config/brand-info.json";

type Props = {};

const Faq = (props: Props) => {
  return (
    <div className="">
      <BreadcrumBanner />
      <div className="m-4 text-left max-w-screen-md mx-auto flex flex-col gap-4">
        {brandInfo.faq.map((faq, index) => (
          <div className="">
            <Accordion title={faq.question}>{faq.answer}</Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
