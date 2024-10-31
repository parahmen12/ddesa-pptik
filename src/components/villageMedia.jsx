import React from "react";

const VillageMedia = () => {

  const stats = [
    { title: "UMKM", count: 42, description: "Jumlah UMKM di desa" },
    { title: "Aparat Desa", count: 12, description: "Jumlah aparat yang bertugas" },
    { title: "Kegiatan Desa", count: 8, description: "Kegiatan desa sepanjang tahun" },
    { title: "Berita Desa", count: 9, description: "Berita seputar desa" },
  ];

  return (  
    <div className="village-media py-16 font-sans">
      <h2 className="text-4xl font-bold text-center mb-12">Statistik Desa</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Menampilkan blok untuk setiap data */}
        {stats.map((stat, index) => (
          <div key={index} className="stat-item p-6 shadow-lg rounded-lg bg-white text-center mr-3 ml-3">
            <h3 className="text-2xl font-semibold mb-4">{stat.title}</h3>
            <p className="text-4xl font-bold text-blue-600">{stat.count}</p>
            <p className="text-gray-600 mt-2">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VillageMedia;
