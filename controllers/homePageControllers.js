const fs = require("fs");
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const homePage = {
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Bienvenidos, estas son nuestras concesionarias " + '\n\n');
        res.write("---------------------------------------------------------------------------------------------" + '\n\n')
        dbConcesionarias.forEach((concesionaria)=>{
            res.write(concesionaria.sucursal + '\n\n');
        })
        res.end()
    }
}

module.exports = homePage