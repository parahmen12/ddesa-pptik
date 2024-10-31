import React from 'react';
import { useVillageActivities } from '../hooks/useApi';

const VillageActivities = () => {
  const fallbackActivities = [
    {
      id: 1,
      title: "Penyuluhan Pertanian",
      image: "https://www.metromedianews.co/wp-content/uploads/2021/07/IMG-20210713-WA0005.jpg", 
      description: "Penyuluhan tentang teknik pertanian modern dan ramah lingkungan.",
    },
    {
      id: 2,
      title: "Pelatihan Keterampilan",
      image: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/07/19/WhatsApp-Image-2023-07-19-at-110716-660089733.jpg", 
      description: "Pelatihan keterampilan kerajinan tangan untuk meningkatkan perekonomian.",
    },
    {
      id: 3,
      title: "Musyawarah Desa",
      image: "https://i0.wp.com/www.metromedianews.co/wp-content/uploads/2024/05/IMG-20240514-WA0035.jpg?fit=1080%2C605&ssl=1&resize=350%2C200", 
      description: "Musyawarah desa untuk membahas program pembangunan desa.",
    },
  ];

  const { activities, loading, error } = useVillageActivities(); // Mengambil data kegiatan desa dari API
  
  // Menampilkan loading atau error
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;



  return (
    <section className="relative py-12 overflow-hidden bg-purple-300 font-sans">
      {/* Background miring */}
      <div className="absolute inset-0 transform -skew-y-12 bg-purple-100 z-0"></div>

      {/* Konten utama */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Judul Kegiatan Desa di sebelah kanan pada layar besar */}
          <div className="w-full md:w-1/3 text-left md:text-right mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 animate-fadeInRight">Kegiatan Desa</h2>
          </div>

          {/* Daftar Kegiatan Desa di sebelah kiri */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fadeIn">
          {Array.isArray(activities) && activities.map((activities, index) => (
              <div
                key={activities.id}
                className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 z-10"
              >
                <img
                  src={activities.file ? `https://bucket-2.nos.wjv-1.neo.id/${activities.file}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QjtiRXSUx_LQ0uo5ddQjsHqT1l-_59_0eA&s"}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {activities.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {activities.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillageActivities;