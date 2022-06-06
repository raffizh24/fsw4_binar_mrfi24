class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        if (this.constructor === Human) {
            throw new Error('Human is an abstract class');
        }
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}`);
    }
    work() {
        console.log(`${this.constructor.name} is working`);
    }
}

// Public Server Module/Helper
const PublicServer = Base => class extends Base {
    save() {
        console.log(`SFX: Thank you!`);
    }
}

// Military Module/Helper
const Military = Base => class extends Base {
    shoot() {
        console.log(`DOR!`);
    }
}

class Doctor extends PublicServer(Human) {
    constructor(props) {
        super(props);
    }
    work() {
        super.work(); // From Human Class
        super.save(); // From Public Server Class
    }
}

class Police extends PublicServer(Military(Human)) {
    static workplace = 'Police Station';

    constructor(props) {
        super(props);
        this.rank = props.rank;
    }

    work() {
        super.work(); // Form Human Class
        super.shoot(); // From Military Class
        super.save(); // From Public Server Class
    }
}

class Army extends PublicServer(Military(Human)) {
    static workplace = 'Army Station';

    constructor(props) {
        super(props);
        this.rank = props.rank;
    }

    work() {
        super.work();
        super.shoot(); // From Military Class
        super.save(); // From Public Server Class
    }
}

class Writer extends Human {
    work() {
        console.log('Write Books');
        super.work();
    }
}

// Instantiate Military Based Class
const raffi = new Police({ name: 'Raffi', address: 'Karawang', rank: 'Officer' });
const raffa = new Army({ name: 'Raffa', address: 'Karawang', rank: 'General' });
// Instantiate Doctor
const haikal = new Doctor({ name: 'Haikal', address: 'Cikarang' });
// Instantiate Writer
const ibro = new Writer({ name: 'Ibro', address: 'Cikampek' });

raffi.shoot(); // DOR!
raffa.shoot(); // DOR!
console.log("----------------------------------------");

raffi.save() // SFX: Thank you
raffa.save() // SFX: Thank you
haikal.save() // SFX: Thank you
console.log("----------------------------------------");

raffi.work() // Police is working
console.log("----------------------------------------");
raffa.work() // General is working
console.log("----------------------------------------");
haikal.work() // Doctor is working
console.log("----------------------------------------");
ibro.work() // Write Books
console.log("----------------------------------------");