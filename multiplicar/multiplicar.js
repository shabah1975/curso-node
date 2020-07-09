const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El límite ${limite} no es un número`);
            return;
        }
        let contenido = '';
        for (let i = 1; i <= 10; i++) {
            let cuenta = base * i;
            if (cuenta <= limite) {
                contenido += `${base} * ${i} = ${base * i}\n`;
            }
        }

        console.log(contenido);
        resolve(`tabla-${base}`);

    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }


        let contenido = '';
        for (let i = 1; i <= 10; i++) {
            if (base * i <= limite) {
                contenido += `${base} * ${i} = ${base * i}\n`;
            }

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
