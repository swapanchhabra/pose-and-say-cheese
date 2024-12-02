import React from 'react';

const NewBorn: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-100 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Newborn Photography</h1>
          <p className="text-lg text-gray-600">
            Cherish the first moments of life with precious newborn photography.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tiny Toes, Big Memories</h2>
          <p className="text-gray-700 leading-relaxed">
            The first few weeks of your newborn's life are magical, fleeting, and filled
            with irreplaceable moments. Let us capture these tender memories with
            beautifully composed portraits that you'll treasure forever.
          </p>
        </section>

        {/* Photo Style */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-gray-700 leading-relaxed">
            Our newborn sessions are designed to ensure the comfort and safety of your
            baby. We use soft, natural lighting, cozy blankets, and minimal props to
            highlight your newborn's innocence and charm.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Book Your Session Today!</h2>
          <p className="text-gray-700 mb-6">
            Create timeless memories with our gentle and caring approach to newborn
            photography.
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

export default NewBorn;
