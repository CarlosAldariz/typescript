(() => { 

    type datos = { 
        name: string; 
        age?: number; 
        powers: number[]; 
        getName?: () => string;
    } 

    let myCustomVariable: (string | number | datos) = 'Fernando';  
    console.log(typeof myCustomVariable); 

    myCustomVariable = 20 
    console.log(typeof myCustomVariable); 

    myCustomVariable = { 
        name: 'Bruce', 
        age: 43, 
        powers: [1, 2, 3],
    }


})() 
