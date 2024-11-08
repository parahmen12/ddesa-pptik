import React from 'react';
import { useVillageActivities } from '../hooks/useApi';

const VillageActivities = () => {
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
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Judul Kegiatan Desa di sebelah kanan pada layar besar */}
          <div className="w-full md:w-1/3 text-left md:text-right">
            <h2 className="text-4xl font-bold text-gray-800 animate-fadeInRight">Kegiatan Desa</h2>
          </div>
        </div>

        {/* Daftar Kegiatan Desa di sebelah kiri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {Array.isArray(activities) && activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={activity.file ? `https://bucket-2.nos.wjv-1.neo.id/${activity.file}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QjtiRXSUx_LQ0uo5ddQjsHqT1l-_59_0eA&s"}
                className="w-full h-48 object-cover rounded-lg mb-4"
                alt={activity.name}
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {activity.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillageActivities;
