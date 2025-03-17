import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Loader from '../Loader/Loader'
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import getPhotos from '../../unsplash-api'
import ImageModal from '../ImageModal/ImageModal'
import './App.css'



function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [images, setImages] = useState([]);
  const [modalParams, setModalParams] = useState({
    isOpen: false,
    url: "",
    alt: "",
  });


useEffect(() =>{

  if (searchQuery === ""){
    return;
  }
  async function fetchData() {
    try {
      setIsLoading(true);
      setError(false);
      const { results, totalPages } = await getPhotos(searchQuery, page); // from API
      console.log({results})
      if (results.length === 0) {
        setError("There are no images matching your query");
      }
      setImages((prevImages) => [...prevImages, ...results]);
      setShowLoadMore(totalPages > 1 && page !== totalPages);
    
 } 
catch (error) {
      setError(error.message);
     
    }
     finally {
      setIsLoading(false);
    }
  }

  fetchData();
}, [searchQuery, page]);


function handleSearch(topic) {
  setSearchQuery(topic);
  setPage(1);
  setImages([]);
}


function handleLoadMore() {
  setPage(page + 1);
}


function openModal(image) {
  setModalParams({
    isOpen: true,
    url: image.urls.regular,
    alt: image.description,
  });
}

function closeModal() {
  setModalParams({ isOpen: false, url: "", alt: "" });
}
  return (
    <>

<SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage error={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={openModal}></ImageGallery>
      )}
     {isLoading && <Loader />}
     {images.length > 0 && !isLoading && showLoadMore && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

 {modalParams.isOpen && (<ImageModal modalParams={modalParams} onClose={closeModal} /> )} 
      
  </>
  )
}

export default App;



// ================================================================


 