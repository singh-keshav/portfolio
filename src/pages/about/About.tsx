import React from "react";
import BreadcrumBanner from "../../components/BreadcrumBanner";
import LeftRighTextAndImage from "../../components/LeftRighTextAndImage";
import brandInfo from "../../config/brand-info.json";
import Card from "../../components-ui/Card";
import TestimonyBlock from "../../components/TestimonyBlock";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="text-left">
      <BreadcrumBanner />
      <div className="m-16 text-lg">
        <LeftRighTextAndImage
          imgageUrl={brandInfo.about.leftRighTextAndImage.imageUrl}
          heading={brandInfo.about.leftRighTextAndImage.heading}
          paragraphs={brandInfo.about.leftRighTextAndImage.paragraphs}
          tabs={brandInfo.about.leftRighTextAndImage.tabs}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:my-16">
          {brandInfo.about.cards.map((card, index) => (
            <Card key={index} text={card.text} icon={card.icon} />
          ))}
        </div>
      </div>

      <TestimonyBlock />
    </div>
  );
};
export default About;
