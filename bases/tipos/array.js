"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9,];
    numbers.push(true);
    console.log(numbers);
    const villains = ["redskull", "wolf"];
    villains.forEach(v => console.log(v.toUpperCase()));
})();
