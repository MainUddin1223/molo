import delivery from "../../assets/delivery.png";
import takeaway from "../../assets/takeaway.png";
import dinein from "../../assets/dinein.png";
import available from "../../assets/available.png";

const Service = () => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto">
      <h1 className="text-center my-16 text-5xl font-semibold text-[#ef98b3]">
        OUR SERVICES
      </h1>
      <div className="block sm:flex sm:justify-evenly gap-2 md:gap-4">
        <div className="flex justify-center sm:block py-4 px-8 my-4 sm:my-0 bg-[#ef98b441] w-[100%] sm:text-center">
          <div className="flex items-center sm:block gap-4">
            <img
              src={available}
              alt="available"
              className="w-16 sm:mx-auto sm:py-2"
            />
            <p className="text-3xl font-bold">LUNCH</p>
          </div>
        </div>
        <div className="flex justify-center sm:block py-4 px-8 my-4 sm:my-0 bg-[#ef98b441] w-[100%] sm:text-center">
          <div className="flex items-center sm:block gap-4">
            <img
              src={available}
              alt="available"
              className="w-16 sm:mx-auto sm:py-2"
            />
            <p className="text-3xl font-bold">DINNER</p>
          </div>
        </div>
        <div className="flex justify-center sm:block py-4 px-8 my-4 sm:my-0 bg-[#ef98b441] w-[100%] sm:text-center">
          <div className="flex items-center sm:block gap-4">
            <img
              src={available}
              alt="available"
              className="w-16 sm:mx-auto sm:py-2"
            />
            <p className="text-3xl font-bold">DESSERT</p>
          </div>
        </div>
      </div>
      <div className="block sm:flex sm:justify-evenly gap-2 md:gap-4 my-4">
        <div className="flex justify-center sm:block py-4 px-8 my-4 sm:my-0 bg-[#ef98b441] w-[100%] sm:text-center flex-1">
          <div className="flex items-center sm:block gap-4">
            <img
              src={delivery}
              alt="delivery"
              className="w-16 sm:mx-auto sm:py-2"
            />
            <p className="text-3xl font-bold">DELIVERY</p>
          </div>
        </div>
        <div className="flex justify-center sm:block py-4 px-8 my-4 sm:my-0 bg-[#ef98b441] w-[100%] sm:text-center flex-1">
          <div className="flex items-center sm:block gap-4">
            <img
              src={dinein}
              alt="dinein"
              className="w-16 sm:mx-auto sm:py-2"
            />
            <p className="text-3xl font-bold">DINEIN</p>
          </div>
        </div>
        <div className="flex justify-center sm:block py-4 px-8 my-4 sm:my-0 bg-[#ef98b441] w-[100%] sm:text-center flex-1">
          <div className="flex items-center sm:block gap-4">
            <img
              src={takeaway}
              alt="takeaway"
              className="w-16 sm:mx-auto sm:py-2"
            />
            <p className="text-3xl font-bold">TAKEAWAY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
