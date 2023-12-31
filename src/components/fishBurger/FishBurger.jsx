import { useEffect } from "react";

const FishBurger = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen">
      <h1 className="mt-48 text-center text-4xl text-[#ef98b3]">
        Yet to develop the page
      </h1>
    </div>
  );
};

export default FishBurger;
