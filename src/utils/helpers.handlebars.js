import { menuList, configList } from "./sidebar.handlebars";
const globalData = {
    menuList,
    configList
}
/**
 * El siguiente helper permite imprimir un objecto javascrip como una cadena
 * @param {*} context 
 * @returns {String}
 */
export function json(context) {
    return JSON.stringify(context);
}

/**
 * EL siguiente helper permite conectar datos javascript con el motor de plantilla
 * en el lado del servidor
 * @param {String} key 
 * @returns 
 */
export function global(key) {
    return globalData[key];
}

/**
 * El siguiente helper compara dos string
 * @param {String} cad1 
 * @param {String} cad2 
 * @returns {Boolean}
 */
export function equalString(cad1, cad2) {
    return cad1 == cad2;
}

/**
 * EL siguiente helper permite la generacion de url relativas
 * @param  {...[String]} options 
 * @returns {String}
 */
export function link(...options) {
    options.pop();
    return options.join("/");
}
/**
 * El siguiente helper genera un string aleatoorio del ancho especificado
 * @param {Integer} length 
 * @returns {String}
 */
export function random(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * EL siguiente helper devuelve de forma aleatoria un tipo de grafica de charjs
 * @returns {String}
 */
export function typeChart() {
    let val = ['bar', 'line', 'polarArea'];
    return val[Math.floor(Math.random() * val.length)];
}

/**
 * El siguiente helpers cuenta las respuestas coincidentes generando un nuevo Objeto de datos ordenados
 * @param {Object} respuestas 
 * @returns 
 */
export function respuestas(respuestas) {
    return Object.fromEntries(respuestas.reduce((pre, current) => ((pre.set(current, pre.has(current) ? pre.get(current) + 1 : 1))), new Map));
}


export function chart(respuestas, type, title) {
    console.log(respuestas);

    let labels = Object.keys(respuestas);
    let values = Object.values(respuestas);
    return {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },

    }

}


export function compareRespuesta(objeto, id) {
    // let objet = JSON.stringify(objeto);
    // console.log(objeto)
    if (objeto != undefined) {
        let values, keys;
        values = Object.values(objeto);
        keys = Object.keys(objeto);
        // console.log(values, keys);
        for (let i = 0; i< keys.length; i++) {
            if (keys[i] == id) {
                return values[i];
            }
        }
    }
    return [];
}
