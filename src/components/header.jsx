import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scroll behavior
  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 to-purple-400 shadow-md fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo Desa */}
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Lambang_Kabupaten_Cianjur.svg/1200px-Lambang_Kabupaten_Cianjur.svg.png"
            alt="Logo Desa"
            className="h-10 w-10 mr-2 ml-3"
          />
          <div className="text-white">
            <div className="text-2xl font-extrabold">Kelurahan Cibangkong</div>
            <div className="text-sm font-bold">Kabupaten Bandung</div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex flex-grow justify-center space-x-8 font-sans">
          <a href="#home" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105" onClick={handleScroll}>Home</a>
          <a href="#villageAparatus" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105" onClick={handleScroll}>Aparat Desa</a>
          <a href="#villageNews" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105" onClick={handleScroll}>Berita Desa</a>
          <a href="#villageUmkm" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105" onClick={handleScroll}>UMKM Desa</a>
          <a href="#villageActivities" className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105" onClick={handleScroll}>Kegiatan Desa</a>
        </nav>

        {/* Login Button */}
        <a 
          href="https://kawal-desa.pptik.id/login"
          className="ml-4 mr-3 bg-yellow-300 text-blue-600 px-4 py-2 rounded hover:bg-yellow-400 transition duration-300"
        >
          Login
        </a>

        {/* Mobile Menu Button */}
<button className="md:hidden text-white ml-4" onClick={toggleMenu}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
</button>

{/* Mobile Menu */}
<div
  className={`md:hidden bg-gradient-to-r from-blue-800 to-purple-400 shadow-lg fixed top-0 right-0 h-full w-2/3 transform transition-transform duration-300 ease-in-out ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  <nav className="flex flex-col items-center space-y-4 py-8">
    <a
      href="#home"
      className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105"
      onClick={(e) => {
        toggleMenu();
        handleScroll(e);
      }}
    >
      Home
    </a>
        <a
          href="#villageAparatus"
          className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            toggleMenu();
            handleScroll(e);
          }}
        >
          Aparat Desa
        </a>
        <a
          href="#villageNews"
          className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            toggleMenu();
            handleScroll(e);
          }}
        >
          Berita Desa
        </a>
        <a
          href="#villageUmkm"
          className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            toggleMenu();
            handleScroll(e);
          }}
        >
          UMKM Desa
        </a>
        <a
          href="#villageActivities"
          className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105"
          onClick={(e) => {
            toggleMenu();
            handleScroll(e);
          }}
        >
          Kegiatan Desa
            </a>
          </nav>
        </div>
      </div>  
    </header>
  );
};

export default Header;
