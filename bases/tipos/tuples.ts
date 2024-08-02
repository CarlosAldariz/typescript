(() => { 

  const hero: [string, number, boolean] = ['Dr Strange', 100, true];   

  hero[0] = 'the cure'; 
  hero[1] = 50;  
  hero[2] = false;

  console.log(hero);

})() 


//funcion anonima autoinvocada