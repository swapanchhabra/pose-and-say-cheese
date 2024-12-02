import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_94ojmtg', // Replace with your EmailJS service ID
        'template_0aw450v', // Replace with your EmailJS template ID
        e.currentTarget,
        'a80r_1NesFD4wskg7' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSubmitted(true);
          setIsError(false);
        },
        () => {
          setIsSubmitted(false);
          setIsError(true);
        }
      );

    // Reset the form fields
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image and Text */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/assets/contact-image.jpg"
            alt="Contact"
            className="w-full h-auto object-cover rounded-lg shadow-md mb-6"
          />
          <p className="text-center text-gray-600 italic">
            "We create happiness by capturing the most important moments in our lives."
          </p>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h1>

          {/* Success/Error Messages */}
          {isSubmitted && (
            <p className="text-green-600 text-center mb-4">Your message has been sent successfully!</p>
          )}
          {isError && (
            <p className="text-red-600 text-center mb-4">Something went wrong. Please try again.</p>
          )}

          <form onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-white border border-gray-400 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-100 transition font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
