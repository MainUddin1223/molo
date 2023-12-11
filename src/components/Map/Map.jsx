const Map = () => {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-center my-16 text-5xl font-semibold text-[#ef98b3]">
        FIND US
      </h1>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.9484281845608!2d-0.09924073034989757!3d51.49865293312031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761db3c0740ae3%3A0xc97aa050c9e30033!2sMolo%20Elephant%20%26%20Castle!5e0!3m2!1sen!2sbd!4v1702292865163!5m2!1sen!2sbd"
          width="100%"
          height="550"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
