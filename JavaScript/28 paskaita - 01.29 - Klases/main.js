// console.time();
// let kiek = 10000;
// for(let i = 2; i < kiek; i++){
//   let prime = true;
//     // for(let j = 2; j < i; j++){
//     //   if(i%j === 0){
//     //     prime = false;
//     //     break;
//     //   }
//     // }
//   if(i %2 === 0 || i%3 ===0 || i%5 === 0 || i%7 === 0){
//     prime=false;
//   }
//     if(prime){
//       console.log(i, ' yra pirminis skaicius');
//     }
//   }
//   console.timeEnd();

  class Asmuo{
    constructor(vardas, pavarde, gimimoData){
      this.vardas = vardas;
      this.pavarde = pavarde;
      this.dob = gimimoData;
      this.arMiega = false;
      this.pilnasVardas = this.vardas + ' ' + this.pavarde;
      this.amzius = new Date().getFullYear() - this.dob;
      this.inicialai = this.vardas[0] + '.' + this.pavarde[0] + '.';
    };
    eitiMiegoti(){
      if(this.arMiega){
        return `${this.vardas} jau miega.`
      }
      this.arMiega = true;
      return `${this.vardas} nuejo miegoti.`
    };
    atsibusti(){
      if(!this.arMiega){
        return `${this.vardas} jau yra atsibudes.`
      }
      this.arMiega = false;
      return `${this.vardas} atsibudo.`
    };
    helloWorld(){
      return `${this.vardas} sako Hello World`
    };
    pasisveikina(zmogus){
      return `${this.vardas} pasisveikina su ${zmogus.vardas}`
    };
  };

  let zmogus0 = new Asmuo('Petras', 'Petraitis', 1985);
  let zmogus1 = new Asmuo('Jonas', 'Jonaitis', 1992);

  console.log(zmogus0);
  console.log(zmogus1);


class Knyga{
  #pavadinimas; #autorius; #leidimoMetai;
  constructor(pavadinimas, autorius, leidimoMetai){
    this.#pavadinimas = pavadinimas;
    this.#autorius = autorius;
    this.#leidimoMetai = leidimoMetai;
  }
  get name(){
    return this.#pavadinimas;
  }
  set name(naujasPavadinimas){
    this.#pavadinimas = naujasPavadinimas;
  }
  get author(){
    return this.#autorius;
  }
  set author(naujasAutorius){
    this.#autorius = naujasAutorius;
  }
  get year(){
    return this.#leidimoMetai;
  }
  set year(naujiLeidimoMetai){
    this.#leidimoMetai = naujiLeidimoMetai;
  }
  get KnygosAmzius(){
    return new Date().getFullYear() - this.#leidimoMetai;
  }
  static randomStuff(nr){
    return Math.random()*nr;
  }
};

const knygos = [
  new Knyga("Harry Potter", "J.K.Rowling", 1997),
  new Knyga("Lord of the Rings", "J.R.R.Tolkien", 1954),
];

