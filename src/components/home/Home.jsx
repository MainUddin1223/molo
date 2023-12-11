import HomeSLider from "../HomeSlider/HomeSLider";
import Map from "../Map/Map";
import Gallery from "../gallery/Gallery";
import Motto from "../motto/Motto";
import Footer from "../shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="mx-auto relative">
        <HomeSLider />
        <div className="absolute w-[80%] md:p-16 p-8 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-20  bg-[#dcd7d7b0] ">
          <h1 className=" text-[35px] md:text-[60px] lg:text-[75px] font-bold flex items-center justify-center text-center cursor-pointer">
            ORDER NOW!
          </h1>
        </div>
      </div>
      <Motto />
      <Gallery />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
