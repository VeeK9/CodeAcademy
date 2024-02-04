// Cookies
// susikurti cookie:
document.cookie = 'name=value';
document.cookie = 'vardas=Petras';
document.cookie = 'grybas=pievagrybis';
document.cookie = `masyvas=[1,2,3,'valio',true]`;
document.cookie = `object={raktas:'reiksme',skaicius:5}`;
// document.cookie = `expire=after some time; expires=${new Date('Fri Feb 02 2024 10:00')}`;

console.groupCollapsed('cookie');
// pasiimti cookie:
console.log(document.cookie);
const cookieObj = {};
document.cookie.split('; ').forEach(cookie => {
  console.log(cookie);
  const cookieEl = cookie.split('=');
  console.log(cookieEl);
  cookieObj[cookieEl[0]] = cookieEl[1];
  // kad paversti masyvus/objektus i normalius, reikia labai daug zaidimo
})
console.log(cookieObj);
console.groupEnd();

// Session/Local Storage

// sessionStorage.setItem('vardas', 'Petras');
// sessionStorage.setItem('amzius', 33);

// localStorage.setItem('vardas', 'Petras');
// localStorage.setItem('amzius', 33);
// localStorage.setItem('alkanas', true);
console.groupCollapsed('local simple');
const metai = localStorage.getItem('amzius');
console.log(metai, typeof(metai));

// localStorage.removeItem('alkanas');
// localStorage.clear();

const smth = localStorage.key(0);
console.log(smth);
console.log(localStorage.getItem(smth));
console.log(localStorage.length);

for(let i = 0; i < localStorage.length; i++){
  const smth0 = localStorage.key(i);
  console.log(smth0);
  console.log(localStorage.getItem(smth0));
};

console.groupEnd();

const asmenys = [
  {
    vardas: "Jonas",
    amzius: 33,
    alkanas: true
  },{
    vardas: "Petras",
    amzius: 27,
    alkanas: false
  },{
    vardas: "Kazys",
    amzius: 50,
    alkanas: true
  },{
    vardas: "Rokas",
    amzius: 10,
    alkanas: false
  }
];

// localStorage.setItem('asmenys', asmenys); // blogai, nes saugoja kaip string ir gaunasi nesamone.
localStorage.setItem('asmenys', JSON.stringify(asmenys));
console.log(JSON.parse(localStorage.getItem('asmenys')));