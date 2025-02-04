
// import toast, { Toaster } from 'react-hot-toast';

// export default function SearchBar() {

//     function handleSubmit(event) {
//         event.preventDefault();
//         const query = event.target.elements.search.value.trim()
//         // const query = event.target.value;
       
//         // query === "" ? toast.error('Hеобхідно ввести текст для пошуку зображень!') : onSearch(query);
//            query === "" ? toast.error('Hеобхідно ввести текст для пошуку зображень!') : console.log(query);

//         event.target.reset;
//     }
//     return(  
//     <header>
//           {/* <Toaster /> */}
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//         name="search"
//       />
//        <button type="submit">Search</button>
//       {/* <button type="submit" onClick={Notify}>Search</button> */}
//       <Toaster />
    
//     </form>
//   </header>)
 
// }


// Якщо під час натискання кнопки відправки форми текстове поле порожнє, покажи користувачеві сповіщення про те, що необхідно ввести текст для пошуку зображень. Ця перевірка виконується в компоненті SearchBar в момент відправки форми. Для сповіщень використовуй бібліотеку React Hot Toast.


// import { FiSearch } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
// import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    const query = evt.target.elements.search.value.trim();
    query === ""
      ? toast.error("Search query cannot be empty!")
      : onSearch(query);
    evt.target.reset();
  }

  return (
    <header >
      <Toaster />
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
         
        />
        <button type="submit" >
     Click on me
        </button>
      </form>
    </header>
  );
}