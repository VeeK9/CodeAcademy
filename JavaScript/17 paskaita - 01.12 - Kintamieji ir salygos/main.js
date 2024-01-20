//        Kintamieji (masyvai ir objektai)

/*
  String number, boolean - vakar mokemes

  Objektas(object)  - { raktinisZodis:reiksme, kitasRaktinisZodis:reiksme }
    Skirtas grupuoti kintamuosius
    Reiksmes turi savo unikalius raktinius zodzius
    Eiliskumas nera svarbus
    Objektas naudojamas norint kazkoki dalyka __APRASYTI__

  Masyvas(array)    - [ reiksme, reiksme, reiksme, reiksme ]
    Skirtas grupuoti kintamuosius
    Reiksmes neturi raktiniu zodziu, tai kiekviena reiksme turi savo indekso numeri
    Eiliskumas YRA svarbus
    Masyvas naudojamas __ISVARDINTI__ vieno tipo dalykus (vardus, masinas, skaicius....)

  Tiek objektas, tiek masyvas yra konteineriniai kintamieji, skirti talpnti kitus kintamuosius (number, string, boolean, masyvai, objektai)
*/
console.groupCollapsed("Objektai ir masyvai intro");
let objektas = { gyvunas:"arklys", raktinisZodis:false, kitasRaktinisZodis:123*2, arklys:"širmas", pavadinimas:"Konstantinopolis" };
console.log(objektas);
let masyvas = [ "reiksme0", 32, "reiksme2", false ]
console.log(masyvas);

let blogasObjektas = { pirmas:"Rokas", antras:"Petras", trecias:"Jonas" };
let blogasMasyvas = [ "Rokas", "Banaitis", 186, 27, 80, "ruda", "melyna", false ];

let gerasObjektas = {
  vardas: "Rokas",
  pavarde: "Banaitis",
  ugis: 186,
  issimiegojes: false
}

let gerasMasyvas = [ "BMW", "Audi", "Mercedes", "Fiat", "Opel", "Volvo", "Tesla" ];

// Kreipimasis i objekta
  console.log(gerasObjektas);
  console.log(gerasObjektas.vardas); // "Rokas"
  console.log(gerasObjektas.ugis); // 186

// Kreipimasis i masyva
  console.log(gerasMasyvas);
  console.log(gerasMasyvas[0]); // "BMW"
  console.log(gerasMasyvas[3]); // "fiat"
console.groupEnd();

console.groupCollapsed("Nest'inti masyvai ir objektai");
  console.groupCollapsed("masyvas masyve");
    // JS'e reciausiai susiduriama situacija
    let matrica = [
      ["00", "01", "02"],
      ["10", "11", "12"],
      ["20", "21", "22"]
    ];
    console.log(matrica);
    console.log(matrica[0]); // ["00", "01", "02"]
    console.log(matrica[0][1]); // "01"
    console.log(matrica[2][1]); // "21"
    console.groupEnd();
  console.groupCollapsed("objektas objekte");
    let objektasObjekte = {
      vardas: "Rokas",
      pavarde: "Banaitis",
      ugis: 186,
      issimiegojes: false,
      gyvenamojiVieta: {
        miestas: "Kaunas",
        planeta: "Zeme",
        zemynas: "Europa",
        salis: "Lietuva",
        gatve: "Karaliaus Mindaugo pr.",
        namoNumeris: 32,
        butoNumeris: 654,
        laiptinesKodas: 6541
      }
    };
    console.log(objektasObjekte); // objektas
    console.log(objektasObjekte.gyvenamojiVieta); // objektas
    console.log(objektasObjekte.gyvenamojiVieta.zemynas); // "Europa"
    console.log(objektasObjekte.gyvenamojiVieta.salis); // "Lietuva"
  console.groupEnd();
  console.groupCollapsed("masyvas objekte");
    let masinos = {
      priekiuVaromos: ["Audi"],
      galuVaromos: ["BMW"],
      visomisVaromos: ["Rover", "Tesla"]
    };
    let masina = {
      marke: "Audi",
      metai: 2000,
      spalva: "ruda",
      bonusai: ["odines sedynes", "integruota multimedija", "sildomos sedynes"]
    };
    console.log(masina);
    console.log(masina.bonusai); // ["odines sedynes", "integruota multimedija", "sildomos sedynes"]
    console.log(masina.bonusai[1]); // "integruota multimedija"
  console.groupEnd();
  console.groupCollapsed("objektas masyve");
    let objektaiMasyve = [
      {
        vardas: "Rokas",
        pavarde: "Banaitis",
        amzius: 27,
        issimiegojes: false,
        plaukuSpalva: "ruda"
      }, {
        vardas: "Petras",
        pavarde: "Petraitis",
        amzius: 55,
        issimiegojes: false,
        plaukuSpalva: "juoda"
      }, {
        vardas: "Jonas",
        pavarde: "Jonaitis",
        amzius: 10,
        issimiegojes: true,
        plaukuSpalva: undefined
      }
    ];
    console.log(objektaiMasyve);
    console.log(objektaiMasyve[1]); // Petro objektas
    console.log(objektaiMasyve[1].amzius); // "55"
    console.log(objektaiMasyve[0].vardas + " yra " + objektaiMasyve[0].amzius + " metu amziaus."); // "Rokas yra 27 metu amziaus"
    console.log(objektaiMasyve[1].vardas + " yra " + objektaiMasyve[1].amzius + " metu amziaus.");
    console.log(objektaiMasyve[2].vardas + " yra " + objektaiMasyve[2].amzius + " metu amziaus.");
  console.groupEnd();

console.groupEnd();

//        Salygos

/*
      switch - soon; teranry ir logic AND - not soon
      if if_else if_elseIf ifelseIf_else - siandien

      Jeigu salyga yra tenkinama - vykdomas kodas jos viduje

    Loginiai operatoriai
      !   - NOT - apvercia reiksme
      &&  - AND - ar bent vienoje puseje yra melas, tokiu atveju grazinama false
      ||  - OR  - ar bent vienoje puseje yra tiesa, tokiu atveju grazinama true

      Truthy      |      Falsy
      ____________|_____________
      true        |   false
      non zero    |   0
      "string"    |   ""
      object      |   undefined
      array       |   null
      function    |   NaN

    Salygos
      if
        if(salyga) { veiksmai }
          Jeigu salyga yra tiesa - vykdomi veiksmai; melas - niekas nevyksta (kodas vaziuoja toliau)

      if else
        if(salyga) { veiksmai0 } else { veiksmai1 }
          Jeigu salyga yra tiesa - vykdomi veiksmai0; melas - vykdomi veiksmai1

      if else_if
        if(salyga0) { veiksmai0 } else if(salyga1) { veiksmai1 }
          Jeigu salyga0 yra tiesa - vykdomi veiksmai0 ir toliau einanciu salygu netikrina ir nevykdo ju veiksmu;
          Jeigu salyga0 yra melas - tikrinama salyga1 - jeigu salyga1 yra tiesa - vykdomi veiksmai1
          Jeigu salyga0 yra melas - tikrinama salyga1 - jeigu salyga1 yra melas - niekas nevyksta (kodas vaziuoja toliau)

      if elfe_if else
        if(salyga0) { veiksmai0 } else if(salyga1) { veiksmai1 } else { veiksmai2 }
          Jeigu salyga0 yra tiesa - vykdomi veiksmai0 ir toliau einanciu salygu netikrina ir nevykdo ju veiksmu;
          Jeigu salyga0 yra melas - tikrinama salyga1 - jeigu salyga1 yra tiesa - vykdomi veiksmai1 ir toliau einanciu salygu netikrina ir nevykdo ju veiksmu;
          Jeigu salyga0
          
      Jeigu salyga yra tenkinama - vkdomas jos kodas.
      Salygos viduje yra vykdoma vienintele veiksmu grupe.
      Else If'u gali buti kiek nori
      Jeigu nei viena salyga nera tiesa - vykdomas else'as
*/

// let amzius = prompt("Ivesk savo amziu");
// if(amzius >= 18){
//   console.log("Asmuo yra pilnametis.");
// } else {
//   console.log("Asmuo yra nepilnametis");
// }

// let amzius = prompt("Ivesk savo amziu");
// if(amzius < 18){
//   console.log("Asmuo nera pilnametis.");
// } else if(amzius >= 65){
//   console.log("Asmuo yra pensininkas");
// } else if(amzius < 30){
//   console.log("Asmuo yra pilnametis, bet nesuauges");
// } else {
//   console.log("Asmuo yra pilnametis ir suauges");
// }


//      Salygos su loginiais operatoriais

// let amzius = prompt("Ivesk savo amziu");
// if(amzius < 18){
//   console.log("Asmuo nera pilnametis.");
// } else if(amzius >= 65){
//   console.log("Asmuo yra pensininkas");
// } else if(amzius >= 18 && amzius < 30){
//   console.log("Asmuo yra pilnametis, bet nesuauges");
// } else {
//   console.log("Asmuo yra pilnametis ir suauges");
// }

//      Nest'intos salygos

let amzius = prompt("Ivesk savo amziu")*1;
console.log(amzius);
if(typeof(amzius) === "number" && (amzius < 18 && amzius >= 0)){
  console.log("Asmuo yra nepilnametis.")
} else if(amzius >= 18){
  console.log("Asmuo yra pilnametis.");
  if(amzius < 30){
    console.log("Dar jaunas.");
  } else if(amzius >= 30 && amzius < 65){
    console.log("Jau suauges.");
  } else {
    console.log("Deja, bet pensininkas.");
  }
} else {
  console.log("ERROR. Reikia skaiciaus.");
}
