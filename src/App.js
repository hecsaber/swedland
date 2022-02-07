import { useState, useEffect } from 'react';
import './App.css';
import ContentCard from './components/ContentCard';
import Header from './components/Header';
import Images from './components/Images';
import InfoCard from './components/InfoCard';
import Navbar from './components/Navbar';
import Table from './components/Table';
import ipari from './components/ipari_tipusepulet.jpg';
import agrar from './components/agrar_tipusepulet.jpg';

function App(props) {

  const [type] = useState(props.type);
  const [menuItems, setMenuItems] = useState([]);
  const [isInsulated, setInsulated] =useState(true);

  useEffect(() => {
    const width = document.body.clientWidth;
    let menuArray = []
    menuArray = [
        {name: "Becsült árak", id: "becsult-arak"},
        {name: "Megvalósítás mérföldkövei", id: "merfoldkovek"},
        {name: "Szaktervezői ajánlás", id: "szaktervezo"},
        {name: "Referenciák, videók", id: "referencia"}
      ]
    if (width > 800) {
      menuArray = menuArray.map((el, ind) => {
        el.name = el.name.replace(" ", "\n");
        return el;
      });
    }
    setMenuItems([...menuArray]);
  }, [])

  const insulate = () => {
    setInsulated(true);
  }

  const densulate = () => {
    setInsulated(false);
  }

  return (
    <div className="content">
      <header className="top-header">
        <Navbar menuItems={menuItems} />
        <Header menuItems={menuItems} type={type} />
      </header>
      <div className='inner-content'>
        <article>
          <h1 id="becsult-arak">
            1. Becsült árak – m<sup>2</sup>-re vetítve:
          </h1>
          <p>
            Az Ön 500 - 3000 m<sup>2</sup> közötti Swedsteel acélvázas csarnoképületének előzetes tájékoztató, tervek nélkül bekerülési költségei a következők lennének:
          </p>
          <div className="single-img type-img">
            <img
              src={ type === 'ipar' ? ipari : agrar }
              alt="Standard acélvázas csarnoképület geometria"
            />
          </div>
          <div className='slide-buttons'>
            <div
              className={isInsulated ? 'slide-button button-active' : 'slide-button' } 
              onClick={insulate}
            >
              Hőszigetelt
            </div>
            <div 
              className={isInsulated ? 'slide-button' : 'slide-button button-active' }
              onClick={densulate}
            >
              Szigeteletlen
            </div>
          </div>
          <div className={isInsulated ? 'inner-double inner-slide' : 'inner-double inner-slide slide-active'}>
            <ContentCard type="insulated" />
            <ContentCard type="non-insulated" />
          </div>
          <p className="additional-info">
            A feltüntetett árak hozzávetőleges, becsült árak a fenti képen látható csarnok szerinti legjellemzőbb könnyűszerkezetes formára kalkulálva.<br />
            Az épülete olyan egyedi speciális igényei, mint pl. daruk, kapuk száma, több szint, belső térelválasztások, fejépület és stb. természetesen módosítják és befolyásolják a tényleges árakat.
            Az elkészült tervek alapján lehet majd egyedileg Önnek a pontos épületére pontos ajánlatot készíteni.
          </p>
          <p className="additional-info">
            Továbbá fontos megjegyezni, hogy a fenti indikatív árak 2022. januári kalkulációval készültek, amelyek az alapanyagárak ingadozásától függően változhatnak.            
          </p>
        </article>
        <article>
          <h1 id='merfoldkovek'>
            2. Megvalósítás fontos mérföldkövei:
          </h1>
          <p>
            Vázlatosan és nagyságrendi időtartamokkal a csarnok megvalósítás főbb lépései és a folyamat globális áttekintése céljából:
          </p>
          <ul>
            <li>az első lépés a pontos épület igények, a telek megléte és finanszírozás biztosítását követően a tervezés</li>
            <li>a tervekkel az ajánlatok bekérése (opció: pályázathoz terv+ajánlat benyújtás)</li>
          </ul>
          <p>
            A tervek alapján kapott ajánlatok már egymással jobban összehasonlíthatóak és a tényleges költséget jobban megközelítik.
          </p>
          <div className='highlighted-info'>
            <span>
              <SvgComponent className="lightbulb"/>
            </span>
            <p>
              FONTOS! Eltérő lehet az ajánlatok műszaki tartalma, ezt mindig meg kell nézni tervezővel vagy az ajánlatkészítő műszaki mérnökével egyeztetni. 
            </p>
          </div>
          <p>  
            Így lesz  jól látható, Önnek melyik az előnyösebb az épület hosszú távú működése és a gazdaságosság szempontjából.
          </p>
          <Table />
        </article>
        <article>
          <h1 id="szaktervezo">3. Tervezés</h1>
          <div className='inner-double'>
            <InfoCard design='haveplan' />
            <InfoCard design='noplan' />
          </div>
        </article>
        <article>
          <h1 id="referencia">4. Referenciák és videók</h1>
          <p>Szeretnénk az Ön épületéhez hasonló funkciókra megvalósult Swedsteel csarnokokat megmutatni. Tekintsen bele!</p>
          <div className='inner-double'>
            <Images type="image" category={type} />
          </div>
        </article>
      </div>
      <div className='full-width'>
        <div className='inner-content inner-double'>
          <Images type="video" category={type} />
        </div>
      </div>
      <div className='inner-content last-content'>
        <p>
          Bízzunk benne, hogy a fenti információkkal a segítségére voltunk, kérjük, ha egyéni műszaki vagy más jellegű kérdése felmerült keressen minket.
        </p>
        <p>
          Kérdéseit örömmel vesszük, kérjük, hogy hívja kollégánkat, Csillik Áront a <a href="tel:+36305062072">+36 30 506 2072</a> számon,
          vagy írjon közvetlenül az <a href="mailto:aron.csillik@swedsteel.hu">aron.csillik@swedsteel.hu</a> mailcímre.
        </p>
        <p>
          Ha szeretne egy Swedsteel csarnok megépítéséről további információkat kapni, kérjük <a href="mailto:info@swedsteel.hu">itt</a> jelezze, és elküldjünk Önnek. 
        </p>
        <p>
          Üdvözlettel:<br />
          Swedsteel-Metecno Kft., Biatorbágy
        </p>
      </div>
    </div>
  );
}

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 489.242 489.242"
    style={{
      enableBackground: "new 0 0 489.242 489.242",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path d="M416.321 171.943c0-97.8-82.2-176.9-181-171.7-89.5 5.2-160.3 79.1-162.4 168.6 0 44.7 16.6 86.3 45.8 118.6 47.7 51.1 41.6 110.3 41.6 110.3 0 11.4 9.4 20.8 20.8 20.8h126.9c11.4 0 20.8-9.4 21.8-20.8 0 0-7-57.7 40.6-109.2 29.2-31.3 45.9-72.9 45.9-116.6zm-128 206h-87.4c-2.1-42.7-20.8-84.3-51-116.5-22.9-25-34.3-57.2-34.3-90.5 1-68.7 54.1-124.8 122.8-129 74.9-4.2 137.3 56.2 137.3 130 0 32.3-12.5 64.5-35.4 88.4-31.2 33.3-49.9 74.9-52 117.6zM281.021 447.643h-73.9c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8h73.9c11.4 0 20.8-9.4 20.8-20.8s-9.3-20.8-20.8-20.8z" />
  </svg>
)

export default App;
