import piechart from "./piechart.jpg"

const Table = () => {
  return (
    <div>
      <div className="piechart-img">
        <img
          src={piechart}
          alt="Csarnok építés időbeni eloszlása"
        />
      </div>
      <div style={{overflowX: 'auto'}}>
        <table>
          <thead>
            <tr className="table-main">
              <th colSpan={3}>I. Tervezés</th>
            </tr>
            <tr>
              <th>Csarnok épület megvalósításhoz szükséges tevékenységek időigénye (átlagos méreteket és műszaki adottságokat feltételezve)</th>
              <th>Megvalósító</th>
              <th>Átlagos idő, amivel kalkulálni kell</th>
            </tr>
          </thead>
          <tbody>
            <tr className="datatable-rows">
              <td>
                <strong>Csarnok épület és funkció részleteinek összegyűjtése</strong><br />
                A funkcióhoz és technológiához, alapterület, magasság, hőszigetelés, térelválasztások, nyílászárók, bővíthetőség és funkcióátalakítási igény a jövőben
              </td>
              <td>
                Ön, építtető
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows">
              <td>
                <strong>Csarnok látvány elképzelése, ihlet gyűjtés, ötletkeresés</strong><br />
                Cégimage alapján és saját ötlet, ízlés szerint a megjelenés - elképzelt külső átgondolása
              </td>
              <td>
                Ön, építtető
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows">
              <td>
                Építési telek és annak aktuális helyszínrajza
              </td>
              <td>
                Ön, építtető
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows">
              <td>
                <strong>Építésztervező felkeresése, aki az elképzelést formába önti</strong>
              </td>
              <td>
                Ön, építtető
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                <strong>Helyszíni építészeti előírások, jogszabályok és a telekadottságok feltárása</strong>
              </td>
              <td>
                Építész
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Engedélyezési tervezés (látványtervek, metszetek, homlokzatok)
              </td>
              <td>
                Építész
              </td>
              <td>
                ~30-60 nap
              </td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Engedélyezési eljárás
              </td>
              <td>
                Építész
              </td>
              <td>
                ~60 nap
              </td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Építési engedély jogerőre emelése
              </td>
              <td>
                Építész
              </td>
              <td>
                ~30 nap
              </td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Építési felügyelethez történő bejelentési kötelezettség
              </td>
              <td>
                Építész
              </td>
              <td>
                ~15 nap
              </td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Költségvetési kiírás készítése nagyobb csarnokoknál, kisebbeknél nem mindig szükséges - Ön dönti el
              </td>
              <td>
                Építész
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Anyagbeszállító cégek és kivitelezők ajánlati megkeresése tervvel, költségvetési kiírással
              </td>
              <td>
                Ön, építtető
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Talajmechanikai vizsgálatok
              </td>
              <td>
                Építész
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Környezeti hatástanulmány - ha szükséges
              </td>
              <td>
                Szakcégek
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Statikus és egyéb szakági tervezők megbízása, követelmények feltárása, eszerint a szakági tervek elkészítése
              </td>
              <td>
                Építész vagy külön-külön szakági tervezők
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Kiviteli tervezés, kivitelei tervek és gyártmánytervek
              </td>
              <td>
                Építész
              </td>
              <td>
                ~1 hónap
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{overflowX: 'auto'}}>
        <table>
          <thead>
            <tr className="table-main">
              <th colSpan={3}>II. Kivitelezés</th>
            </tr>
            <tr>
              <th>Csarnok kivitelezés lépései</th>
              <th>Megvalósító</th>
              <th>Átlagos idő, amivel kalkulálni kell</th>
            </tr>
          </thead>
          <tbody>
            <tr className="datatable-rows">
              <td>
                <strong>Kivitelező kiválasztása </strong><br />
                (Döntést segíti: referenciák, minőség, műszaki hozzáértés, megbízhatóság, hitelesség, ár)
              </td>
              <td>
                Ön, építtető
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows">
              <td>
                <strong>Építőanyag beszerzések</strong><br />
                (Döntést segíti: műszaki paraméterek, szállítási biztonság, műszaki támogatás és hozzáértés, kivitelezővel, tervezővel szakmai egyeztetési készség, árak)
              </td>
              <td>
                Ön, építtető és, vagy a kivitelezővel közösen
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows">
              <td>
                Szerződéskötés, finanszírozási megállapodás
              </td>
              <td>
                Ön és a kivitelező cég
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Kivitelező által a munkaterület átvétele
              </td>
              <td>
                Kivitelező
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Szerződés szerint a kivitelezés, heti kooperációkkal
              </td>
              <td>
                Kivitelező
              </td>
              <td></td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Csarnok átadása-átvétele
              </td>
              <td>
                Kivitelező
              </td>
              <td>
                ~néhány nap
              </td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Próbaüzem (technológiától függően)
              </td>
              <td>
                Kivitelező
              </td>
              <td>
                ~1-2 hét
              </td>
            </tr>
            <tr className="datatable-rows datatable-light">
              <td>
                Használatbavételi engedély megszerzése, jogerősítése
              </td>
              <td>
                Kivitelező
              </td>
              <td>
                ~30 nap
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table;