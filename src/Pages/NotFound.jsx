import image from "../assets/Page.png";

const NotFound = () => {
  return (
    <div className="h-[90vh] bg-[#7d1e7d77] flex items-center">
      <div className="m-auto xd:h-[50vh]  items-center">
      <img className="w-[200%] " src={image} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
