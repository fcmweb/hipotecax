export function construyeFechas(plazo) {
    let fecha = new Date();
    let mes = fecha.getMonth() + 1;
    let agno = fecha.getFullYear();
    
    const arrFechas = [];
    for (let i = 0; i < plazo; i++) {
    mes ++;
    if (mes > 12) {
        mes = 1
        agno ++;
    }
    arrFechas.push(mes + '/' + agno);
    }
    return arrFechas;
}    