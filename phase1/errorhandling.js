try{

    console.log("manveer");
    console.log(x);
}
catch(err){

    // how can we declare custom error using throw keyword
    throw new Error("bhai pehle declare toh kare le ")
    // console.log("i get an error");
    
}

finally{
    console.log("i will run evey time as i am a finally block")
}


// why do we need finally ->  The finally keyword provides a guarantee that a specific block of code will always execute, regardless of whether an exception is thrown, caught, or completely unhandled
