export interface IVehicule {
    nom: string;
    moteur: string;
    getDescription: CallableFunction;
    getCaracteristiques: CallableFunction;
}

export class Voiture implements IVehicule {
    public nom!: string;
    public moteur!: string;
    constructor(params: {nom: string, moteur: string}) {
        this.nom = params.nom;
        this.moteur = params.moteur;
    }
    public getDescription() {
        return "Nom: " + this.nom + ". Moteur: " + this.moteur;
    }
    public getCaracteristiques(): string[] {
        return [
            this.nom,
            this.moteur,
        ];
    }
}
