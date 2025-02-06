import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import getPhotos from '../../unsplash-api'
import './App.css'



function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [images, setImages] = useState([]);
  // const [modalParams, setModalParams] = useState({
  //   isOpen: false,
  //   url: "",
  //   alt: "",
  // });
useEffect(() =>{

  if (searchQuery === ""){
    return;
  }
  async function fetchData() {
    try {
      setIsLoading(true);
      setError("");
      const { results, totalPages } = await getPhotos(searchQuery, page);
      if (results.length === 0) {
        setError("There are no images matching your query");
      }
      setImages((prevImages) => [...prevImages, ...results]);
      setShowLoadMore(totalPages > 1 && page !== totalPages);
    } catch (error) {
      setError(error.message);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  fetchData();
}, [searchQuery, page]);




function handleSearch(searchString) {
  setSearchQuery(searchString);
  setPage(1);
  setImages([]);
}

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage error={error} />}
      {images.length > 0 && (
      //   <ImageGallery images={images} onClick={openModal}></ImageGallery>
      // )}
      <ImageGallery images={images}></ImageGallery>
    )}
    
    </>
  )
}

export default App
// nvTchFPSMUWBBPhOuTNEzyZIhqFG5x--XI76MHD7Qqk







// ==============================boys==========================



// export default function App() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [page, setPage] = useState(1);
//   const [showLoadMore, setShowLoadMore] = useState(false);
//   const [images, setImages] = useState([]);
//   const [modalParams, setModalParams] = useState({
//     isOpen: false,
//     url: "",
//     alt: "",
//   });

// useEffect(() => {
//   if (searchQuery === "") {
//     return;
//   }

//   async function fetchData() {
//     try {
//       setIsLoading(true);
//       // setError("");
//       const { results, totalPages } = await getPhotos(searchQuery, page);
//       if (results.length === 0) {
//         throw new Error("error")
//         // setError("There are no images matching your query");
//       }
//       setImages((prevImages) => [...prevImages, ...results]);
//       setShowLoadMore(totalPages > 1 && page !== totalPages);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   fetchData();
// }, [searchQuery, page]);

// function handleSearch(searchString) {
//   setSearchQuery(searchString);
//   setPage(1);
//   setImages([]);
// }




// return (
//   <div>
//     <SearchBar onSearch={handleSearch} />
//     {images.length > 0 && (
//       <ImageGallery images={images} ></ImageGallery>
//     )}
    
//   </div>
// );
// }