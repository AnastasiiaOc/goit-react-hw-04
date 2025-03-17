// Компонент ErrorMessage рендериться замість галереї зображень у випадку помилки HTTP-запиту. Достатньо, щоб це було текстове повідомлення.
import css from "./ErrorMessage.module.css"

export default function ErrorMessage({ error }) {
    return <div className={css.errorMessage}>{error}</div>;
  }