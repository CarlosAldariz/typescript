"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '--------'}`;
    };
    const name = fullName('Primer');
    console.log({ name });
})();
//# sourceMappingURL=args_optional.js.map