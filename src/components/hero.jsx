import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="relative h-screen flex items-center font-sans justify-between px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-400 opacity-100"></div> 

      {/* Bagian teks */}
      <div data-aos="fade-right" className="relative z-10 p-8 rounded-lg w-1/2 text-left">
        <h1 className="text-4xl font-extrabold italic mb-2 text-white">Desa Kelurahan Cibangkong</h1>
        <h3 className="text-2xl font-semibold mb-4 text-white">Kabupaten Bandung</h3>
        <hr className="border-b-2 border-gray-700 w-24 mb-4" />
        <p className="mb-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deleniti soluta. Commodi libero eum molestias ipsam nihil quasi, autem iusto dignissimos ducimus ut labore ab facilis, reiciendis officiis distinctio. Cum.</p>
        <button
          className="bg-gradient-to-r from-yellow-500 to-orange-400 hover:to-yellow-300 transition-transform transform hover:scale-105 duration-500 text-white px-4 py-2 rounded-full"
          onClick={() => {
            const section = document.getElementById('villageArea');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div className="text-white hover:text-gray-400">Wilayah</div>
        </button>
      </div>

      <div className="relative z-10 w-1/3 flex justify-center">
        {/* Lingkaran kuning di belakang gambar */}
        <div data-aos="slide-right" className="absolute w-64 h-64 bg-yellow-300 rounded-full z-0"></div>
        <img
          src="/img/MobileApps.png"
          alt="Profil Desa"
          data-aos="slide-up" 
          className="w-full h-full object-cover relative z-10" 
        />
      </div>

      {/* Card  */}
      <div className="absolute bottom-0 left-16 w-24 h-24 bg-blue-500 rounded-full transform translate-y-1/2 shadow-lg"></div>
    </div>
  );
};

export default Hero;
