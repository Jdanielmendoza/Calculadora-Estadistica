import { useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

import { Pie } from "react-chartjs-2";

const options = {
    responsive: true,
    backgroundColor: [
        '#ffcb3abb',
        '#36a2ebbb',
        '#ff4f61bb',
        '#4bc0c0bb',
        '#9966ffbb',
        '#ff9f40bb',
      ],  
};

export default function Piechart(props) {
    const {marcaDeClaseXi} = props; 
    const labels = marcaDeClaseXi; /* eje X  nota:labels no es opcional es parte de la sintaxis*/

    const {datasets} = props ; /* eje Y */

    const data = useMemo( function(){
        return {
            datasets:datasets,  /* es lo mismo que escribir solamente datasets, */ 
            labels, 
             
        };
    }, []);
    
    return (
        <div>
            <Pie data={data} options={options} />
        </div>
    )
}
