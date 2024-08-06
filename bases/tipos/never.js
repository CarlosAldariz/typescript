"use strict";
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Mensaje de error');
    console.log('ola Mundo');
})();
//# sourceMappingURL=never.js.map