const InfoCard = (props) => {
  const havePlan = (
    <>
      <p className="info-head">ha tervei már elkészültek</p>
      <p className="info-content">az engedélyezési tervek alapján ajánlatot tudunk Önnek készíteni, jelezze felénk, küldje el terveit!</p>
    </>
  )

  const noPlan = (
    <>
      <p className="info-head">ha tervei még nem készültek el</p>
      <p className="info-content">és nincs még kiválasztott tervezője, keressen minket és szívesen ajánlunk csarnok szaktervezőt</p>
    </>
  )

  const handleClick = (e) => {
    e.preventDefault();
    window.location = "mailto:info@swedsteel.hu"
  }

  return (
    <div className="info-card">
      <div className="block bordered-block">
        {props.design === 'haveplan' ? havePlan : noPlan}
      </div>
      <button
        className="info-button"
        onClick={handleClick}
      >
        <div className="info-button-inside">
          {props.design === 'haveplan' ? "Csatolom a terveket" : "Kérek szaktervezőt"} 
        </div>
      </button>
    </div>
  )
}

export default InfoCard;