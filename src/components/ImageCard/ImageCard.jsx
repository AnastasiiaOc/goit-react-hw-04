

// export default function ImageCard({image, onClick}){
//  return (<div>
//   <img src={image} alt="" onClick={() => onClick(image)} />
// </div>)
// }




export default function ImageCard({ image, onClick }) {
  return (
    <div >
      <img
       
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
      />
      <ul >
        <li >By {image.user.name}</li>
        <li >❤️ {image.likes}</li>
      </ul>
    </div>
  );
}