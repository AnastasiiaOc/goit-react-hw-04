import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const API_KEY = 'nvTchFPSMUWBBPhOuTNEzyZIhqFG5x--XI76MHD7Qqk';

export default async function getPhotos(searchQuery, page) {
    
  
// const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    const response = await axios.get("/search/photos", {
        params: {
        client_id: API_KEY,
        query:searchQuery,
        page,
        per_page: 12,
        orientation: "landscape",
        },
      });
        return {
            results: response.data.results,
            totalPages: response.data.total_pages,
          };
    };
    
