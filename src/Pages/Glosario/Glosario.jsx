import "./Glosario.css"
import Header from "../../Components/Header/Header"
import {DataGlosario} from "./GlosarioInformation";
import CardAbout from "../About/CardAbout/CardAbout";

function Glosario() {
  return (
    <>
      <Header />
      <div className="ContainerGlosario">
        <h3 className="TitleGlosario">Glosario</h3>
        <div>
          {DataGlosario.map((Element ,index) => <CardAbout key={index} dataInformation={Element} /> )}
        </div>
      </div>
    </>

  )
}
export default Glosario