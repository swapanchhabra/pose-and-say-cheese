import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      {/* Title with Link */}
      <h1>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Pose and Say Cheese!
        </Link>
      </h1>

      <p>Your one-stop solution for professional photography services.</p>

      <section style={{ marginTop: '40px' }}>
        <h2>Our Services</h2>
        <p>
          We specialize in capturing timeless moments across a variety of genres:
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>📸 Wedding Photography</li>
          <li>👨‍💼 Business Portraits</li>
          <li>👶 Newborn Photography</li>
          <li>👪 Family Portraits</li>
          <li>🤰 Pregnancy Photography</li>
          <li>👗 Fashion Photography</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>Explore Our Work</h2>
        <p>
          Check out our{' '}
          <Link href="/portfolio" style={{ color: '#0070f3' }}>
            portfolio
          </Link>{' '}
          to see our latest projects.
        </p>
      </section>
    </main>
  );
};

export default Home;
