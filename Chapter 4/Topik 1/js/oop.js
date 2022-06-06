// No 1 ---------------------------------------------------------------------------------
    class Human {
        // Static Property
        static isLivingOnEarth = true;

        // Constructor
        constructor(name, address) {
            this.name = name;
            this.address = address;
            // if (this.constructor === Human) {
            //     throw new Error('Human is an abstract class');
            // }
        }

        // Instance Method
        introduce() {
            console.log(`Hi, I'm ${this.name}`);
        }

        // Protected Method
        _relaxing() {
            console.log(`${this.name} is relaxing`);
        }
    }


    // Add instance method to the prototype
    Human.prototype.greet = function(name) {
        console.log(`Hi ${name}, I'm ${this.name}`);
    }

    // Add static method
    Human.destroy = function(thing) {
        console.log(`Human is destroying ${thing}`);
    }

    // Instantiation of Human
    let raffi1 = new Human('Raffi', 'Karawang');
    console.log(raffi1);

    // Checking if the instance is an instance of Human
    console.log(raffi1 instanceof Human);

    raffi1.introduce();  // Hi, I'm Raffi
    raffi1.greet('Haikal'); // Hi Haikal, I'm Raffi
    Human.destroy('a spaceship'); // Human is destroying a spaceship
    console.log('----------------------------------------');
// No 2 ---------------------------------------------------------------------------------
    // Create instance of Human class / Child class
    class Programmer extends Human {
        constructor(name, address, language) {
            super(name, address);
            this.language = language;
        }

        // Override instance method
        introduce1() {
            super._relaxing();
            super.introduce();
            console.log(`I'm a ${this.language} programmer`);
        }

        // Overload instance method
        introduce2(name) {
            console.log(`Hi ${name}, I'm ${this.name} and I'm a ${this.language} programmer`);
        }

        // Public method
        code() {
            this.#doGossip();
            console.log(`Code some ${this.language}`);
        }

        // Private Method
        #doGossip() {
            console.log(`My address will become viral ${this.address}`);
        }
    }

    // Instantiation of Programmer
    let raffi2 = new Programmer('Raffi', 'Karawang', 'JavaScript');
    console.log(raffi2);

    // Checking if the instance is an instance of Programmer
    console.log(raffi2 instanceof Programmer);

    raffi2.introduce1(); // Hi, I'm Raffi
    raffi2.introduce2('Haikal'); // Hi Haikal, I'm Raffi and I'm a JavaScript programmer
    raffi2.code(); // Code some JavaScript
    console.log('----------------------------------------');
    