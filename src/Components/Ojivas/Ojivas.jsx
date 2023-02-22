import "./Ojivas.css";
import Linechart from '../graphics/Linechart/Linechart';
import React, { useState } from "react";

export default function Ojivas(props) { /*  grafica de Ojivas de frecuencia acumulada */
    const [YfrecAcum, setYfrecAcum] = useState("Fi↑↓");


    const { data } = props; /*  data es los datos de la tabla de distribucion de frecuencias */

    const handleChange = (event) => {  /* para saber que opcion selecciono el usuario */
        setYfrecAcum(event.target.value);
    };

    const dataSets = [
        {
            label: YfrecAcum==="Fi↑↓" ? "Ojiva Fi↓" : "Ojiva Hi↓",
            data: YfrecAcum==="Fi↑↓" ? data.FiMenq : YfrecAcum==="Hi↑↓" ? data.HiMenq :"", 
            tension: 0,
            borderColor: "#ff4f61",
            pointRadius: 5,
            pointBackgroundColor: "#ffcb3a",
        },
        {
            label: YfrecAcum==="Fi↑↓" ? "Ojiva Fi↑" : "Ojiva Hi↑",
            data: YfrecAcum==="Fi↑↓" ? data.FiMayq : YfrecAcum==="Hi↑↓" ? data.HiMayq:"", 
            tension: 0,
            borderColor: "#ffcb3a",
            pointRadius: 5,
            pointBackgroundColor: "#ff4f61",
        },
        
    ];

    return (
        <div className="Ojiva">
            <select id="yOjiva" onChange={handleChange}>
                <option value="Fi↑↓" >Fi↑↓</option>
                <option value="Hi↑↓" >Hi↑↓</option>
            </select>

            {YfrecAcum === "Fi↑↓" && <Linechart marcaDeClaseXi={data.Xi} datasets= {dataSets}/>}
            {YfrecAcum === "Hi↑↓" && <Linechart marcaDeClaseXi={data.Xi} datasets= {dataSets}/>}
        </div>
    );
}