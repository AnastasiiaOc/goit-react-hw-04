// Компонент ErrorMessage рендериться замість галереї зображень у випадку помилки HTTP-запиту. Достатньо, щоб це було текстове повідомлення.


export default function ErrorMessage({ error }) {
    return <div>{error}</div>;
  }