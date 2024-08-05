(() => { 

    type tipo = {  
        name: string; 
        age?: number; 
        capacity: string[]; 
        getName?: () => string;
    }

    let tipos: tipo = { 
        name: 'No name', 
        age: 30, 
        capacity: ['capacity1', 'capacity2']
    }  

    
    let tipos2: tipo = { 
        name: 'yes Name', 
        age: 60, 
        capacity: ['capacity4', 'capacity5'], 
        getName() { 
            return this.name;
        }

    } 

})();
