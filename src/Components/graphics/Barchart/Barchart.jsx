import { useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

import { Bar } from "react-chartjs-2";

const options = {
    responsive: true,
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
    scales: {
        x: {
            grid: {
                color: function (context) {
                    return '#bbb5';
                },
            },
        },
        y: {
            min: 0,
            grid: {
                color: (context) => {
                    return "#bbbb";
                },
            },
        }
    },
    barPercentage: 1.2,  /*  distancia entre barra y barra del grafico */
};

export default function Barchart(props) {
    const { marcaDeClaseXi } = props;
    const labels = marcaDeClaseXi; /* eje X  nota:labels no es opcional es parte de la sintaxis*/

    const { datasets } = props; /* eje Y */

    const data = useMemo(function () {
        return {
            datasets: datasets,  /* es lo mismo que escribir solamente datasets, */
            labels,
        };
    }, []);

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    )
}
