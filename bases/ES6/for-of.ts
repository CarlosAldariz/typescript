(() => { 

  type Avenger = { 
    name: string; 
    weapon: string;
  }
    
        const thor = { 
            name: 'Thor', 
            weapon: 'Hammer'
        } 

        const ironman = { 
            name: 'Ironman', 
            weapon: 'Repulsor'
        } 

        const spiderman = { 
            name: 'Spiderman', 
            weapon: 'Web'
        } 

        const avengers: Avenger[] = [ thor, ironman, spiderman ]; 

        for (const avenger of avengers) { 
            console.log(avenger.name, avenger.weapon);
        } 


})() 
