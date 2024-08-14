class Avenger { 
    constructor( 
        public name: string, 
        public realName: string, 
    ) {
    console.log('Constructor Avenger llamado!'); 
    } 

    private getFullName() { 
        return `${ this.name } ${ this.realName} `
    }

} 

class Xmen extends Avenger { 

    constructor(  
        name: string, 
        realName: string,
        public isMutant:boolean
    ){ 
        super( name, realName ) 
        console.log('constructor xmen llamado');
    }

} 

const wolverine = new Xmen('wolverine', 'Logan', true); 
