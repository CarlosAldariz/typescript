(() => { 

    const fullName = (firstName: string, ...restArgs:string[] ): string => { 
        return firstName + ' ' + restArgs.join(' ');
    } 

    const nombre = fullName( 'Manuel', 'Barca', 'Dominguez'); 
    
    console.log({ nombre})

})() 


//funcion anonima autoinvocada