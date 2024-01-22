//              Kitos salygos  
/*
    Switch, ternary, loginis &&

//  switch(duomuo){
        case duomensSalyga:
            ... veiksmai ...
            break;
        case duomensSalyga2:
            ... veiksmai ...
            break;
        case duomensSalyga3:
            ... veiksmai ...
            break;
        default: // panasiai kaip else
            ... default veiksmai ...
    }

//  ternary
    salyga ? {... veiksmai tiesios atveju ...} : {... veiksmai fale atveju ...}


//  Loginis &&
    salyga && veiksmai tiesios atveju
*/

// ternary PVZ
let amzius = 25;
amzius >= 18 ? console.log("pilnametis") : console.log("nepilnametis");

amzius < 18                                             // if
    ? console.log('nepilnametis < 18')                   // if veiksmai
    : amzius >= 65                                       // else if
    ? console.log('pensininkas (>= 65)')                 // else if veiksmai
    : amzius >= 18 && amzius < 65                        // else if su AND
    ? console.log('darbingo amziaus (18 <= x <= 65)')    // else if su AND veiksmai
    : console.log('neteisinga ivestis');                 // else atvejis

// Loginis && PVZ
let arAdmin = true;
arAdmin && console.log("Yra admin, atvaizduojama dalykus");

//              Destrukturizavimas
/*
    Destrukturizavimas - kazko (parametrai, objetai, masyvai, ...?) isskaidymas i atskiras dalis
*/

// masyvai
console.groupCollapsed('masyvu destrukturizavimas');
    let masyvasDes = ['labas', undefined, true, 1, 654, false, NaN, 'string', 21];
    console.log(masyvasDes);
    // be destruk
    let el0 = masyvasDes[0];
    let el1 = masyvasDes[1] !== undefined ? masyvasDes[1] : 'default reiksme';
    let el2 = masyvasDes[2];
    let elLike = masyvasDes.slice(5);
    console.log(el0, el1, el2, elLike);
    // su destr
    let [em0, em1 = 'default reiksme', em2,,, ...emLike] = masyvasDes; // ...kazkas - spread'inimas
    console.log(em0, em1, em2, emLike);
    /*
        destrukturizuojant masyva vardijama eiles tvarka
        galima prilyginti default reiksmes jeigu originali reiksme yra undefined
        galima praleisti reiksmes dedant kablelius
        galima atlikti spread'inima su ...
    */
    let pvzDesMas = pilnasVardas => pilnasVardas.split(' ');
    let [vardasF, pavardeF] = pvzDesMas("Vardenis Pavardenis");
    console.log(vardasF, pavardeF)


console.groupEnd();

console.groupCollapsed('objektu destrukturizavimas');
    let objektasDes = {
        vardas: "Petras",
        amzius: 55,
        pavarges: true,
        vairuotojoTeises: undefined,
        gyvenamojiVieta: {
            miestas: 'Vilnius',
            salis: 'Lietuva'
        },
        pomegiai: ['kartingai', 'baidares', 'zygiavimas']
    };
    // be destruk
    let objVardas = objektasDes.vardas;
    let objSalis = objektasDes.gyvenamojiVieta.salis;
    let objPomegis = objektasDes.pomegiai[2];
    let objVair = objektasDes.vairuotojoTeises !== undefined ? objektasDes.vairuotojoTeises : false;
    console.log(objVardas, objSalis, objPomegis, objVair);
    // su destr
    let { vardas, amzius:metai, gyvenamojiVieta:{salis:valstybe}, vairuotojoTeises:arGaliVairuoti=false, pomegiai:{2:pomegis}, ...restObj} = objektasDes;
    console.log(vardas, metai, valstybe, arGaliVairuoti, pomegis, restObj);
    /*
        destrukturizuojant objekta kreipiesi i raktinis zodzius
        raktinius zodzius gali pervadinti - raktZod:kitasPav
        gali kreiptis i rakta esanti objekte - objViduje:{raktas}
        gali kreiptis i elementa masyve per indeksa, bet privalu nurodyti nauja pavadinima - masViduje:{index:naujasPav}
        gali nurodyti default reiksme jei originalioji yra undefined naudojant lygybe
        galima susirinkti likusias NEPALIESTAS objekto reiksmes
    */

console.groupEnd();
console.groupCollapsed('parametru destr'); //nieko naujo, tas pats kas ir objektu ar masyvu destr tik, kad parametru aprasymo vietoje.
    function spreadPvz(tekstas, ...skaiciai){
        console.log(tekstas);
        console.log(skaiciai);
    }
    spreadPvz('labas rytas',4,6,5,7,8,9,45,54,564,6,516,1,81,65,16,16,1);
    // function objKaipParDes(kazkas){
    //     console.log(kazkas);
    //     console.log(`${kazkas.vardas} yra ${kazkas.amzius} metu amziaus`);
    // }
    // function objKaipParDes(kazkas){
    //     let vardas = kazkas.vardas;
    //     let amzius = kazkas.amzius;
    //     console.log(`${vardas} yra ${amzius} metu amziaus`);
    // }
    function objKaipParDes({vardas, amzius, ...rest}){
        console.log(vardas, amzius, rest);
        console.log(`${vardas} yra ${amzius} metu amziaus`);
    }
    objKaipParDes(objektasDes);
console.groupEnd();

//              Masyvu Iteraciniai Metodai
/*
    Iteraciniai masyvu metodai yra tokie metodai, kur sukant sukant cikla per masyva, atliekami kazkokie masyvo metodui reikalingi veiksmai
*/  

let masyvasString = ['Suka', 'cikla', 'per', 'visa', 'masyva', 'ir', 'kiekvienos', 'iteracijos', 'metu', 'atlieka', 'kazkokius', 'nurodytus', 'veiksmus', 'su', 'tos', 'iteracijos', 'elementu.'];
let masyvasNumber = [1,2,3,84,51,26,-451,-1,-46,654,151,3,-4,0];

//              forEach
/*
    Syntax:
        masyvas.forEach((el) => {...veiksmai...})
        masyvas.forEach((el, i) => {...veiksmai...})
        masyvas.forEach((el, i, arr) => {...veiksmai...})

    forEach metodas - suka cikla per visa masyva ir kiekvienos iteracijos metu atlieka kazkokius nurodytus veiksmus su tos iteracijos elementu.
    forEach negali grazinti reiksmes, neturi return.
    forEach negali buti sustabdytas, neveikia break;
*/
console.groupCollapsed('for each');
masyvasString.forEach((element, index)=>{console.log(index, element)});
console.groupEnd();

//              filter
/*
    Syntax:
        masyvas.filter((el) => {...veiksmai...salyga return})
        masyvas.filter((el, i) => {...veiksmai...salyga return})
        masyvas.filter((el, i, arr) => {...veiksmai...salyga return})

    Filter metodas - suka cikla per visa masyva ir kiekvienos iteracijos metu tikrinama ar elementas atitinka kazkokia salyga. jeigu atitinka ir grazinama true, tas elementas yra atrenkamas i grazinama masyva; Jeigu neatitinka salygos ir graazinama false - nebuna atrenkamas.
*/

console.groupCollapsed('filter');
    let filterAts = masyvasString.filter( el => el.charAt(0) === 'i');
    console.log(filterAts);
console.groupEnd();

//              map
/*
    Syntax:
        masyvas.map((el) => {...veiksmai... return })
        masyvas.map((el, i) => {...veiksmai... return })
        masyvas.map((el, i, arr) => {...veiksmai... return })

    map metodas - suka cikla per visa masyva ir kiekvienos iteracijos metu grazina kazkaip mutuota/pakeista/redaguota elementa, galu gale grazinamas masyvas su mutuotais elementais.
*/

console.groupCollapsed('map');
    let mapAts = masyvasNumber.map((el, i) => {
        return {
            skaicius: el,
            indeksas: i,
            arLyginis: el % 2 === 0
        }
        // return `Indekse ${i} esantis skaicius ${el} yra ${el%2 === 0 ? 'lyginis' : 'nelyginis'}.`
    });
    console.log(mapAts);
console.groupEnd();

//              reduce
/*
    Syntax:
        masyvas.reduce((accumulator, currentElement) => {...veiksmai... return })
        masyvas.reduce((accumulator, currentElement, i) => {...veiksmai... return })
        masyvas.reduce((accumulator, currentElement, i, arr) => {...veiksmai... return })
        masyvas.reduce((accumulator, currentElement) => {...veiksmai... return }, initialValue)
        masyvas.reduce((accumulator, currentElement, i) => {...veiksmai... return }, initialValue)
        masyvas.reduce((accumulator, currentElement, i, arr) => {...veiksmai... return }, initialValue)

    Reduce metodas - suka cikla per visa masyva ir kiekvienos iteracijos metu keicia accumulator'iu naudodant currentElement'o reiksme ir grazina pakeista accumulator'iu kitai iteracijai. Viso metodo gale grazinaama viena reiksme - accumulator.
    Pirmosios iteracijos metu, accumulator yra 0-tasis elementas, o currentElement yra 1-asis elementas.
    Jeigu yra nurodytas initialValue - pirmosios iteracijos metu, accumulator yra initialValue, o currentElement yra 0-tasis elementas.
*/

console.group('reduce');

    let reduceAts = mapAts.reduce((acc, curr, i) => {
        // console.log('iteracija:', i);
        // console.log('acc:', acc);
        // console.log('curr:', curr);
        // console.log('-----');
        return acc + curr.skaicius;
    }, 0);
    console.log(reduceAts);
console.groupEnd();

//              reduceRight
// Lygiai tas pats kas ir reduce, tik is kito galo. (rtl - right to left)

//              flatMap
// Junginys flat(1) ir map() metodu. Neturi galimybes keisti flat lygmens.

//              Some
/*
    Syntax:
        masyvas.some((el) => {...veiksmai... salyga return })
        masyvas.some((el, i) => {...veiksmai... salyga return })
        masyvas.some((el, i, arr) => {...veiksmai... salyga return })

    Some metodas - suka cikla per visa masyva ir kiekvienos iteracijos metu tikrina ar elementas atitinka nurodyta salyga; iteraciju metu grazina true arba false.
    Jeigu bent vienoje iteracijoje salyga grazina true - visas metodas grazina true ir tolimesnes iteracijos nebevyksta.
    Jeigu visose iteracijose salygos grazina false - visas metodas grazina false.
*/

//              Every
/*
    Syntax:
        masyvas.every((el) => {...veiksmai... salyga return })
        masyvas.every((el, i) => {...veiksmai... salyga return })
        masyvas.every((el, i, arr) => {...veiksmai... salyga return })

    SoEveryme metodas - suka cikla per visa masyva ir kiekvienos iteracijos metu tikrina ar visi elementas atitinka nurodyta salyga; iteraciju metu grazina true arba false.
    Jeigu bent vienoje iteracijoje salyga grazina false - visas metodas grazina false ir tolimesnes iteracijos nebevyksta.
    Jeigu visose iteracijose salygos grazina true - visas metodas grazina true.
*/

console.group('some / every');

    let someEveryAts = masyvasNumber.some((el, i) => {
        console.log(i, el);
        return el > 10;
    });
    console.log(someEveryAts);

console.groupEnd();

//              Find
/*
    Syntax:
        masyvas.find((el) => {...veiksmai... salyga return })
        masyvas.find((el, i) => {...veiksmai... salyga return })
        masyvas.find((el, i, arr) => {...veiksmai... salyga return })

    Find metodas - suka cikla per visa masyva ir tikrina ar elementas atitinka nurodyta salyga. Jeigu randamas elementas, kuris atitinka nurodyta salyga - jis yra grazinamas (elementas) ir nebera tikrinami kiti elementai.
    Jeigu neranda nei vienas elementas, kuris atitinka nurodyta salyga, yra grazinama undefined. 
*/

console.group('find');

    let findAts = mapAts.find(el => el.skaicius < 0);
    console.log(findAts);

console.groupEnd();

//              FindIndex
/*
    Syntax:
        masyvas.findIndex((el) => {...veiksmai... salyga return })
        masyvas.findIndex((el, i) => {...veiksmai... salyga return })
        masyvas.findIndex((el, i, arr) => {...veiksmai... salyga return })

    Find metodas - suka cikla per visa masyva ir tikrina ar elementas atitinka nurodyta salyga. Jeigu randamas elementas, kuris atitinka nurodyta salyga - grazinamas jo indeksas ir nebera tikrinami kiti elementai.
    Jeigu neranda nei vienas elementas, kuris atitinka nurodyta salyga, yra grazinama -1. 


*/

//              FindLast / FindLastIndex
// Daro ta pati ka ir Find/findIndex, tik nuo kito galo (rtl - right to left)