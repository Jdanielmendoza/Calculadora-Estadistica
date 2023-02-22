import { useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

import { Line } from "react-chartjs-2";

const options = {
    plugins: {
        legend: {
            display: true, // aquí se activa la leyenda
            labels: {
                color: '#ffcb3a',
                font: {
                    size: 14,
                    weight: 700
                }
            }
        },
    },
    responsive: true,
    scales: {
        x: {
            grid: {
                color: function (context) {
                    return '#fff5';
                },
            }
        },
        y: {
            min: 0,
            grid: {
                color: function (context) {
                    return '#fffd';
                },
            },
        }
    },
};

export default function Linechart(props) {
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
            <Line data={data} options={options} />
        </div>
    )
}
