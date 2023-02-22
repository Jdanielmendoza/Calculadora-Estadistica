import "./FrecuencyTable.css";

export default function FrecuencyTable({ data }) {
    const { n, Ki, Lim, Xi, fi, hi, hiP,
        FiMenq, FiMayq, HiMenq, HiMayq } = data;

    return (
        <>
            <h3 className="TitleTable">TABLA DE DISTRIBUCIÓN DE FRECUENCIA</h3>
            <div className="ContainerTable" >
                <table className="FrecuencyTable">
                    <thead className="Encabezado" >
                        <tr>
                            <th id="Columna1" >Ki</th>
                            <th id="Columna2" >Linf - Lsup</th>
                            <th id="Columna3" >Xi</th>
                            <th id="Columna4" >fi</th>
                            <th id="Columna5" >hi</th>
                            <th id="Columna6" >hi%</th>
                            <th id="Columna7" >Fi↓</th>
                            <th id="Columna8" >Fi↑</th>
                            <th id="Columna9" >Hi↓</th>
                            <th id="Columna10">Hi↑</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Ki.map((elemento, indice) => {
                            return (
                                <tr key={indice}>
                                    <td className="Columna1" >{elemento}</td>
                                    <td className="Columna2" >{Lim[indice]}</td>
                                    <td className="Columna3" >{Xi[indice]}</td>
                                    <td className="Columna4" >{fi[indice]}</td>
                                    <td className="Columna5" >{hi[indice]}</td>
                                    <td className="Columna6" >{hiP[indice]}</td>
                                    <td className="Columna7" >{FiMenq[indice]}</td>
                                    <td className="Columna8" >{FiMayq[indice]}</td>
                                    <td className="Columna9" >{HiMenq[indice]}</td>
                                    <td className="Columna10" >{HiMayq[indice]}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="Gradient"></div>
        </>
    );
}