import "./HistogramaFrec.css";
import Barchart from '../graphics/Barchart/Barchart';
import React, { useState } from "react";

export default function PoligonoFrec(props) {
    const [yhp, setyhp] = useState("fi");

    const { data } = props; /*  data es los datos de la tabla de distribucion de frecuencias */

    const handleChange = (event) => {  /* para saber que opcion selecciono el usuario */
        setyhp(event.target.value);
    };

    const dataSets = [
        {
            label: 'Histograma de frecuencia',
            data: yhp==="fi" ? data.fi : yhp==="hi" ? data.hi : yhp==="hi%" ? data.hiP : "", 
            borderColor: "#acd637",
            backgroundColor :  [
                '#ff4f61'],
        },
    ];

    return (
        <div className="HistFrec">
            <select id="YHistFrec" onChange={handleChange}>
                <option value="fi" >fi</option>
                <option value="hi" >hi</option>
                <option value="hi%">hi%</option>
            </select>

            {yhp === "fi" && <Barchart marcaDeClaseXi={data.Lim} datasets= {dataSets}/>}
            {yhp === "hi" && <Barchart marcaDeClaseXi={data.Lim} datasets= {dataSets}/>}
            {yhp=== "hi%" && <Barchart marcaDeClaseXi={data.Lim} datasets= {dataSets}/>}
        </div>
    );
}