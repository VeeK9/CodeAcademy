let combo = "";
let times = prompt("Kiek kartu?");
if(times <= 0){
  times = 1;
}
for(let i = 1; i <= times; i++) {
  combo = combo += "Vytautas";
}
console.log(combo);