import { useState } from "react"
import { useEffect } from "react/cjs/react.development";

const ImageModal = (props) => {
  
  const handleClick = () => {
    props.setModal(null)
  }

  const [type] = useState(props.type);
  const [videoSrc, setVideoSrc] =useState(null);

  useEffect(() => {
    if (type === 'video') {
      setVideoSrc(props.videoSrc);
    }
  }, [])

  useEffect(() => {
    console.log(videoSrc);

  }, [videoSrc])
  
  const imageType = (
    <div
      className="image-modal"
      onClick={handleClick}  
    >
      <div className="modal-close"></div>
      <img
        src={props.src}
        alt={props.alt}
      />
    </div>
  )

  const videoType = (
    <div
      className="image-modal"
      onClick={handleClick}  
    >
      <div className="modal-close" onClick={handleClick}></div>
      <iframe
        width={document.body.clientWidth < 800 ? "100%" : "1600"}
        height={document.body.clientWidth < 800 ? "100%" : "900"}
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )

  return (
    <>
      { type === 'image' ? imageType : videoType }
    </>
  )
}

export default ImageModal;