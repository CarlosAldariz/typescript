(() => { 
    class Avenger { 
        name: string; 
        power: number;

        constructor (name: string = 'No name', power: number = 0) { 
            this.name = name; 
            this.power = power;
        }
    } 

    class FlyingAvenger extends Avenger {
        flying: boolean;  

        constructor(name: string, power: number) { 
            super(name, power); 
            this.flying = true;
        } 
    }

    const hulk = new Avenger('Hulk', 9001);
    console.log(hulk);
})();