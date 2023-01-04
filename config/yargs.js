const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Imprime por pantalla la tabla de multiplicar"
  })
  .option("s", {
    alias: "size",
    type: "number",
    default: 10,
    describe: "Cantidad de numeros por la que se va a multiplicar la base"
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }

    return true;
  }).argv;


  module.exports = argv