export function calcularMedia(datos, fi , Xi , n) {
    let sum=0;
    for (let i = 0; i < fi.length; i++) {
        sum+= fi[i]*Xi[i];
    }
    const media = sum/n;
    return media;
}

export function calcularMediana(datos, fi, FiMenq, n,amplitud) {
    let mediana = 0;
    const mitadN = n / 2;
    let index = 0;
    while (FiMenq[index] < mitadN) {
        index++;
    }
    if (FiMenq[index] === mitadN) {
        mediana = datos[index];
    } else {
        const intervaloMediana = index;
        const fiMediana = fi[intervaloMediana];
        const Li = datos[intervaloMediana][0];
        const ni = FiMenq[intervaloMediana - 1];
        const f = mitadN - ni;
        mediana = Li + (f / fiMediana)*amplitud;
    }
    return mediana;
}

export function calcularModa(datos, fi, Xi) {
    const fiMax = Math.max(...fi);
    const indicesModa = fi.reduce(
        (accumulator, currentValue, index) =>
            currentValue === fiMax ? [...accumulator, index] : accumulator,
        []
    );
    const modas = indicesModa.map((indice) => Xi[indice]);
    return modas;
}
