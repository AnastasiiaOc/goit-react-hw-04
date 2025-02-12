import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({images, onClick}) {

return (<ul className={css.gallery}>
	{/* Набір елементів списку із зображеннями */}
	{images.map((image)=>{
		return (
		<li key = {image.id} className={css.galleryItem}>
		<ImageCard image={image} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}
		
	


// Галерея повинна рендеритися лише тоді, коли є які-небудь завантажені зображення. Це добра практика не включати елемент li в компонент карточки, а залишити його частиною компонента галереї.



// export default function ImageGallery({ images, onClick }) {
//   return (
//     <ul className={style.gallery}>
//       {images.map((image) => {
//         return (
//           <li className={style.galleryItem} key={image.id}>
//             <ImageCard image={image} onClick={onClick} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }