let zmogus = {
  name: prompt("ivesk savo varda:"),
  age: prompt("Ivesk savo amziu:"),
  gender: prompt("Ivesk savo lyti:"),
  city: prompt("Ivesk savo gimtaji miesta:")
};
if(zmogus.gender.toLowerCase() === "moteris") {
  console.log("Kas geriau, suknele ar sijonas?");
} else if(zmogus.gender.toLowerCase() === "vyras") {
  console.log("Kas geriau, kaklaraistis ar varlyte?");
} else {
  console.log("Siais laikais visokiu buna.")
};