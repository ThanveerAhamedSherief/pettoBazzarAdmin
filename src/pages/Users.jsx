// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './index.css';

const ITEMS_PER_PAGE = 6;
// let sample = {
//     "images": [
//       { "src": "https://via.placeholder.com/150", "title": "Title 1" },
//       { "src": "https://via.placeholder.com/150", "title": "Title 2" },
//       { "src": "https://via.placeholder.com/150", "title": "Title 3" },
//       { "src": "https://via.placeholder.com/150", "title": "Title 4" },
//       { "src": "https://via.placeholder.com/150", "title": "Title 5" },
//       { "src": "https://via.placeholder.com/150", "title": "Title 6" }
//     ],
//     "totalPages": 5
//   }
function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Use Effect called")
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    console.log("Called fetch data")
    setLoading(true);
    try {
      const response = await axios.get(`https://petshop-m0x2.onrender.com/api/v1/post/getNearByPosts?lat=9.931233&lang=76.267303&page=${page}`);
    //   const response = await axios.get(`https://api.example.com/images?page=${page}&limit=${ITEMS_PER_PAGE}`);
    console.log("Response==>", response)
      setImages(response.data.Data);
      setTotalPages(response.data.Data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((item, index) => (
              <div key={index} className="relative">
                <img src={item.petImages.length ? item.petImages[0] : ""} alt={item.breedName} className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index + 1)}
                className={`px-3 py-1 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Users;