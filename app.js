const { multiply } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

multiply(argv.b, argv.size, argv.l)
  .then((nombre) => {
    console.log(`Archivo ${nombre} creado`.bgYellow.brightRed.bold);
  })
  .catch((error) => {
    console.log(error);
  });
