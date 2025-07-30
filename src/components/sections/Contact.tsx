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

          <div className="border border-white/10 p-8 rounded-lg mt-8">
            <p className="text-white/40 text-xs leading-relaxed max-w-sm">
              By sending this message, you consent to the processing of the personal data provided 
              (email address and message) exclusively to receive a response to your request.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
