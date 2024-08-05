(() => { 

    const fullName = ( firstName:string, lastName:boolean ): string => { 
       
        return `${firstName} ${lastName}`
    
    }

    const name = fullName ('Primer', true); 

    console.log({ name });

})() 