(() => { 

    const fullName = ( firstName?:string, lastName?:boolean ): string => { 
       
        return `${firstName} ${lastName || '--------'}`
    
    }

    const name = fullName ('Primer'); 

    console.log({ name });

})() 