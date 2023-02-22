import "./PieGraphic.css";
import Piechart from '../graphics/PieChart/Piechart';
import React, { useState } from "react";

export default function PieGraphic(props) {
    const [ypf, setypf] = useState("fi");

    const { data } = props; /*  data es los datos de la tabla de distribucion de frecuencias */

    const handleChange = (event) => {  /* para saber que opcion selecciono el usuario */
        setypf(event.target.value);
    };

    const dataSets = [
        {
            label: 'Grafica Pastel',
            data: ypf==="fi" ? data.fi : ypf==="hi" ? data.hi : ypf==="hi%" ? data.hiP : "", 
            borderColor: "#ddc3",
        },
    ];

    return (
        <div className="Pol">
            <select id="YPolFrec" onChange={handleChange}>
                <option value="fi" >fi</option>
                <option value="hi" >hi</option>
                <option value="hi%">hi%</option>
            </select>

            {ypf === "fi" && <Piechart marcaDeClaseXi={data.Lim} datasets= {dataSets}/>}
            {ypf === "hi" && <Piechart marcaDeClaseXi={data.Lim} datasets= {dataSets}/>}
            {ypf=== "hi%" && <Piechart marcaDeClaseXi={data.Lim} datasets= {dataSets}/>}
        </div>
    );
}