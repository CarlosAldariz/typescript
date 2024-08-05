(() => { 

    const error = ( message: string ):(never|number) => {  
        if ( false ) {
        throw new Error (message) 
        } 
        return 1;
    } 

    error('Mensaje de error'); 

    console.log('ola Mundo');

})() 
