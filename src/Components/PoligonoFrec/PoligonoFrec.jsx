import "./PoligonoFrec.css";
import Linechart from '../graphics/Linechart/Linechart';
import React, { useState } from "react";

export default function PoligonoFrec(props) {
    const [ypf, setypf] = useState("fi");

    const { data } = props; /*  data es los datos de la tabla de distribucion de frecuencias */

    const handleChange = (event) => {  /* para saber que opcion selecciono el usuario */
        setypf(event.target.value);
    };

    const dataSets = [
        {
            label: 'Poligono de frecuencia',
            data: ypf==="fi" ? data.fi : ypf==="hi" ? data.hi : ypf==="hi%" ? data.hiP : "", 
            tension: 0,
            borderColor: "#ff4f61",
            pointRadius: 6,
            pointBackgroundColor: "#ffcb3a",
        },
    ];

    return (
        <div className="Pol">
            <select id="YPolFrecuencia" onChange={handleChange}>
                <option value="fi" >fi</option>
                <option value="hi" >hi</option>
                <option value="hi%">hi%</option>
            </select>

            {ypf === "fi" && <Linechart marcaDeClaseXi={data.Xi} datasets= {dataSets}/>}
            {ypf === "hi" && <Linechart marcaDeClaseXi={data.Xi} datasets= {dataSets}/>}
            {ypf=== "hi%" && <Linechart marcaDeClaseXi={data.Xi} datasets= {dataSets}/>}
        </div>
    );
}