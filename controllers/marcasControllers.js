const fs = require("fs");
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const marcas = {
    index: (req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let marcasFiltradas = []
        dbConcesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach(concesionaria=>{
                marcasFiltradas.push(concesionaria.marca)
            })
        })
        res.write("Estas son nuestras marcas disponibles" + "\n");
        marcasFiltradas = marcasFiltradas.filter((a, b)=>marcasFiltradas.indexOf(a)===b);
        marcasFiltradas.forEach(marcas=>{
            res.write("\n\n" + "Marca: " + marcas)
        })
        res.end()
    },
    marca: (req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id = req.params.id;
        let marcas = []
        dbConcesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach(auto=>{
                marcas.push(auto)
            })
        })
        marcas.forEach(marca=>{
            if(marca.marca == id){
                res.write("Modelo: " +marca.modelo + "\n")
                res.write("año: " + marca.anio + "\n")
                res.write("año: " + marca.color + "\n")
                res.write("------------------------------------------------------" + "\n")
            }
        })
        res.end()
    }

}

module.exports = marcas