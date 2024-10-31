// src/components/Footer.jsx
import React, { useState } from 'react';

const Footer = () => {
  // State untuk mengontrol visibilitas navigasi
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo dan Judul */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Lambang_Kabupaten_Cianjur.svg/1200px-Lambang_Kabupaten_Cianjur.svg.png'}
            alt="Logo"
            className="w-16 h-16 mr-3 ml-8"
          />
          <div className="flex flex-col items-start">
            <div className="text-2xl font-extrabold">Desa Cibangkong</div>
            <div className="text-sm font-bold">Kabupaten Bandung</div>
          </div>
        </div>

        {/* Kontak Desa */}
        <div className="text-sm mb-4 md:mb-0 font-sans">
          <h2 className="text-lg font-extrabold mb-3">Kontak Desa</h2>
          <p>Email: cibangkongvillage@gmail.com</p>
          
          <div className="flex space-x-4 mt-1">
            <a 
              href="https://www.facebook.com/prmnh" 
              className="text-gray-400 hover:text-blue-500 transition duration-200" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/rzvnptr" 
              className="text-gray-400 hover:text-pink-500 transition duration-200" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

        </div>

        {/* Navigasi */}
        <div className="mt-4 md:mt-0 font-sans">
          <h2 
            className="text-lg font-extrabold mb-3 cursor-pointer" 
            onClick={toggleNav} // Mengatur toggle saat header navigasi diklik
          >
            Navigasi
          </h2>
          {/* Animasi slide down */}
          <div className={`transition-all duration-300 overflow-hidden ${isNavOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className="flex flex-col md:flex-row md:space-x-4 mr-8">
              <a href="#villageAparatus" className="text-gray-400 hover:text-yellow-700 transition duration-300" onClick={handleScroll}>Aparat Desa</a>
              <a href="#villageNews" className="text-gray-400 hover:text-yellow-700 transition duration-300" onClick={handleScroll}>Berita Desa</a>
              <a href="#villageUmkm" className="text-gray-400 hover:text-yellow-700 transition duration-300" onClick={handleScroll}>UMKM Desa</a>
              <a href="#villageActivities" className="text-gray-400 hover:text-yellow-700 transition duration-300" onClick={handleScroll}>Kegiatan Desa</a>
            </nav>
          </div>
        </div>
      </div>

      <hr className="my-4 border-white-700 mb-2" />

      {/* Informasi Hak Cipta */}
      <div className="text-center mt-10">
        <p className="text-sm">© 2024 Cibangkong. All rights reserved.</p>
        <p className="text-sm text-gray-500">Muhamad Rezvan Putra Pratama</p>
      </div>
    </footer>
  );
};

export default Footer;
