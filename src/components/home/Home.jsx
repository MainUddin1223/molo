import HomeSLider from "../HomeSlider/HomeSLider";
import Map from "../Map/Map";
import Gallery from "../gallery/Gallery";
import Motto from "../motto/Motto";
import Service from "../services/Service";

const Home = () => {
  return (
    <div>
      <div className="mx-auto relative">
        <HomeSLider />
        <a
          href="https://deliveroo.co.uk/menu/london/borough/molo?day=today&postcode=SE16DR&time=ASAP"
          target="_blank"
          className="absolute w-[80%] md:p-16 p-8 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[9]  bg-[#dcd7d7b0] "
          rel="noreferrer"
        >
          <h1 className=" text-[35px] md:text-[60px] lg:text-[75px] font-bold flex items-center justify-center text-center cursor-pointer">
            ORDER NOW!
          </h1>
        </a>
      </div>
      <Service />
      <Motto />
      <Gallery />
      <Map />
    </div>
  );
};

export default Home;
