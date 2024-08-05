"use strict";
(() => {
    let tipos = {
        name: 'No name',
        age: 30,
        capacity: ['capacity1', 'capacity2']
    };
    let tipos2 = {
        name: 'yes Name',
        age: 60,
        capacity: ['capacity4', 'capacity5']
    };
    tipos = {
        name: 'Joe Doe',
        // age: 20, 
        capacity: ['capacity3', 'capacity4'],
        getNombre: function () {
            return this.name;
        }
    };
    if (tipos.getNombre) {
        console.log(tipos.getNombre()); // Salida esperada: 'Joe Doe'
    }
    else {
        console.log("getNombre is undefined");
    }
})();
