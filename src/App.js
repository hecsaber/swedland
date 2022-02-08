import { useState, useEffect } from 'react';
import './App.css';
import ContentCard from './components/ContentCard';
import Header from './components/Header';
import Images from './components/Images';
import InfoCard from './components/InfoCard';
import Navbar from './components/Navbar';
import Table from './components/Table';
import hall from './components/10_komplett.png';

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
          <div className='highlighted-info' id='hall-container'>
            <div className='highlighted-img'>
              <img
                src={hall}
                alt="tipikus acélcsarnok forma"
              />
            </div>
            <div>
              <p>
                A feltüntetett árak hozzávetőleges, becsült árak a fenti képen látható csarnok szerinti legjellemzőbb könnyűszerkezetes formára kalkulálva.<br />
                Az épülete olyan egyedi speciális igényei, mint pl. daruk, kapuk száma, több szint, belső térelválasztások, fejépület és stb. természetesen módosítják és befolyásolják a tényleges árakat.
                Az elkészült tervek alapján lehet majd egyedileg Önnek a pontos épületére pontos ajánlatot készíteni.
              </p>
              <p className="additional-info">
                Továbbá fontos megjegyezni, hogy a fenti indikatív árak 2022. januári kalkulációval készültek, amelyek az alapanyagárak ingadozásától függően változhatnak.            
              </p>
            </div>
          </div>
        </article>
        <article>
          <h1 id='merfoldkovek'>
            2. Megvalósítás fontos mérföldkövei:
          </h1>
          <p>
            Megvalósítás, csarnoképítés főbb lépései vázlatosan és nagyságrendi időtartamokkal a folyamat globális áttekintése céljából:
          </p>
          <ul>
            <li>első lépés a tervezés, tervező felkeresése az épület, a funkció(k), technológia, méretigény pontos megadásával, a telek, építkezés helyszín pontos helyével és a  megvalósítás, üzembevétel idejének kitűzésével, finanszírozás biztosításával</li>
            <li>a tervekkel az ajánlatok bekérése (pályázat igénybevételéhez a tervek és az ajánlat is szükséges)</li>
          </ul>
          <div className='highlighted-info'>
            <span>
              <SvgComponent className="lightbulb"/>
            </span>
            <div>
              <p>
                FONTOS! A tervek alapján kapott ajánlatok már egymással jobban összehasonlíthatóak és a tényleges végső költséget jobban megközelítik. 
              </p>
              <p>
                Az ajánlatok műszaki tartalma nem lesz azonos, mivel a gyártók termékeinek műszaki paraméterei nem azonosak, az összehasonlításukhoz akár a tervezővel,
                akár velünk, az ajánlatkészítő műszaki mérnökeinkkel tud egyeztetni telefonon vagy személyesen a gyárunkban.
              </p>
              <p>
                Több műszaki és gazdaságossági megoldásban lehet gondolkodni, ehhez kell a tervező-gyártó-kivitelező közös egyeztetése Önnel.
                Így nem lesznek menetközben sem váratlan események.
              </p>
            </div>
          </div>
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
          Ha szeretne egy Swedsteel csarnok megépítéséről további információkat kapni, kérjük <a href="mailto:info@swedsteel.hu">itt</a> jelezze, és elküldjük Önnek. 
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
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M14 19h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 2h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218L14.25 23zM18 9.201c0 3.569-3.214 5.983-3.214 8.799h-1.989c-.003-1.858.87-3.389 1.721-4.867C15.279 11.808 16 10.556 16 9.201c0-2.592-2.075-3.772-4.003-3.772C10.072 5.429 8 6.609 8 9.201c0 1.355.721 2.607 1.482 3.932.851 1.478 1.725 3.009 1.72 4.867H9.214C9.214 15.184 6 12.77 6 9.201c0-3.723 2.998-5.772 5.997-5.772C14.998 3.429 18 5.48 18 9.201zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69H22zM11.352 1.957V0h1.371v1.964a7.73 7.73 0 0 0-1.371-.007zM7.609 3.251l-1.04-1.94L7.777.663l1.037 1.933a7.77 7.77 0 0 0-1.205.655zm10.586 1.735 1.942-1.394.799 1.115-2.054 1.473a6.697 6.697 0 0 0-.687-1.194zm-3.01-2.389L16.223.663l1.208.648-1.041 1.941a7.763 7.763 0 0 0-1.205-.655zM5.117 6.18 3.063 4.708l.799-1.115 1.942 1.393a6.688 6.688 0 0 0-.687 1.194zm13.707 6.223 2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zM5.716 13.558l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zM4.538 9.882H2V8.51h2.535a8.612 8.612 0 0 0-.035.691c0 .233.018.458.038.681z" />
  </svg>
)

export default App;
