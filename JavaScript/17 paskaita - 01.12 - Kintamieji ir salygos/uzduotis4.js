let month = prompt("koks dabar menuo?");


switch (month.toLowerCase()) {
  case "gruodis":
  case "sausis":
  case "vasaris":
    console.log("Dabar yra ziema");
    break;
  case "kovas":
  case "balandis":
  case "geguze":
    console.log("Dabar yra pavasaris");
    break;
  case "birzelis":
  case "liepa":
  case "rugpjutis":
    console.log("Dabar yra vasara");
    break;
  case "rugsejis":
  case "spalis":
  case "lapkritis":
    console.log("Dabar yra ruduo");
    break;
  default:
    if(month >= 1 && month <= 12) {
      if(month < 3 || month == 12) {
        console.log("Dabar yra ziema.");
      } else if(month < 6) {
        console.log("Dabar yra pavasaris");
      } else if(month < 9) {
        console.log("Dabar yra vasara");
      } else {
        console.log("Dabar yra ruduo");
      };
    } else {
      console.log("Metuose yra 12 menesiu.");
    }
}


// switch (true) {
//   case month >= 1 && month < 3:
//     console.log("Dabar yra ziema");
//     break;
//   case month >= 3 && month < 6:
//     console.log("Dabar yra pavasaris");
//     break;
//   case month >= 6 && month < 9:
//     console.log("Dabar yra vasara");
//     break;
//   case month >= 9 && month < 12:
//     console.log("Dabar yra ruduo");
//     break;
//   case month == 12:
//     console.log("Dabar yra ziema");
//     break;
//   default:
//     console.log("Metuose yra 12 menesiu!");
// }