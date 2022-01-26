const HeaderCards = (props) => {
  return (
    <div className="single-card">
      <img
        src={props.source}
        alt={props.alt}
      />
      <p dangerouslySetInnerHTML={{ __html: props.content}} />
    </div>
  )
}

export default HeaderCards;