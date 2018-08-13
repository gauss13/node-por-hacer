const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea ', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'elimina un elemento por hacer', {
        descripcion
    })

.help().argv;

module.exports = { argv };