
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