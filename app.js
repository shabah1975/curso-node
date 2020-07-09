
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite).then(archivo => console.log(`Archivo listado: ${archivo}`)).catch(e => {
            console.log(e);
        });
        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e => {
            console.log(e);
        });
        break;
    default:
        console.log('No ha un comando definido');
        break;
}


// console.log(argv);




