(() => { 

    let tipos: {name: string, age?: number, capacity: string[], getNombre?: () => string } = { 
        name: 'No name', 
        age: 30, 
        capacity: ['capacity1', 'capacity2']
    } 

    tipos = {  
        name: 'Joe Doe', 
        // age: 20, 
        capacity: ['capacity3', 'capacity4'],
        getNombre: function() { 
            return this.name;
        }
    }

    if (tipos.getNombre) {
        console.log(tipos.getNombre()); // Salida esperada: 'Joe Doe'
    } else {
        console.log("getNombre is undefined");
    }

})();
