import '../../src/App.css'; 

const ImageWithBubbles = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="bubble-img md:p-16">
      <img
        src={imageUrl}
        alt="Sample"
        className="w-full h-auto object-cover"
      />
      <div className="bubble top-1/4 left-1/4"></div>
      <div className="bubble top-1/2 left-1/2"></div>
      <div className="bubble top-3/4 left-3/4"></div>
    </div>
  );
};

export default ImageWithBubbles;
