const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'API_KEY';

const apiConfig = {
    getTopRated: (type) => `${baseUrl}${type}/top_rated?api_key=${apiKey}&language=tr-TR`,
    getSearchResults: (query) => `${baseUrl}search/multi?api_key=${apiKey}&include_adult=false&query=${query}&language=tr-TR`,
    getPopular: (type) => `${baseUrl}/discover/${type}?api_key=${apiKey}&language=tr-TR&append_to_response=changes,credits,videos`,
    getDetails: (type, id) => `${baseUrl}${type}/${id}?api_key=${apiKey}&language=tr-TR&append_to_response=changes,credits,videos`,
    originalImage: (img) => `https://image.tmdb.org/t/p/original/${img}`,
    w500Image: (img) => `https://image.tmdb.org/t/p/w500/${img}`,
    w92Image: (img) => `https://image.tmdb.org/t/p/w92/${img}`
};

export default apiConfig;
