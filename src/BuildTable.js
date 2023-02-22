export function getTable(datos) {
    datos = datos.sort();
    const { rango, Ki, amplitud, intervalos } = calcularTablaDeFrecuencias(datos);

    const data = buildTableFrecuency(rango, Ki, amplitud, intervalos, datos);
    return data; 
}

function calcularTablaDeFrecuencias(datos) {
    const n = datos.length;
    const rango = [Math.min(...datos), Math.max(...datos)];
    const Ki = Math.round(1 + 3.3 * Math.log10(n));
    const amplitud = ((rango[1] - rango[0]) / Ki);
    const enteros = datos.every(dato => Number.isInteger(dato));
    const intervalos = [];

    let inicio = rango[0];
    let fin;
    for (let i = 0; i < Ki; i++) {
        if (enteros) {
            fin = Math.floor(inicio + amplitud);
        } else {
            fin = parseFloat((inicio + amplitud).toFixed(3));
        }
        intervalos.push([inicio, fin]);
        inicio = fin;
    }
    return { rango, Ki, amplitud, intervalos };
}

function buildTableFrecuency(rango, Ki, amplitud, intervalos , datos) {
    const n = datos.length;
    Ki = Array.from({length: Ki}, (value,index)=> index+1);
    const Lim = intervalos.map( (L,index) => {  /* Limites o intervalos de la clase */
        return(index===intervalos.length-1?JSON.stringify(L):JSON.stringify(L).replace("]",")"));
    } );

    const Xi = []; const fi = []; const hi = [];
    const hiP =[]; const FiMenq=[]; const FiMayq=[];
    const HiMenq=[]; const HiMayq=[]; 
    /* Frecuencias Simples */
    intervalos.map( (intervaloClase,index) =>{
        Xi.push( parseFloat((intervaloClase[0] + intervaloClase[1]) / 2).toFixed(2));
        fi.push(datos.filter( (dato) => index===intervalos.length-1?dato>=intervaloClase[0] && dato <=intervaloClase[1]:dato>=intervaloClase[0] && dato <intervaloClase[1]).length);
        hi.push( parseFloat((fi[index] /datos.length).toFixed(3)));
        hiP.push(parseFloat( (hi[index] *100).toFixed(2)));
    } );
    /* Frecuencias Acumuladas */
    let a=0; let b =0; let c=0; let d=0;
    Ki.map( (val,index)=>{
        a +=fi[val-1];
        FiMenq.push(a);

        b += fi[Ki.length- index-1];
        FiMayq.unshift(b);

        c =parseFloat((c + hi[val-1]).toFixed(3));
        HiMenq.push(c);
        
        d = parseFloat(( d+hi[Ki.length- index-1]).toFixed(3) );
        HiMayq.unshift(d);
    });

    return ({
        n,
        datos,
        Ki,
        Lim,
        intervalos,
        Xi,
        amplitud,
        rango,
        fi,
        hi,
        hiP,
        FiMenq,
        FiMayq,
        HiMenq,
        HiMayq
    });
}


