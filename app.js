const express = require("express");
const app = express();

app.listen(3030, () => console.log("El server esta corriendo"))

const routeHome = require("./routes/homePage");
const routeSucursales = require("./routes/sucursales");
const routeMarcas = require("./routes/marcas");
const routeAutos = require("./routes/autos");

app.use("/", routeHome);
app.use("/sucursales", routeSucursales);
app.use("/marcas",routeMarcas );
app.use("/autos", routeAutos);