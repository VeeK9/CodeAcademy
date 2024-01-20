let skaiciuMasyvas = [1, 123, 765, 45.7, 90, 462, 12, 25, 0.99, 901, 81, 8, 71, 1.5, 38, 9.7];
console.log(skaiciuMasyvas);

console.groupCollapsed('1. -- Kiekvienas elementas --');
for(let i = 0; i < skaiciuMasyvas.length; i++) {
  console.log(skaiciuMasyvas[i]);
};
console.groupEnd();
console.groupCollapsed('2. -- Kas trecias elementas --');
for(let i = 0; i < skaiciuMasyvas.length; i+=3) {
  console.log(skaiciuMasyvas[i]);
};
console.groupEnd();
console.groupCollapsed('3. -- Kas antras elementas nuo galo --');
for(let i = skaiciuMasyvas.length - 1; i >= 0; i-=2) {
  console.log(skaiciuMasyvas[i]);
};
console.groupEnd();
console.groupCollapsed('4. -- Elementai, didesni nei 54 --');
for(let i = 0; i < skaiciuMasyvas.length; i++) {
  if(skaiciuMasyvas[i] > 54) {
    console.log(skaiciuMasyvas[i]);
  }
};
console.groupEnd();
console.groupCollapsed('5. -- Lyginiai ir nelyginiai skaiciai --');
for(let i = 0; i < skaiciuMasyvas.length; i++) {
  if(skaiciuMasyvas[i]%2==0) {
    console.log('skaicius', skaiciuMasyvas[i], 'yra lyginis');
  } else {
    console.log('skaicius', skaiciuMasyvas[i], 'yra nelyginis');
  }
};
console.groupEnd();
console.groupCollapsed('5.1. -- Lyginiai skaiciai --');
for(let i = 0; i < skaiciuMasyvas.length; i++) {
  if(skaiciuMasyvas[i]%2==0) {
    console.log(skaiciuMasyvas[i]);
  }
};
console.groupEnd();
console.groupCollapsed('5.2. -- Nelyginiai skaiciai --');
for(let i = 0; i < skaiciuMasyvas.length; i++) {
  if(skaiciuMasyvas[i]%2) {
    console.log(skaiciuMasyvas[i]);
  }
};
console.groupEnd();