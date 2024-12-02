import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

const Home: React.FC = () => {
  const portfolioItems = [
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/carousel/wedding1.jpg',
      title: 'Wedding Photography',
      link: '/portfolio/weddings',
    },
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/carousel/business1.jpg',
      title: 'Business Portraits',
      link: '/portfolio/business-portraits',
    },
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/carousel/newborn1.jpg',
      title: 'Newborn Photography',
      link: '/portfolio/new-born',
    },
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/carousel/pregnancy1.jpg',
      title: 'Pregnancy Photography',
      link: '/portfolio/pregnancy',
    },
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/carousel/family1.jpg',
      title: 'Family Portraits',
      link: '/portfolio/family-portraits',
    },
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/carousel/fashion1.jpg',
      title: 'Fashion Photography',
      link: '/portfolio/fashion-portraits',
    },
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Enables fade transition
  };

  return (
    <main className="px-4 text-center">
      {/* Title with Link */}
      <h1 className="text-3xl font-bold mb-6">
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Pose and Say Cheese!
        </Link>
      </h1>

      <p className="mb-6">Your one-stop solution for professional photography services.</p>

      {/* Carousel Section */}
      <section className="mb-8">
        <Slider {...settings}>
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
                <h2 className="text-white text-xl font-semibold mb-4">{item.title}</h2>
                <Link
                  href={item.link}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Our Services Section */}
      <section style={{ marginTop: '40px' }}>
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p>We specialize in capturing timeless moments across a variety of genres:</p>
        <ul className="list-none p-0 mt-4">
          <li>📸 Wedding Photography</li>
          <li>👨‍💼 Business Portraits</li>
          <li>👶 Newborn Photography</li>
          <li>👪 Family Portraits</li>
          <li>🤰 Pregnancy Photography</li>
          <li>👗 Fashion Photography</li>
        </ul>
      </section>

      {/* Explore Our Work Section */}
      <section style={{ marginTop: '40px' }}>
        <h2 className="text-2xl font-bold mb-4">Explore Our Work</h2>
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
