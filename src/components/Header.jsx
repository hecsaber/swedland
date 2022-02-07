import pricetag from "./pricetag.png";
import milestone from "./mission.png";
import plan from "./plan.png";
import gallery from "./images.png";
import HeaderCards from "./HeaderCards";
import { useState } from "react";

const Header = (props) => {
  const [ type ] = useState(props.type);
  const topics = [
    {
      source: pricetag,
      alt: "Becsült ár",
      content: "Becsült<br />m<sup>2</sup> árak",
      id: 'becsult-arak'
    },
    {
      source: milestone,
      alt: "Kivitelezési mérföldkövek",
      content: "Megvalósítási<br />mérföldkövek",
      id: 'merfoldkovek'
    },
    {
      source: plan,
      alt: "Tervezői ajánlás",
      content: "Szaktervezői<br />ajánlás",
      id: 'szaktervezo'
    },
    {
      source: gallery,
      alt: "Referencia képek és videók",
      content: "Referenciák,<br />videók",
      id: 'referencia'
    }
  ]

  return (
    <div className={type === 'ipar' ? "header-frame" : "header-frame header-agro"}>
      <div className="header-content">
        <h1>
          Csarnoka, beruházása kapcsán<br />
          4 fontos
          információ az
          elinduláshoz:
        </h1>
        <div className="header-cards">
          {topics.map((val, ind) => (
            <a
              href={`#${val.id}`}
              key={ind}
            >
              <HeaderCards
                source={val.source}
                alt={val.alt}
                content={val.content}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header;