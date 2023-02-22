import './App.css'
import BarChartIcon from "./Image/BarChartIcon.png";
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import StepsForBuildFrecuencyTable from './Components/StepsForBuildFrecuencyTable/StepsForBuildFrecuencyTable';
import PoligonoFrec from './Components/PoligonoFrec/PoligonoFrec';
import Ojivas from './Components/Ojivas/Ojivas';
import HistogramaFrec from './Components/HistogramaFrec/HistogramaFrec';
import PieGraphic from './Components/PieGraphic/PieGraphic';
import { getTable } from './BuildTable.js';
import FrecuencyTable from './Components/FrecuencyTable/FrecuencyTable';
import MedidasDescriptivas from './Components/MedidasDescriptivas/MedidasDescriptivas';
import Footer from './Components/Footer/Footer';

function App() {
  const [showComponent, setShowComponent] = useState(false);
  const [data, setdata] = useState(null);

  const contruirTablaFrec = () => {  // obtiene el texto del text area y lo convierte en array
    const v = document.querySelector("#Input").value;
    const newString = v.replace(/\s/g, "");
    const array = newString.split(",");

    const todosNumeros = array.every(elemento => !isNaN(elemento));
    if (todosNumeros) {
      setdata(getTable(array));
      setShowComponent(!showComponent);
    } else {
      alert("se detecto una letra en la entrada!");
    }
  }
  return (
    <div className="App">
      <Header />
      <p className='pIn'>Ingresa Tus Datos Recopilados aqui</p>
      <textarea id="Input" cols="20" rows="5" placeholder='12, 14, 11 ,13, 15 ,14, 12.3, 12.4, 12.84, ...etc' required />
      <button className="boton" onClick={() => {
        contruirTablaFrec();
      }} >
        <p className='textP'>GENERAR GRAFICOS</p> <img className='IconBar' src={BarChartIcon} alt="graphic" />
      </button>
      {showComponent && <HistogramaFrec data={data} />}
      {showComponent && <PoligonoFrec data={data} />}
      {showComponent && <Ojivas data={data} />}
      {showComponent && <PieGraphic data={data} />}
      {showComponent && <StepsForBuildFrecuencyTable data={data} />}
      {showComponent && <FrecuencyTable data={data} />}
      {showComponent && <MedidasDescriptivas data={data} />}
      {showComponent && <Footer />}
      
    </div>
  );
}

export default App

