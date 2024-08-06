
// Objetos
type coches = { 
  carroceria: string, 
  modelo: string, 
  antibalas: boolean, 
  pasajeros: number, 
  disparar?: () => void; 
}




let batimovil: (coches) = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: (coches) = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};




