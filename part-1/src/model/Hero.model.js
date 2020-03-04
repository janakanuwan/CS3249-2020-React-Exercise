class Hero{
    // NOTE: we can pass default arguments!
    constructor(id, name, powerstats = {}, image = '', publisher = ''){
        this.id = id;
        this.name = name
        this.powerstats = powerstats;
        this.image = image;
        this.publisher = publisher;
    }
}

export default Hero;

