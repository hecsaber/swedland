import { useState, useEffect } from 'react';
import './App.css';
import ContentCard from './components/ContentCard';
import Header from './components/Header';
import Images from './components/Images';
import InfoCard from './components/InfoCard';
import Navbar from './components/Navbar';

function App() {

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
        <Header menuItems={menuItems} />
      </header>
      <div className='inner-content'>
        <article>
          <h1 id="becsult-arak">
            1. Becsült árak – m<sup>2</sup>-re vetítve:
          </h1>
          <p>
            Az Ön 500 - 3000 m<sup>2</sup> közötti épületének előzetes tájékoztató, tervek nélkül bekerülési költségei a következők lennének:
          </p>
          <p>
            A. Az épület felépítményének az anyagára
          </p>
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
          <p>
            A feltüntetett ár hozzávetőleges árra vonatkozik.
            Speciális igények (pl. daruk, kapuk, több szint, belső térelválasztás, stb) nagymértékben befolyásolják a tényleges árakat.
          </p>
          <p>
            A fenti indikatív árak 2022 januári kalkulációk, amelyek az alapanyagárak ingadozásától függően változhatnak.            
          </p>
        </article>
        <article>
          <h1 id='merfoldkovek'>
            2. Megvalósítás fontos mérföldkövei:
          </h1>
          <p>
            Vázlatosan és nagyságrendi időtartamokkal a csarnok megvalósítás főbb lépései és a folyamat globális áttekintése céljából.
          </p>
          <p>
            Az első lépés a pontos épület igények, telek megléte és finanszírozás biztosítását követően a tervezés, a tervekkel az ajánlatok bekérése és a pályázaton való elindulás is megalapozható.
            Tervek alapján kapott ajánlatok már egymással jobban összehasonlíthatóak és a tényleges költséget jobban megközelíti,
            ami eltérő lett a műszaki tartalom ezt mindig meg kell nézni, hogy melyik az előnyösebb a cél, az épület és a hosszú távú működés és a gazdaságosság szempontjából.
          </p>
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
            <Images type="image" />
          </div>
        </article>
      </div>
      <div className='full-width'>
        <div className='inner-content inner-double'>
          <Images type="video" />
        </div>
      </div>
      <div className='inner-content last-content'>
        <p>
          Bízzunk benne, hogy a fenti információkkal a segítségére voltunk, kérjük, ha egyéni műszaki vagy más jellegű kérdése felmerült keressen minket.
          Kérdéseit örömmel vesszük, kérjük, hogy hívja kollégánkat, Csillik Áront a <a href="tel:+36305062072">+36 30 506 2072</a> számon,
          vagy írjon közvetlenül az <a href="mailto:aron.csillik@swedsteel.hu">aron.csillik@swedsteel.hu</a> mailcímre.
        </p>
        <p>
          Ha szeretne egy Swedsteel csarnok megépítéséről további információkat kapni, kérjük itt jelezze, és elküldjünk Önnek. 
        </p>
        <p>
          Kérek további Swedsteel csarnok építési információt!
        </p>
        <p>
          Üdvözlettel:<br />
          Swedsteel-Metecno Kft., Biatorbágy
        </p>
      </div>
    </div>
  );
}

export default App;
