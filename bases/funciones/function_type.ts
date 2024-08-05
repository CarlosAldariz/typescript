(() => { 

const addNumber = ( a: number, b: number ) => a+ b; 

const greet = (name: string) => `Hola ${ name }`; 

const mensaje = () => `Mensaje enviado`; 

let myfunction; 

myfunction = addNumber;  
console.log( myfunction( 1, 2)) 

myfunction = greet 
console.log(myfunction('Juan'));

})() 
