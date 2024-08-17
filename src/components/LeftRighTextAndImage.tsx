import React from "react";
import Tabs from "./Tabs";

interface ITabs {
  name: string;
  heading?: string;
  paragraphs?: string[];
  highlights?: string[];
}

type Props = {
  imgageUrl: string;
  heading: string;
  paragraphs: string[];
  order?: number;
  tabs?: ITabs[];
  highlights?: string[];
};

const LeftRighTextAndImage = (props: Props) => {
  const ImageDiv = (
    <div className="rounded-lg h-full">
      <img className="h-full w-full lg:w-10/12 object-cover" src={props.imgageUrl} alt="" />
    </div>
  );

  const formatTabContent = (content: ITabs) => {
    return (
      <div>
        {content.heading && <h3>{content.heading}</h3>}
        {content.paragraphs && <p>{content.paragraphs}</p>}
        <div className="my-4">
          {content.highlights &&
            content.highlights.map((highlight, index) => (
              <div key={index}>
                <span className="material-symbols-outlined text-red-500">check</span>
                <span>{highlight}</span>
              </div>
            ))}
        </div>
      </div>
    );
  };

  const TextDiv = (
    <div className="p-8 my-auto">
      <h3 className="text-black font-bold mb-4 text-xl">{props.heading}</h3>
      {props.paragraphs.map((ptext, index) => (
        <p key={index} className="text-gray-500">
          {ptext}
        </p>
      ))}
      {props.highlights?.map((highlight, index) => (
        <div key={index}>
          <span className="material-symbols-outlined text-red-500">check</span>
          <span>{highlight}</span>
        </div>
      ))}
      <div className="flex">
        {props.tabs && props.tabs.length > 0 && (
          <div>
            <Tabs
              tabs={props.tabs?.map((t) => ({
                label: t.name,
                content: [formatTabContent(t)],
              }))}
            />
          </div>
        )}
      </div>
    </div>
  );

  const content = [ImageDiv, TextDiv];

  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">{content}</div>;
};

export default LeftRighTextAndImage;
