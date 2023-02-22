import "./StepsForBuildFrecuencyTable.css";


export default function StepsForBuildFrecuencyTable({ data }) {
    const { n, Ki, amplitud, rango, datos } = data;
    return (
        <div className="ContainerSteps">
            <h3 className="TitleSteps">Pasos para la construcción <br />
            de la tabla de distribución de frecuencias</h3>
            <div className="Steps">
                <ul className="ListSteps">
                    <li className="Step1" id="S1">
                        <div>
                            <p>PASO 1: </p>
                            <p>ORDENAR LOS DATOS</p>
                        </div>
                        <p id="datosOrd" >{datos.join(" | ")}</p>
                    </li>
                    <li className="Step2" id="S2" >
                        <div>
                            <p>PASO 2: </p>
                            <p> OBTENER EL RANGO</p>
                        </div>
                        <p>R = Vmax - Vmin</p>
                        <p>R = {rango[1]} - {rango[0]}</p>
                        <p>R = {(rango[1]-rango[0]).toFixed(3)}</p>
                    </li>
                    <li className="Step3" id="S3">
                        <div>
                            <p>PASO 3: </p>
                            <p>INTERVALOS DE LA CLASE</p>
                        </div>
                        <p>K = 1 + 3.33log(n)</p>
                        <p>K = 1 + 3.33log({n})</p>
                        <p>K = {Ki[Ki.length -1]}</p>
                    </li>
                    <li className="Step4" id="S4">
                        <div>
                            <p>PASO 4:</p>
                            <p>ANCHURA DE LA CLASE</p>
                        </div>
                        <p>C = R / K</p>
                        <p>C = {rango[1]-rango[0]} / {Ki[Ki.length -1]}</p>
                        <p>C = {amplitud}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}