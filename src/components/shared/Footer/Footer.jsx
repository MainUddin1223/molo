const Footer = () => {
  return (
    <div className="bg-[#ef98b3]">
      <div className="lg:w-[80%] w-[95%] mx-auto mt-8 text-md md:text-xl">
        <div className="flex justify-between py-4">
          <p>&copy; Molo Elephant & Castle</p>
          <p>
            Developed by{" "}
            <a
              className="font-semibold"
              href="https://www.linkedin.com/in/md-main-uddin-dev/"
              target="_blank"
              rel="noreferrer"
            >
              Main
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
