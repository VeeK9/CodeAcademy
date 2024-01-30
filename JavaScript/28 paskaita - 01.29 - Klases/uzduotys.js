// 1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" parametrus ir savybes.
//   1.1) Sukurkite papildomą savybę "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").
//   1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').

class Car{

  constructor(pavadinimas, metai){
    this.name = pavadinimas,
    this.year = metai,
    this.helloCar = `Cia yra vienintelis toks ${this.name} modelis. Jis buvo pagamintas ${this.year} metais.`
  }
  age(){
    return `Siam automobiliui yra ${new Date().getFullYear() - this.year} metai`;
  }
}

const auto = [
  new Car("Saab", 1992),
  new Car("Audi", 1984)
];

// 2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus ir savybes.
//   2.1) Sukurkite papildomą savybę "color" ir priskirkite jam randomly parinktą spalvą.
//   2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
//   2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.

class Rectangle{
  constructor(width, height){
    this.width = width,
    this.height = height,
    this.color =  `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
  }
  area(){
    return `Staciakampio plotas: ${this.width * this.height}`;
  }
  perimeter(){
    return `Staciakampio perimetras: ${(this.width + this.height)*2}`;
  }
}

let kvad = new Rectangle(40,40);
let stac2d = new Rectangle(60,30);

const plot = document.createElement('h4');
const per = document.createElement('h4');
const canvas2 = document.createElement('canvas');
const pencil2 = canvas2.getContext("2d");
document.querySelector('#antra > form').addEventListener('submit', e =>{
  e.preventDefault();
  const width = e.target.elements.width.valueAsNumber;
  const height = e.target.elements.height.valueAsNumber;
  const rect = new Rectangle(width, height);
  plot.textContent = rect.area();
  per.textContent = rect.perimeter();
  document.querySelector('#antra > form').append(plot, per);

  canvas2.style.width = 1000;
  canvas2.style.height = 1000;
  canvas3.setAttribute('height', '800px');
  const xAsis = canvas2.width/2 - width;
  const yAsis = height/2;
  pencil2.fillStyle = 'white';
  pencil2.fillRect(0,0,canvas2.width, canvas2.height);
  pencil2.fillStyle = rect.color;
  pencil2.fillRect(xAsis, yAsis, width*2, height*2);
  document.querySelector('#antra').appendChild(canvas2);

});

// 3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus ir savybes.
//   3.1) Sukurkite papildomą savybę "coordinates" ir priskirkite jam "x" ir "y" reikšmes.
//   3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).

// class Point{
//   constructor(x, y){
//     this.x = x,
//     this.y = y,
//     this.coordinates = {
//       x,
//       y
//     }
//   }
//   distance(){
//     return `Atstumas tarp siu tasku: ${Math.hypot((this.x-kitasPoint.x) + (this.y-kitasPoint.y))}`
//   }
// }



// const canvas3 = document.createElement('canvas');
// const pencil3 = canvas3.getContext("2d");
// const atstumas = document.createElement('h4');
// document.querySelector('#trecia > form').addEventListener('submit', e =>{
//   e.preventDefault();
//   const x = e.target.elements.xAsis.valueAsNumber;
//   const y = e.target.elements.yAsis.valueAsNumber;
//   const points = new Point(x, y);
//   atstumas.textContent = points.distance();
//   document.querySelector('#trecia > form').appendChild(atstumas);

//   pencil3.fillStyle = 'white';
//   pencil3.fillRect(0,0,canvas3.width, canvas3.height);
//   canvas3.style.width = 1000;
//   canvas3.style.height = 1000;
//   canvas3.setAttribute('height', '800px');
//   const xAsis = canvas3.width/2 - x*2;
//   const yAsis = y/2;
//   pencil3.strokeStyle = "lightgray";
//   pencil3.beginPath();
//   pencil3.moveTo(xAsis, yAsis);
//   pencil3.lineTo(xAsis, yAsis + y*4);
//   pencil3.lineTo(xAsis + x*4, yAsis + y*4);
//   pencil3.closePath();
//   pencil3.stroke();
//   pencil3.strokeStyle = "black";
//   pencil3.beginPath();
//   pencil3.moveTo(xAsis + x*4, yAsis + y*4);
//   pencil3.lineTo(xAsis, yAsis);
//   pencil3.closePath();
//   pencil3.stroke();
//   document.querySelector('#trecia').appendChild(canvas3);

// });

// 4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", "height" ir "depth" parametrus ir savybes.
//   4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
//   4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
//   4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.

class Rectangle3d{
  constructor(width, height, depth){
    this.width = width,
    this.height = height,
    this.depth = depth
  }
  volume(){
    return `3D Staciakampio turis yra: ${this.width*this.height*this.depth}`
  }
  surfaceArea(){
    return `3D Staciakampio pavirsiaus plotas: ${2*(this.width*this.height)+2*(this.width*this.depth)+2*(this.height*this.depth)}`
  }
  perimeter(){
    return `3D Staciakampio perimetras yra: ${4*this.width+4*this.height+4*this.depth}`
  }
}

let kub = new Rectangle3d(20,20,20);
let stac3d = new Rectangle3d(30,10,15);

const volume = document.createElement('h4');
const surfaceArea = document.createElement('h4');
const perimeter = document.createElement('h4');
const canvas4 = document.createElement('canvas');
const pencil4 = canvas4.getContext("2d");
document.querySelector('#ketvirta > form').addEventListener('submit', e =>{
  e.preventDefault();
  const plotis = e.target.elements.plotis.valueAsNumber;
  const aukstis = e.target.elements.aukstis.valueAsNumber;
  const gylis = e.target.elements.gylis.valueAsNumber;
  const rect = new Rectangle3d(plotis, aukstis, gylis);
  volume.textContent = rect.volume();
  surfaceArea.textContent = rect.surfaceArea();
  perimeter.textContent = rect.perimeter();
  document.querySelector('#ketvirta > form').append(volume, surfaceArea, perimeter);
  canvas4.style.width = 1000;
  canvas4.style.height = 1000;
  canvas3.setAttribute('height', '800px');
  const xAsis = canvas4.width/2 - plotis - gylis/2;
  const yAsis = gylis;
  pencil4.fillStyle = 'white';
  pencil4.fillRect(0,0,canvas4.width, canvas4.height);
  pencil4.fillStyle = "lightgray";
  pencil4.fillRect(xAsis, yAsis, plotis*2, aukstis*2);
  pencil4.fillStyle = "darkgray";
  pencil4.beginPath();
  pencil4.moveTo(xAsis, yAsis);
  pencil4.lineTo(xAsis + plotis*2, yAsis);
  pencil4.lineTo(xAsis + plotis*2 + gylis, yAsis - gylis);
  pencil4.lineTo(xAsis + gylis, yAsis - gylis);
  pencil4.closePath();
  pencil4.fill();
  pencil4.fillStyle = "gray";
  pencil4.beginPath();
  pencil4.moveTo(xAsis + plotis*2, yAsis);
  pencil4.lineTo(xAsis + plotis*2, yAsis + aukstis*2);
  pencil4.lineTo(xAsis + plotis*2 + gylis, yAsis + aukstis*2 - gylis);
  pencil4.lineTo(xAsis + plotis*2 + gylis, yAsis - gylis);
  pencil4.closePath();
  pencil4.fill();
  document.querySelector('#ketvirta').appendChild(canvas4);
});

// 5+) Pabandyti sukurti UI (User Interface (Vartotojo Sąsaja)) 2-4 užduotims ir spausdinti informaciją į ekraną. (Kas nori pasižiūrėkite JS Canvas ir su juo pabandykite atvaizduoti figūras puslapyje(bent jau 2D))

