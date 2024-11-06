import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useVillageNews } from '../hooks/useApi';

const VillageNews = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const { news, loading, error } = useVillageNews(); // Mengambil berita desa dari API
  
  // Menampilkan loading atau error
  if (loading) return <div className="text-center text-white">Loading...</div>;
  if (error) return <div className="text-center text-white">Error: {error.message}</div>;

  return (
    <div className="py-16 bg-gradient-to-r from-blue-800 to-purple-400 min-h-screen font-sans">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left h-full">
        {/* Bagian kiri: Teks */}
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 flex flex-col items-center md:items-start md:mt-40">
          <h2 className="text-4xl font-bold mb-6 text-white">Berita Desa</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Jelajahi berita-berita terbaru dari desa kami, mulai dari UMKM, Bupati, hingga kesenian dan kegiatan sosial masyarakat.
          </p>
        </div>

        {/* Garis pembagi vertikal */}
        <div className="hidden md:block w-[1px] bg-white h-48 mx-8 md:mt-40"></div>

        {/* Bagian kanan: Slider gambar */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:mx-4 md:mt-40">
          <Slider {...settings} className="w-full">
            {news && news.length > 0 ? (
              news.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={`https://bucket-2.nos.wjv-1.neo.id/${item.file}`} // Mengambil URL gambar dari API
                    alt={`News ${index + 1}`}
                    className="h-64 w-full object-cover rounded-lg shadow-lg mb-4" // Menambahkan jarak
                  />
                  <p className="text-white mt-2 text-center">{item.description}</p> {/* Keterangan dari API */}
                </div>
              ))
            ) : (
              <p className="text-white">Tidak ada berita tersedia.</p>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VillageNews;
