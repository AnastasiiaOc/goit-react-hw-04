import ReactModal from 'react-modal';

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
        },
      };
    return(
        <ReactModal
          style={customStyles}
        isOpen={modalParams.isOpen}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        // ariaHideApp={false}
        onRequestClose={onClose}
        >
        <img src={modalParams.url} alt ={modalParams.alt} width = "100%"/>
 
        </ReactModal>
      );

}



