let name = prompt("Tavo vardas");
let result = name;
if(name.endsWith("us")) {
 result = name.slice(0, -2).concat("au");
} else if(name.endsWith("as")){
  result = name.slice(0, -1).concat("i");
} else if(name.endsWith("is") || name.endsWith("ys")){
  result = name.slice(0, -1);
} else if(name.endsWith("ė")){
  result = name.slice(0, -1).concat("e");
}
alert("Labas, " + result + "!");