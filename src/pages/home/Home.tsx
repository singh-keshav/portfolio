import React from "react";

import brandInfo from "../../config/brand-info.json";
import Card from "../../components-ui/Card";
import Carousel from "../../components-ui/Carousel";
import LeftRighTextAndImage from "../../components/LeftRighTextAndImage";
import ImageWithText from "../../components/ImageWithText";
import TestimonyBlock from "../../components/TestimonyBlock";
import ImageWithBubbles from "../../components/ImageWithBubble";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 md:grid-cols-2 m-4 lg:m-8">
        <div className="md:p-16 text-left flex items-center">
          <div>
            <span className="text-primary-600 text-lg">{brandInfo.home.carouselBelowImageAndText.welcometext}</span>
            <h2 className="mt-4 bold text-2xl font-extrabold ">{brandInfo.home.carouselBelowImageAndText.heading}</h2>
            {brandInfo.home.carouselBelowImageAndText.paragraphs.map((ptext, index) => (
              <p key={index} className="text-primary-500 text-lg font-thin ">
                {ptext}
              </p>
            ))}
          </div>
        </div>
        <ImageWithBubbles imageUrl={brandInfo.home.carouselBelowImageAndText.imageUrl} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4 md:h-50 lg:m-12">
        {brandInfo.home.cards.map((content, index) => (
          <Card key={index} heading={content.heading} text={content.text} />
        ))}
      </div>

      <div className="m-4 lg:m-8 p-4 text-left">
        {brandInfo.home.leftRighTextAndImage.map((content, index) => (
          <LeftRighTextAndImage
            key={index}
            order={index}
            heading={content.heading}
            paragraphs={content.paragraphs}
            imgageUrl={content.imageUrl}
            highlights={content.highlights}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
        {brandInfo.services.slice(0, 3).map((s, index) => (
          <ImageWithText imageUrl={s.imageUrl} paragraphes={s.paragraphes} heading={s.heading} slug={s.slug} />
        ))}
      </div>

      <TestimonyBlock />
    </div>
  );
};

export default Home;
