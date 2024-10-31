import API from './api';

// GUID Desa
const GUID = '2305e536-0ef6-48e7-9aac-79ca236433fa';


// Ambil data profile desa
export const fetchVillageProfile = async () => {
  try {
    const response = await API.get('/api/village/profile', {
      params: { guid: GUID },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching village profile:', error);
    throw error;
  }
};

// Ambil data UMKM Desa
export const fetchVillageUMKM = async (page = 1, limit = 10) => {
  try {
    const response = await API.get('/api/umkm/village', {
      params: { guid: GUID, page, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching village UMKM:', error);
    throw error;
  }
};

// Ambil data berita desa
export const fetchVillageNews = async (page = 1, limit = 10) => {
  try {
    const response = await API.get('/api/report/village', {
      params: { guid: GUID, page, limit, type: 'report' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching village news:', error);
    throw error;
  }
};

// Ambil data Aktifitas desa
export const fetchVillageActivities = async (page = 1, limit = 10) => {
  try {
    const response = await API.get('/api/report/village', {
      params: { guid: GUID, page, limit, type: 'activity' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching village activities:', error);
    throw error;
  }
};

// Fungsi untuk mengambil data aparat desa
export const fetchVillageAparatus = async (page = 1, limit = 10) => {
  try {
    const response = await API.get('/api/report/village', {
      params: { guid: GUID, page, limit, type: 'aparatus' }, // Menggunakan GUID dan parameter lainnya
    });
    
    return response.data; // Mengembalikan data yang diterima dari respons
  } catch (error) {
    console.error('Error fetching village Aparatus:', error);
    throw error; // Melempar error untuk penanganan lebih lanjut
  }
};