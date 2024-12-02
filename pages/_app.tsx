import React from 'react'; 
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
