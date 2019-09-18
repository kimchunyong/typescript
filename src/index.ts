
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

import * as CryptoJS from 'crypto-js';

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestampe: number;

    static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => {
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
    }

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


const genesisBlock: Block = new Block(0, "202020202020", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);


export { };
