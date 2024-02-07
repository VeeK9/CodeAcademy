import Movie from "./components/movie.js";

// fetch('http://localhost:3000/filmai')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })

// fetch('http://localhost:3000/filmai/2')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })

// const filmas = {
  // id: String(new Date()*1),
//   pavadinimas: "Killers of the Flower Moon",
//   leidimoData: 2023,
//   nuotrauka: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Killers_of_the_Flower_Moon_film_poster.jpg/220px-Killers_of_the_Flower_Moon_film_poster.jpg"
// };

// fetch('http://localhost:3000/filmai', {
//   method: "POST",
//   headers: {
//     "Content-Type":"application/json"
//   },
//   body: JSON.stringify(filmas)
// })
  // .then(res => res.json())
  // .then(data => console.log(data))

  // const filmai = [
  //   {
  //     id: new Date()*1,
  //     pavadinimas: "Killers of the Flower Moon",
  //     leidimoData: 2023,
  //     nuotrauka: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Killers_of_the_Flower_Moon_film_poster.jpg/220px-Killers_of_the_Flower_Moon_film_poster.jpg"
  //   },{
  //     id: new Date()*1,
  //     pavadinimas: "Killers of the Flower Moon",
  //     leidimoData: 2023,
  //     nuotrauka: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Killers_of_the_Flower_Moon_film_poster.jpg/220px-Killers_of_the_Flower_Moon_film_poster.jpg"
  //   },{
  //     id: new Date()*1,
  //     pavadinimas: "Killers of the Flower Moon",
  //     leidimoData: 2023,
  //     nuotrauka: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Killers_of_the_Flower_Moon_film_poster.jpg/220px-Killers_of_the_Flower_Moon_film_poster.jpg"
  //   },{
  //     id: new Date()*1,
  //     pavadinimas: "Killers of the Flower Moon",
  //     leidimoData: 2023,
  //     nuotrauka: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Killers_of_the_Flower_Moon_film_poster.jpg/220px-Killers_of_the_Flower_Moon_film_poster.jpg"
  //   }
  // ];
// filmai.forEach(filmas => {
//   fetch('http://localhost:3000/filmai', {
//     method: "POST",
//     headers: {
//       "Content-Type":"application/json"
//     },
//     body: JSON.stringify(filmas)
//   })
// })

// fetch('http://localhost:3000/filmai/1707212767267', {
//   method: "DELETE",

// })
//   .then(res => {
//     console.log(res);
//     return res.text();
//   })
//   .then(data => {
//     console.log(data);
//   })

// const trintiMasyvas = ["1707212767267","1707212196133"]

// trintiMasyvas.forEach(trinamas => {
//   fetch(`http://localhost:3000/filmai/${trinamas}`, {
//     method: "DELETE"
//   })
// })

// fetch('http://localhost:3000/filmai/e7fe', {
//   method: "PUT",
//   headers: {
//     "Content-Type":"application/json"
//   },
//   body: JSON.stringify({
//     pavadinimas: "The Good, the Bad and the Ugly",
//     nuotrauka: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Good_the_bad_and_the_ugly_poster.jpg/220px-Good_the_bad_and_the_ugly_poster.jpg"
//   })
// });

// fetch('http://localhost:3000/filmai/e7fe', {
//   method: "PATCH",
//   headers: {
//     "Content-Type":"application/json"
//   },
//   body: JSON.stringify({
//     leidimoData: 1966
//   })
// })

fetch('http://localhost:3000/filmai')
  .then(res => res.json())
  .then(data => {
    data.forEach(filmas => {
      const newMovie = new Movie(filmas);
      document.querySelector('#movies > div').prepend(newMovie);
    })
  })

  document.querySelector('#movies > form').addEventListener('submit', e => {
    e.preventDefault();
    const filmas = {
      pavadinimas: e.target.elements.pavadinimas.value,
      nuotrauka: e.target.elements.poster.value,
      leidimoData: e.target.elements.year.valueAsNumber,
      id: String(Number(new Date()))
    }

    fetch('http://localhost:3000/filmai', {
      method: "POST",
      header: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(filmas)
    });

    const newMovie = new Movie(filmas);
    document.querySelector('#movies > div').prepend(newMovie);
  })