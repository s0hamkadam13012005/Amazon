class bike{
    #brand;
    #model;
    #speed = 0;
    isTrunkOpen = false;

    constructor(productDetails){
        this.#brand = productDetails.brand;
        this.#model = productDetails.model;
        this.#speed = productDetails.speed;

    }

    displayInfo() {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';
        console.log(`Brand: ${this.#brand} , model: ${this.#model} , speed : ${this.#speed} Trunk : ${trunkStatus}`);
    }

    go(){
        if(!this.isTrunkOpen){
            this.#speed += 5;

        }
    }

    brake(){
        this.#speed -= 5;
    }

    openTrunk() {
        if(this.speed === 0){
            this.isTrunkOpen = true;
        }
    }

    closeTrunk(){
        this.isTrunkOpen = false;
    }
    
}

class raceBike extends bike{
    acceleration;

    constructor(productDetails){
        super(productDetails);
        this.acceleration = productDetails.acceleration;
    }

    go() {
        this.speed += this.acceleration;
    
        if (this.speed > 300) {
          this.speed = 300;
        }
      }
}

const bullet = new bike({brand:'royal Enfield' , model: '350cc', speed:0});
bullet.go();
bullet.openTrunk();

bullet.brake();
bullet.openTrunk();


const nakedbike = new bike ({brand:'KTM' , model:'390cc'
})
console.log(bullet)
console.log(nakedbike)


bullet.displayInfo();

const r15 = new raceBike({brand:'Yamaha' , model: 'R15', speed:290, acceleration:20});
r15.go();
r15.displayInfo();