import React from 'react';

const FamilyPortraits: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Family Portraits</h1>
          <p className="text-lg text-gray-600">
            Celebrate the bond of family with timeless portraits.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Together is a Beautiful Place</h2>
          <p className="text-gray-700 leading-relaxed">
            Every family has a unique story. Our family portrait sessions are designed to
            capture the joy, love, and connections that make your family special.
          </p>
        </section>

        {/* Outdoor and Indoor Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tailored to You</h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you prefer a relaxed outdoor setting or a polished studio look, we’ll
            work with you to create portraits that reflect your family’s personality and
            style.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Capture the Love</h2>
          <p className="text-gray-700 mb-6">
            Let’s create family portraits that you’ll cherish for generations.
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

export default FamilyPortraits;
