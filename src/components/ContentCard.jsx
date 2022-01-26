import { useState } from "react";
import arrow from "./arrow.png";

const ContentCard = (props) => {
  const [type] = useState(props.type);
  
  return (
    <div className="content-card">
      <div className="block full-block">
        <p>Felépítmény anyagára</p>
        <p className="hall-type">
          {type === 'insulated' ? "Hőszigetelt szendvicspaneles" : "Nem hőszigetelt trapézlemezes"}
        </p>
        <h2>
          {type === 'insulated' ? <>80.000 - 95.000 Ft/m<sup>2</sup></> : <>60.000 - 75.000 Ft/m<sup>2</sup></>}
        </h2>
      </div>
      <p className="strong">Mit tartalmaz ez az ár?</p>
      <ul>
          <li>főtartó acél vázszerkezetet</li>
	        <li>másodlagos tartószerkezetet (Z-szelemeneket)</li>
          <li>{type === 'insulated' ? "szendvicspaneleket" : "trapézlemezeket"}</li>
	        <li>ereszcsatornát</li>
	        <li>szegélyeket, csavarokat,</li>
	        <li>kiegészítőket</li>
      </ul>
      <div>
        <img
          src={arrow}
          alt="blue arrow"
          className="arrow"
        />
      </div>
      <div className="block bordered-block">
        <p className="strong">Felépítmény anyagára + kivitelezése</p>
        <p className="regular">
          alapozással,<br />
          nyílászárókkal,<br />
          ipari padlóval együtt
        </p>
      </div>
      <h2>{type === 'insulated' ? <>250.000 - 300.000 Ft/m<sup>2</sup></> : <>150.000 - 200.000 Ft/m<sup>2</sup></>}</h2>
    </div>
  )
}

export default ContentCard;