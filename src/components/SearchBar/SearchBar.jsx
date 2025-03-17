
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";


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
    <header className={css.searchbar}>
      <Toaster />
      <form  onSubmit={handleSubmit} className={css.form}>
        <input className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
         
        />
        <button type="submit" className={css.searchBarButton} >
     Search
        </button>
      </form>
    </header>
  );
}


// ==========formik===================
// import {Field, Form, Formik} from 'formik'

// export default function SearchBar ({onSearch}){

//   return (

//  <Formik 

//   initialValues={{
//     topic:"",}}
//     onSubmit ={(values, actions) => {
//       onSearch(values.topic)
//       actions.resetForm()
//     }}>
//       <Form className ={css.searchBar}>
//       <Field className ={css.input}
//       type="text"
//       autoComplete="off"
//       autoFocus
//       placeholder="Search images and photos"
//       name = "topic"
//     />
//     <button type="submit" className={css.searchBarButton}>Search</button>
//     <Toaster />

//       </Form>
    
//   </Formik>

  
 
//   );
// }

