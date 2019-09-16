
/*
class Human {
    public name: string;
    private age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human('Lynn', 18, 'female');

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(lynn));
*/

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestampe: number;

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestampe: number,
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestampe = timestampe;
    }
}

export { };
