console.log("Debut script");
//import id from "./module";
import {IVehicule, Voiture} from "./module";
//import HelloWorld = require("./module");

const VoitureClass: IVehicule = new Voiture({nom: "Audi", moteur: "Essence"});
console.log("Description", VoitureClass.getDescription());
console.log("Caractéristiques", VoitureClass.getCaracteristiques());
