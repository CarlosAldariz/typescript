"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const mensaje = () => `Mensaje enviado`;
    let myfunction;
    myfunction = addNumber;
    console.log(myfunction(1, 2));
    myfunction = greet;
    console.log(myfunction('Juan'));
})();
//# sourceMappingURL=function_type.js.map