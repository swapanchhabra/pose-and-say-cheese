import React from 'react';

const FashionPortraits: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Fashion Portraits</h1>
          <p className="text-lg text-gray-600">
            Unleash your inner model with striking fashion portraits.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Style Meets Creativity</h2>
          <p className="text-gray-700 leading-relaxed">
            From high-fashion editorials to personal portfolio shoots, our fashion
            photography is designed to bring out your best angles and unique style. Let's
            create images that make a bold statement.
          </p>
        </section>

        {/* Studio and Location Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Studio or On Location</h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you prefer the controlled environment of a studio or the dynamic
            energy of an outdoor shoot, we offer flexibility to suit your needs. With
            professional lighting and expert direction, you're in safe hands.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Step into the Spotlight</h2>
          <p className="text-gray-700 mb-6">
            Ready to elevate your fashion portfolio? Let’s make it happen.
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

export default FashionPortraits;
