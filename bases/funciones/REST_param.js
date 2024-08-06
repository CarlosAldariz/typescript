"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return firstName + ' ' + restArgs.join(' ');
    };
    const nombre = fullName('Manuel', 'Barca', 'Dominguez');
    console.log({ nombre });
})();
//funcion anonima autoinvocada
//# sourceMappingURL=REST_param.js.map