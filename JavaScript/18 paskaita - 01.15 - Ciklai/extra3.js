for(let i = 2; i <= 100; i++) {
  let pirminis = true;
  for(let m = 2; m < i; m++) {
    if(i%m === 0) {
      pirminis = false;
      break;
    }
  }
  if(pirminis==true) {
    console.log(i);
  }
}
