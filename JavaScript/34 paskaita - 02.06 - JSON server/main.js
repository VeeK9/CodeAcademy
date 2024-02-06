// fetch('http://localhost:3000/filmai')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })

fetch('http://localhost:3000/filmai/2')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })