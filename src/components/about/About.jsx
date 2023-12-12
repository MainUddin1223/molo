import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { FaPhone, FaVanShuttle } from "react-icons/fa6";
const About = () => {
  return (
    <div className="w-[90%] lg:w-[80%]  mx-auto my-16">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="flex-1">
          <h1 className=" text-5xl font-semibold text-[#ef98b3]">
            Molo Elephant & Castle
          </h1>
          <p className=" italic font-semibold text-right">( Since 2018 )</p>
          <div className="flex  gap-2 text-lg my-4 ">
            <MdLocationPin className="text-4xl" />
            <p>
              Mercato Metropolitano, 42 Newington Causeway, Elephant & Castle,
              London
            </p>
          </div>
          <div className="flex  gap-2 text-lg my-4">
            <FaPhone className="text-2xl" />
            <p>+44 7881 273570</p>
          </div>
          <div className="flex  gap-2 text-lg my-4">
            <MdOutlineEmail className="text-3xl" />
            <p>molo@gmail.com</p>
          </div>
          <div className="flex  gap-2 text-lg my-4">
            <FaVanShuttle className="text-3xl" />
            <a
              href="https://www.ubereats.com/gb/store/rudies-jerk-shack-elephant-%26-castle/0sdk4tBQS7Ci1oQ1-lMZnA?utm_campaign=place-action-link&utm_medium=organic&utm_source=google"
              target="_blank"
              rel="noreferrer"
            >
              Order now
            </a>
          </div>
        </div>
        <iframe
          className="lg:flex-1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.9484281845608!2d-0.09924073034989757!3d51.49865293312031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761db3c0740ae3%3A0xc97aa050c9e30033!2sMolo%20Elephant%20%26%20Castle!5e0!3m2!1sen!2sbd!4v1702292865163!5m2!1sen!2sbd"
          width="100%"
          height="650"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
