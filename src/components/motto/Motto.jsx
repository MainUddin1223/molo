import motto_img from "../../assets/molo_cover.jpg";
import inverted_1 from "../../assets/inverted-comma-1.png";
import inverted_2 from "../../assets/inverted-comma-2.png";

const Motto = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-16">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex-1 ">
          <img src={motto_img} alt="motto_img" className="lg:max-w-[400px] " />
        </div>
        <div className="flex flex-1 flex-col justify-center align-middle text-center">
          <img
            src={inverted_1}
            alt="inverted_comma"
            className="w-14 mx-auto mb-8"
          />
          <p className="text-4xl font-semibold">
            Customer satisfaction is our main priority. We always love to take
            extra care of our customer with Fresh Food
          </p>
          <p className="mt-4 italic text-sm font-semibold">Manager,MOLO</p>
          <img
            src={inverted_2}
            alt="inverted_comma"
            className="w-12 mx-auto mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Motto;
