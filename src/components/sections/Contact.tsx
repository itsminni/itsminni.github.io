import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div className="min-h-screen flex  justify-between items-center bg-black px-8 py-16">
      <div className="min-w-3xl flex mx-auto  justify-between">
        <div className="flex flex-col justify-around">
          <div className="border border-white/10 p-8 rounded-lg">
            <h2 className="text-white text-3xl font-light tracking-widest  uppercase">
              Contact Us
            </h2>
            <p className="text-white/60 mt-4 max-w-sm">
              Have a project in mind or just want to say hello? We'd love to
              hear from you. Fill out the form below and we'll get back to you
              as soon as possible.
            </p>
          </div>

          <ul className="border border-white/10 p-8 rounded-lg mt-8">
            <li className="text-white/60 mt-4">
              <span className="font-light">Email: </span>
              <a
                href="mailto:info@yourdomain.com"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                info@yourdomain.com
              </a>
            </li>
            <li className="text-white/60 mt-2">
              <span className="font-light">Address:</span> Via Sommarive, 18,
              38123 Trento TN, Italy
            </li>
            <li className="text-white/60 mt-2">
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
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
