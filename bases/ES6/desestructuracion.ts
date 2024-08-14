(() => { 

    type Avengers = {  
        name: string; 
            age: number; 
            powers: boolean; 
    }
        const Avengers = { 
            name: 'Batman',
            age: 23, 
            powers: false,
        }

            const printAvenger = ( { name }:Avengers )=> { 
                console.log( name );
            } 



})() 
