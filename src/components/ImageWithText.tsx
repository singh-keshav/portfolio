import { Link } from "react-router-dom";

type Props = {
  imageUrl: string;
  heading: string;
  slug: string;
  paragraphes: string[];
};

const ImageWithText = ({ imageUrl, heading, paragraphes, slug }: Props) => {
  return (
    <div className="relative group w-full max-w-sm mx-auto overflow-hidden">
      <img
        src={imageUrl}
        alt="Sample"
        className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="p-4 absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 flex flex-col items-center justify-center translate-y-16 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <h3 className="text-xl font-bold text-white">{heading}</h3>
        <p className="text-white text mb-4 text-left font">
          {paragraphes[0].split(" ").slice(0, 20).join(" ")}
        </p>

        <Link to={`./${slug}`}>
          <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            <span>Read more</span>
            <span className="material-symbols-outlined ml-2">double_arrow</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImageWithText;
