import "./CardAbout.css"

function CardAbout({dataInformation}) {
  const {title , Subtitle} = dataInformation;
  return (
    <div className="ContainerCardAbout" >
        <h1 id="TitleCard" >{title}</h1>
        <p id="SubtitleCard" >{Subtitle}</p>
    </div>
  )
}
export default CardAbout