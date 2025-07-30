import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black px-4 md:px-8 py-16">
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile Layout - Stack vertically */}
        <div className="flex flex-col lg:flex-row lg:gap-10 lg:justify-between">
          
          {/* Left Column - Info Section */}
          <div className="flex flex-col justify-around mb-8 lg:mb-0 lg:min-w-0 lg:flex-1">
            
            {/* Contact Info Box */}
            <div className="border border-white/10 p-6 md:p-8 mb-6 lg:mb-0">
              <h2 className="text-white text-2xl md:text-3xl font-light tracking-widest mb-4 uppercase">
                Contact Us
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Have a project in mind or just want to say hello? We'd love to
                hear from you. Fill out the form below and we'll get back to you
                as soon as possible.
              </p>
            </div>

            {/* Privacy Notice Box */}
            <div className="border border-white/10 p-6 md:p-8">
              <p className="text-white/40 text-xs leading-relaxed">
                By sending this message, you consent to the processing of the personal data provided 
                (email address and message) exclusively to receive a response to your request.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:flex-1 lg:max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;