import School from "./components/School.js";

//    setTimeout

// setTimeout(() => {
//   console.log(Math.floor(Math.random()*5));
//   setTimeout(() => {
//     console.log(Math.floor(Math.random()*5));
//   }, 3000)
// }, 2000)
// console.log('labas');

//    Promise

// function grazink(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Grazino');
//     }, 1000)
//   })
// }
// console.log(grazink());

//    Promise(full) + then catch finally

function delay(time, data){
  return new Promise((resolve, reject) => {
    if(typeof(time) !== 'number'){
      reject(new Error(`${time} must be a number`))
    } else if(time > 10000 || time < 0){
      reject(new Error(`${time} must be less than 10000 but more than 0`))
    } else {
      setTimeout(() => resolve(data+' smth changed'), time);
    }
  })
}
// delay(3000, 'alio')
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
//   .finally(() => console.log('baigesi'))

//    async ir await

// async function randomName(){
//   try {
//     const delayAts = await delay(-1000, 'hihi haha');
//     console.log(delayAts);
//   } catch(err) {
//     console.error(err);
//   } finally {
//     console.log('baigesi');
//   }
// }
// randomName();

(async () => {
  // const res = await fetch(`http://localhost:3000/school`);
  // const schools = await res.json();
  const schools = await (await fetch(`http://localhost:3000/school`)).json();
  console.log(schools)

  schools.forEach(school => {
    const schoolDiv = new School(school);

    document.querySelector('#crud > div').appendChild(schoolDiv);
  })
})()

document.querySelector('#crud > form').addEventListener('submit', e => {
  e.preventDefault();
  // const formData = new FormData(e.target)
  // const inputs = Object.fromEntries(formData);
  const school = {
    pavadinimas: e.target.elements.name.value,
    miestas: e.target.elements.city.value,
    fakultetuKiekis: e.target.elements.fNr.valueAsNumber,
    id: String(Number(new Date()))
  };
  const schoolDiv = new School(school);
  document.querySelector('#crud > div').appendChild(schoolDiv);

  fetch(`http://localhost:3000/school`, {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(school)
  });

  e.target.reset();

  console.log(school);
})