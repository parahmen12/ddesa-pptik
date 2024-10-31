import React from 'react';
import { useVillageUMKM } from '../hooks/useApi';

const VillageUmkm = () => {
    const { umkm, loading, error } = useVillageUMKM(); // Mengambil data UMKM dari API

    console.log("INI ADALAH UMKM ", umkm);
  
    // Menampilkan loading atau error
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="py-16 font-sans">
            <div className="container mx-auto text-center px-4 md:px-8">
                <h2 className="text-4xl font-bold mb-20 text-gray-800">UMKM Desa Cibangkong</h2>
                
                <div className="grid grid-cols-1 gap-16">
                    {Array.isArray(umkm) && umkm.map((umkm, index) => (
                        <div
                            key={index}
                            className={`mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                                <img
                                    src={umkm.file ? `https://bucket-2.nos.wjv-1.neo.id/${umkm.file}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QjtiRXSUx_LQ0uo5ddQjsHqT1l-_59_0eA&s"}
                                    alt={umkm.name}
                                    className="w-full h-72 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                                />
                            </div>
                            <div className={`md:w-1/2 text-left md:ml-8 mt-6 md:mt-0 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                                <h3 className="text-3xl font-semibold text-gray-800 mb-4">{umkm.name}</h3>
                                <p className="text-lg text-gray-600">{umkm.owner}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VillageUmkm;
