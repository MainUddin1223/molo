import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";
import molo_1 from "../../assets/molo1.jpg";
import molo_2 from "../../assets/molo2.jpg";
import molo_3 from "../../assets/molo3.jpg";
import molo_4 from "../../assets/molo4.jpg";
const HomeSLider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        modules={[Autoplay, EffectFade]}
        Autoplay={true}
        effect={"fade"}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-[85vh] m-0 p-0"
      >
        <SwiperSlide>
          <img src={molo_1} className="w-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%]" src={molo_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={molo_3} className="w-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={molo_4} className="w-[100%]" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSLider;
