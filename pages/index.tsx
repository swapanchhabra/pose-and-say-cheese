import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

const Home: React.FC = () => {
  // Photos for desktop and mobile
  const portfolioItems = [
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/wedding1.jpg',
      mobileImage: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/mobile/wedding1.jpg',
      title: 'Wedding Photography',
      link: '/portfolio/weddings',
    },
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/business1.jpg',
      mobileImage: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/mobile/business1.jpg',
      title: 'Business Portraits',
      link: '/portfolio/business-portraits',
    },
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/newborn1.jpg',
      mobileImage: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/mobile/newborn1.jpg',
      title: 'Newborn Photography',
      link: '/portfolio/new-born',
    },
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/pregnancy1.jpg',
      mobileImage: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/mobile/pregnancy1.jpg',
      title: 'Pregnancy Photography',
      link: '/portfolio/pregnancy',
    },
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/family1.jpg',
      mobileImage: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/mobile/family1.jpg',
      title: 'Family Portraits',
      link: '/portfolio/family-portraits',
    },
    {
      image: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/fashion1.jpg',
      mobileImage: 'https://pose-and-say-cheese-photography.netlify.app/assets/carousel/mobile/fashion1.jpg',
      title: 'Fashion Photography',
      link: '/portfolio/fashion-portraits',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <main>
      {/* Carousel Section */}
      <section className="relative">
        <Slider {...settings} className="carousel">
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Responsive Images */}
              <picture>
                <source media="(max-width: 768px)" srcSet={item.mobileImage} />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-screen object-cover"
                />
              </picture>
              {/* Button */}
              <div className="absolute bottom-10 left-10">
                <Link
                  href={item.link}
                  className="text-white border border-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-white hover:text-black transition-all"
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Other Sections */}
      <section className="mt-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p>We specialize in capturing timeless moments across a variety of genres:</p>
        <ul className="list-none mt-4 space-y-2">
          <li>📸 Wedding Photography</li>
          <li>👨‍💼 Business Portraits</li>
          <li>👶 Newborn Photography</li>
          <li>👪 Family Portraits</li>
          <li>🤰 Pregnancy Photography</li>
          <li>👗 Fashion Photography</li>
        </ul>
      </section>

      <section className="mt-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Explore Our Work</h2>
        <p>
          Check out our{' '}
          <Link href="/portfolio" className="text-blue-500 hover:underline">
            portfolio
          </Link>{' '}
          to see our latest projects.
        </p>
      </section>
    </main>
  );
};

export default Home;
