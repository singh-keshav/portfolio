import React from "react";

type Props = {
  heading?: string;
  text: string;
  icon?: string;
};

const Card = (props: Props) => {
  return (
    <section className="py-8 px-4 border rounded shadow-lg hover:bg-red-500 hover:text-white group">
      <div className="container mx-auto">
        {props.heading && <h2 className="text-2xl font-bold mb-4">{props.heading}</h2>}
        {props.icon && (
          <div className="text-2xl font-bold mb-4 flex justify-center">
            <span className="material-symbols-outlined text-red-500 group-hover:text-white text-6xl text-center">{props.icon}</span>
          </div>
        )}
        <div className="p-4 ">
          {/* <h3 className="text-lg font-semibold">Jane Smith</h3> */}
          <p className="">{props.text}</p>
          <div className="flex items-center mt-2 text-center">
            {/* <span className="text-yellow-500">★★★★★</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
