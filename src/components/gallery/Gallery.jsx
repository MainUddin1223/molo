import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { gallery1, gallery7, gallery8 } from "../../utils/gallery";
import { gallery2 } from "../../utils/gallery";
import { gallery3 } from "../../utils/gallery";
import { gallery4 } from "../../utils/gallery";
import { gallery5 } from "../../utils/gallery";
import { gallery6 } from "../../utils/gallery";
const Gallery = () => {
  return (
    <div className="lg:w-[80%] mx-auto my-32 w-[95%]">
      <h1 className="text-center my-16 text-5xl font-semibold text-[#ef98b3]">
        OUR GALLERY
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
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
            className="mySwiper m-0 p-0"
          >
            {gallery1.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={image.img}
                  alt={image.label}
                  className="w-[100%] mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay, EffectFade]}
            Autoplay={true}
            effect={"fade"}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
            }}
            className="mySwiper m-0 p-0"
          >
            {gallery2.map((image, i) => (
              <SwiperSlide key={i}>
                <img src={image.img} alt={image.label} className="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay, EffectFade]}
            Autoplay={true}
            effect={"fade"}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false,
            }}
            className="mySwiper m-0 p-0"
          >
            {gallery3.map((image, i) => (
              <SwiperSlide key={i}>
                <img src={image.img} alt={image.label} className="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
            className="mySwiper m-0 p-0"
          >
            {gallery4.map((image, i) => (
              <SwiperSlide key={i}>
                <img src={image.img} alt={image.label} className="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay, EffectFade]}
            Autoplay={true}
            effect={"fade"}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
            }}
            className="mySwiper m-0 p-0"
          >
            {gallery5.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={image.img}
                  alt={image.label}
                  className="w-[100%] h-[100%]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay, EffectFade]}
            Autoplay={true}
            effect={"fade"}
            autoplay={{
              delay: 12000,
              disableOnInteraction: false,
            }}
            className="mySwiper m-0 p-0"
          >
            {gallery6.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={image.img}
                  alt={image.label}
                  className="w-[100%] h-[100%]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay, EffectFade]}
            Autoplay={true}
            effect={"fade"}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false,
            }}
            className="mySwiper m-0 p-0"
          >
            {gallery7.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={image.img}
                  alt={image.label}
                  className="w-[100%] h-[100%]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
            className="mySwiper m-0 p-0"
          >
            {gallery8.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={image.img}
                  alt={image.label}
                  className="w-[100%] h-[100%]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
