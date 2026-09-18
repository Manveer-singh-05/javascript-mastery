class Human{

    // properties 
    age = 13; //public
    #wt = 34;  //private using #
    ht = 190;

    // constructor 
    constructor (newage, newht, newwt){
        this.age = newage;
        this.ht = newht;
        this.#wt = newwt;
    }
    walking(){
        console.log("human can walk");
    }

    studing(){
        console.log("human can study");
    }

    get wight(){ //to get the private properties 
        return this.#wt;
    }
    set modifywt(newet){  // to set the private properties
        this.#wt = newet;
    }
}

let h = new Human(23,146,333);
console.log("height :", h.ht);
console.log(h.wight);
h.walking();
h.studing();