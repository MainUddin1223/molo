import { useEffect, useState } from "react";
import { lunch1, lunch2 } from "../../utils/menu";

const Menu = () => {
  const [menu, setMenu] = useState("lunch");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="lg:w-[80%] mx-auto my-8 w-[90%] min-h-screen">
      <h1 className="text-center my-2 text-5xl font-semibold text-[#ef98b3]">
        OUR FOOD MENU
      </h1>
      <div className="inline-flex shadow  justify-center my-8">
        <button
          className={`py-2 text-[14px] sm:text-2xl  font-bold px-4 sm:px-8  ${
            menu == "lunch" && "text-white bg-[#ef98b3]"
          }`}
          onClick={() => setMenu("lunch")}
        >
          LUNCH
        </button>
        <button
          className={`py-2 text-[14px] sm:text-2xl  font-bold px-4 sm:px-8  ${
            menu == "dinner" && "text-white bg-[#ef98b3]"
          }`}
          onClick={() => setMenu("dinner")}
        >
          DINNER
        </button>
        <button
          className={`py-2 text-[14px] sm:text-2xl  font-bold px-4 sm:px-8  ${
            menu == "dessert" && "text-white bg-[#ef98b3]"
          }`}
          onClick={() => setMenu("dessert")}
        >
          DESSERT
        </button>
      </div>
      <div className="md:flex gap-8">
        <div className="flex-1 ">
          <div className="flex justify-between gap-2 py-2 bg-[#ef98b473] font-bold px-4">
            <h3>No</h3>
            <h3>Name</h3>
            <h3>Price</h3>
          </div>
          {lunch1.map((item) => (
            <div
              key={item.id}
              className={`flex justify-between gap-2 px-4 py-2 font-semibold ${
                item.id % 2 == 0 && "bg-[#ef98b473]"
              }`}
            >
              <p>{item.id}</p>
              <p>{item?.name}</p>
              <p>{item?.price}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 ">
          <div className="md:flex justify-between hidden py-2 bg-[#ef98b473] font-bold px-4">
            <h3>No</h3>
            <h3>Name</h3>
            <h3>Price</h3>
          </div>
          {lunch2.map((item) => (
            <div
              key={item.id}
              className={`flex justify-between gap-2 px-4 py-2 font-semibold ${
                item.id % 2 == 0 && "bg-[#ef98b473]"
              }`}
            >
              <p>{item.id}</p>
              <p>{item?.name}</p>
              <p>{item?.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
