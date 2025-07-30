import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xwpqbazz");
  const [emailError, setEmailError] = useState('');
  
  if (state.succeeded) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-white/5 blur-xl" />
          <p className="relative text-white text-center py-12 px-8 font-light tracking-wide">
            Message sent successfully. We'll be in touch.
          </p>
        </div>
      </div>
    );
  }
  
  const handleFormSubmit = (e) => {
    const formData = new FormData(e.target);
    const email = formData.get('email');
    
    if (!email || email.trim() === '') {
      e.preventDefault();
      setEmailError('This field is mandatory');
      return;
    }
    
    // Validazione formato email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.toString())) {
      e.preventDefault();
      setEmailError('Please enter a valid email address');
      return;
    }
    
    setEmailError('');
    handleSubmit(e);
  };

  return (
    <form 
      className="max-w-3xl" 
      onSubmit={handleFormSubmit}
    >
      <div className="relative">
        {/* Subtle glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/5 to-white/0 blur-lg" />
        
        <div className="relative bg-black border border-white/10 p-12 space-y-8">
          {/* Email Field */}
          <div className="space-y-3">
            <label 
              htmlFor="email" 
              className="block text-white/60 text-xs uppercase tracking-widest font-light"
            >
              Email <span className="text-red-400">*</span>
            </label>
            <input
              id="email"
              type="text" 
              name="email"
              placeholder="your@email.com"
              onChange={() => setEmailError('')}
              className="w-full bg-transparent text-white border-0 border-b border-white/20 pb-2 
                         focus:outline-none focus:border-white/50 transition-all duration-300
                         placeholder:text-white/30 text-sm font-light"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-400/80 text-xs font-light"
            />
            {emailError && (
              <p className="text-red-400/80 text-xs font-light">{emailError}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-3">
            <label 
              htmlFor="message" 
              className="block text-white/60 text-xs uppercase tracking-widest font-light"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message..."
              className="w-full bg-transparent text-white border-0 border-b border-white/20 pb-2 
                         focus:outline-none focus:border-white/50 transition-all duration-300
                         placeholder:text-white/30 text-sm font-light resize-none"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-400/80 text-xs font-light"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button 
              type="submit" 
              disabled={state.submitting}
              className="group relative w-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-white transform -skew-x-12 -translate-x-full 
                              group-hover:translate-x-0 transition-transform duration-500" />
              
              <span className="relative block py-3 px-8 text-center text-xs uppercase tracking-widest
                               text-white group-hover:text-black transition-colors duration-300
                               border border-white/20 group-hover:border-transparent
                               font-light">
                {state.submitting ? 'Sending...' : 'Send Message'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;