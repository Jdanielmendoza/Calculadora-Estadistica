import "./About.css"
import style from "styled-components"
import Header from "../../Components/Header/Header"
import { data } from "./AboutInformation"
import CardAbout from "./CardAbout/CardAbout"

function About() {

  return (
    <div className="ContainerAbouts" >
      <Header className="HeaderAbout" />
      <div className="FirstSectionAbout">
        <h3 className="TitleAbout">Acerca de Calculadora<br />Estadística</h3>
        <p className="SubtitleAbout">Nuestra calculadora estadística es una herramienta poderosa para el análisis de datos. <br /> <br />
          Permite a los usuarios ingresar datos recopilados y generar automáticamente gráficos estadísticos
        </p>
      </div>

      <div id="InformationAboutDescription" >
        {data.map((information,index) => <CardAbout key={index} dataInformation={information} />)}
      </div>

    </div>
  )
}
export default About