let month = prompt("koks dabar menuo?");


// switch (month.toLowerCase()) {
//   case "gruodis":
//     console.log("Dabar yra ziema");
//     break;
//   case "sausis":
//     console.log("Dabar yra ziema");
//     break;
//   case "vasaris":
//     console.log("Dabar yra ziema");
//     break;
//   case "kovas":
//     console.log("Dabar yra pavasaris");
//     break;
//   case "balandis":
//     console.log("Dabar yra pavasaris");
//     break;
//   case "geguze":
//     console.log("Dabar yra pavasaris");
//     break;
//   case "birzelis":
//     console.log("Dabar yra vasara");
//     break;
//   case "liepa":
//     console.log("Dabar yra vasara");
//     break;
//   case "rugpjutis":
//     console.log("Dabar yra vasara");
//     break;
//   case "rugsejis":
//     console.log("Dabar yra ruduo");
//     break;
//   case "spalis":
//     console.log("Dabar yra ruduo");
//     break;
//   case "lapkritis":
//     console.log("Dabar yra ruduo");
//     break;
//   default:
//     if(month >= 1 && month <= 12) {
//       if(month < 3 || month == 12) {
//         console.log("Dabar yra ziema.");
//       } else if(month < 6) {
//         console.log("Dabar yra pavasaris");
//       } else if(month < 9) {
//         console.log("Dabar yra vasara");
//       } else {
//         console.log("Dabar yra ruduo");
//       };
//     } else {
//       console.log("Metuose yra 12 menesiu.");
//     }
// }


switch (true) {
  case month >= 1 && month < 3:
    console.log("Dabar yra ziema");
    break;
  case month >= 3 && month < 6:
    console.log("Dabar yra pavasaris");
    break;
  case month >= 6 && month < 9:
    console.log("Dabar yra vasara");
    break;
  case month >= 9 && month < 12:
    console.log("Dabar yra ruduo");
    break;
  case month == 12:
    console.log("Dabar yra ziema");
    break;
  default:
    console.log("Metuose yra 12 menesiu!");
}