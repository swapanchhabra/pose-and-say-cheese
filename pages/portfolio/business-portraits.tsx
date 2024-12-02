import React from 'react';

const BusinessPortraits: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Business Portraits</h1>
          <p className="text-lg text-gray-600">
            Elevate your professional image with stunning business portraits.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Your Professional Identity</h2>
          <p className="text-gray-700 leading-relaxed">
            A great business portrait is more than just a photo—it’s a reflection of your
            professionalism and personality. Whether you need a corporate headshot, team
            photos, or portraits for your personal brand, we’ve got you covered.
          </p>
        </section>

        {/* Outdoor Sessions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Outdoor Photo Sessions</h2>
          <div className="flex flex-col sm:flex-row items-center">
            <img
              src="https://pose-and-say-cheese-photography.netlify.app/assets/business/outdoor.jpg"
              alt="Outdoor Business Portrait"
              className="w-full sm:w-1/2 h-64 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
            />
            <p className="text-gray-700 leading-relaxed">
              Bring a natural and approachable feel to your business portraits with our
              outdoor photo sessions. Whether it’s at a scenic park, urban backdrop, or
              a location of your choice, our photographers will capture your best angles
              in natural light.
            </p>
          </div>
        </section>

        {/* Indoor Studio Sessions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Indoor Studio Sessions</h2>
          <div className="flex flex-col sm:flex-row items-center">
            <img
              src="https://pose-and-say-cheese-photography.netlify.app/assets/business/indoor.jpg"
              alt="Indoor Business Portrait"
              className="w-full sm:w-1/2 h-64 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
            />
            <p className="text-gray-700 leading-relaxed">
              Prefer a clean, polished look? Our indoor studio sessions provide a
              controlled environment with professional lighting and backdrops to
              deliver crisp and professional portraits tailored to your needs.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Let’s Get Started!</h2>
          <p className="text-gray-700 mb-6">
            Ready to elevate your professional image? Book a session with us today and
            let’s create stunning business portraits that make a lasting impression.
          </p>
          <a
            href="/contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Book Your Session
          </a>
        </section>
      </div>
    </div>
  );
};

export default BusinessPortraits;
