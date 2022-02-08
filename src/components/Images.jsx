import gyar from "./nferrum.jpg"
import tauril from "./tauril.jpg"
import piros from "./qualiweld.jpg"
import batz from "./batz.jpg"
import { useEffect, useState } from "react"
import mezotur from "./mezotur.jpg"
import referencia from "./ref-video.jpg"
import ImageModal from "./ImageModal"
import kapoly from "./kapoly.jpg"
import kite from "./kite.jpg"
import kuti from "./kuti.jpg"
import belvard from "./belvardgyula.jpg"
import agrReferencia from "./agr-video.jpg"

const Images = (props) => {
  const [modal, setModal] = useState(null);
  const [collection, setCollection] = useState([]);
  const [type] = useState(props.type);

  useEffect(() => {
    if (props.category === 'ipar') {
      if (type === 'image') {
        setCollection([
          {src: gyar, alt: "Swedsteel gyártócsarnok Nagykanizsán"},
          {src: tauril, alt: "Swedsteel ipari gyártócsarnok, Budapest"},
          {src: piros, alt: "Swedsteel csarnok a Qualiweld részére"},
          {src: batz, alt: "Batz cipő raktárépület a Swedsteel-től"}
        ])
      } else if (type === 'video') {
        setCollection([
          {src: referencia, alt: "Swedsteel megvalósult ipari gyártócsarnok referenciák", text: 'Tekintse meg a megvalósult ipari-, és raktár csarnokainkat ebben a rövid videóban!', videoSrc: 'https://www.youtube.com/embed/W6Kba4JKyQQ'},
          {src: mezotur, alt: "Swedsteel acélvázas csarnok építés közben", text: 'Tekintse meg egyik acélvázas hőszigetelt csarnokunk építését a kis filmünkben!', videoSrc: 'https://www.youtube.com/embed/M3sZW7_vbMw'}
        ])
      }
    } else {
      if (type === 'image') {
        setCollection([
          {src: kapoly, alt: "Swedsteel marhaistállók Kapolyon"},
          {src: kite, alt: "Kite Zrt részére mezőgazdasági géptároló a Swedsteel-től"},
          {src: belvard, alt: "Swedsteel csarnoképület Belvárdgyulán"},
          {src: kuti, alt: "Swedsteel magtároló és nyitott szín"}
        ])
      } else if (type === 'video') {
        setCollection([
          {src: agrReferencia, alt: "Swedsteel megvalósult agrár referenciák", text: 'Tekintse meg a megvalósult mezőgazdasági csarnokainkat ebben a rövid videóban!', videoSrc: 'https://www.youtube.com/embed/DaYMS6X0oRU'},
          {src: mezotur, alt: "Swedsteel acélvázas csarnok építés közben", text: 'Tekintse meg egyik acélvázas hőszigetelt csarnokunk építését a kis filmünkben!', videoSrc: 'https://www.youtube.com/embed/M3sZW7_vbMw'}
        ])
      }
    }
  }, [])

  const handleClick = (e) => {
    setModal(collection[e.currentTarget.id.slice(-1) - 1]);
  }

  const showImage = (
    modal && <ImageModal src={modal.src} alt={modal.alt} setModal={setModal} type={type} videoSrc={type === 'video' && modal.videoSrc } />
  )

  return (
    <>
      {collection.map((val, ind) => (
        <div
          key={ind}
          id={type === 'image' ? `image${ind + 1}` : `video${ind + 1}` }
          onClick={handleClick}
          className="image-list"
        >
          {type === 'video' && <p className="video-text">{val.text}</p>}
          <img
            src={val.src}
            alt={val.alt}
          />
        </div>
      ))}
      {showImage}
    </>
  )
}

export default Images;