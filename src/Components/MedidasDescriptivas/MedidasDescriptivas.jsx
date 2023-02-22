import "./MedidasDescriptivas.css";
import {calcularMedia, calcularModa, calcularMediana} from "./Calculos";
import ImageMedia from "./images/ImageMedia.png";
import ImageMediana from "./images/ImageMediana.png";
import ImageModa from "./images/ImageModa.png";

export default function MedidasDescriptivas({data}) {
    const { n, Ki, Lim, Xi, fi, hi, hiP,
        FiMenq, FiMayq, HiMenq, HiMayq,intervalos,amplitud } = data;

    const Media = calcularMedia(intervalos,fi,Xi,n).toFixed(3);
    const Mediana = `${calcularMediana(intervalos,fi, FiMenq , n, amplitud)}`;
    const Moda = `${calcularModa(intervalos, fi ,Xi)}`; 

    return (
        <div className="containerCalc">
            <div>
                <p>Media</p>
                <img className="image1" src={ImageMedia} alt="Media" />
                <p id="Md">{Media}</p>
            </div>
            <div>
                <p>Mediana</p>
                <img className="image2" src={ImageMediana} alt="Mediana" />
                <p id="Md">{Mediana}</p>
            </div>
            <div>
                <p>Moda</p>
                <img className="image3" src={ImageModa} alt="ImageModa" />
                <p id="Md">{Moda}</p>
            </div>
        </div>
    );
}