 // Memastikan hanya menggunakan hook ini
import { useVillageAparatus } from "../hooks/useApi";
import "../input.css";

const VillageAparatus = () => {
  const { aparatus, loading, error } = useVillageAparatus(); // Mengambil profil desa dari API

  // Menampilkan loading atau error
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="py-16 overflow-hidden ml-8 mt-11 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Bagian kiri: Aparat Desa */}
        <div className="w-3/5 marquee-wrapper">
          <div className="marquee">
            <div className="marquee-content flex">
              {/* Menampilkan data aparatDesa lokal */}
              {Array.isArray(aparatus) && aparatus.map((aparat, index) => (
              <div
                key={index}
                className="min-w-[200px] m-4 p-6 border rounded-lg shadow-md transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <img src={aparat.file}  className="h-32 w-32 mx-auto rounded-full mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{aparat.name}</h3>
                <p className="text-gray-600">{aparat.position}</p>
              </div>
))}

            </div>
          </div>
        </div>

        {/* Bagian kanan: Judul dan Profil Desa dari API */}
        <div className="w-2/5 text-right pr-8">
          <h2 className="text-4xl font-bold mb-8">Aparat Desa</h2>
          <p className="text-lg text-gray-600">
            Berbagai posisi penting di desa yang diisi oleh orang-orang berdedikasi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VillageAparatus;
