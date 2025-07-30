import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-start md:items-center bg-black px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
      <div className="w-full lg:min-w-3xl flex flex-col lg:flex-row mx-auto justify-center gap-8 lg:gap-12">
        <div className="flex flex-col justify-around space-y-6 lg:space-y-8">
          <div className="border border-white/10 p-6 sm:p-8 rounded-lg">
            <h2 className="text-white text-2xl sm:text-3xl font-light tracking-widest uppercase">
              Contact Us
            </h2>
            <p className="text-white/60 mt-3 sm:mt-4 max-w-sm text-sm sm:text-base">
              Have a project in mind or just want to say hello? We'd love to
              hear from you. Fill out the form below and we'll get back to you
              as soon as possible.
            </p>
          </div>

          <ul className="border border-white/10 p-6 sm:p-8 rounded-lg">
            <li className="text-white/60 mt-2 sm:mt-4 text-sm sm:text-base">
              <span className="font-light">Email: </span>
              <a
                href="mailto:info@vallinx.eu"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                info@vallinx.eu
              </a>
            </li>
            <li className="text-white/60 mt-2 text-sm sm:text-base">
              <span className="font-light">Address:</span> Via Sommarive, 18,
              38123 Trento TN, Italy
            </li>
            <li className="text-white/60 mt-2 text-sm sm:text-base">
              <span className="font-light">Follow us:</span>
              <a className="cursor-pointer text-white/60 hover:line-through hover:text-white transition-colors duration-300 ml-2">
                Twitter
              </a>
              <span className="mx-2">|</span>
              <a className="cursor-pointer text-white/60 hover:line-through hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
