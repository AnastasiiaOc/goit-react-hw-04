import ReactModal from 'react-modal';
import css from "./ImageModal.module.css"

// // Під час натискання на зображення галереї повинно відкриватися модальне вікно ImageModal з темним фоном, яке відображатиме зображення у великому форматі. 

export default function ImageModal ({modalParams, onClose}) {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          overflow:'hidden',

        }
      };
    return(
        <ReactModal
        style={customStyles}
        overlayClassName={css.backdrop}
        isOpen={modalParams.isOpen}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        onRequestClose={onClose}
        >
        <img className={css.image} src={modalParams.url} alt ={modalParams.alt} width = "100%"/>
 
        </ReactModal>
      );

}



