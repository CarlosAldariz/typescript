"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '----'}`;
        }
    };
    var name = fullName('Carlos' || "----");
    console.log({ name: name });
})();
//funcion anonima autoinvocada
