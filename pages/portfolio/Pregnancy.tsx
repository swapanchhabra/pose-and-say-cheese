import React from 'react';

const Pregnancy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pregnancy Photography</h1>
          <p className="text-lg text-gray-600">
            Celebrate the beauty of motherhood with stunning maternity portraits.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">A Celebration of Life</h2>
          <p className="text-gray-700 leading-relaxed">
            Pregnancy is a time of joy, strength, and anticipation. Let us document this
            incredible journey with elegant and heartfelt portraits that honor this
            life-changing experience.
          </p>
        </section>

        {/* Photo Style */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Natural and Artistic</h2>
          <p className="text-gray-700 leading-relaxed">
            Our maternity sessions focus on soft, natural lighting and artistic
            compositions to capture the essence of motherhood. We’ll work with you to
            create a comfortable and empowering environment for your shoot.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Let’s Capture the Glow</h2>
          <p className="text-gray-700 mb-6">
            Book your maternity session today and create memories that last a lifetime.
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

export default Pregnancy;
