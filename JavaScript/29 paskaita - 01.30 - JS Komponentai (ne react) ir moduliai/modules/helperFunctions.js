// export const randomColor = (type) => {
const randomColor = (type) => {
  if(type === 'hex'){
    return `#${Math.floor(Math.random()*16777216).toString(16).padStart(6, '0')}`;
  } else if(type === 'rgb'){
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
  } else {
    return 'nemoku kitokiu spalvu';
  }
}

// export const throwError = (string) => {
const throwError = (string) => {
  window.alert(string);

}
// export const sum = (nr1, nr2) => nr1+nr2;
const sum = (nr1, nr2) => nr1+nr2;
// export const division = (nr1, nr2) => nr1/nr2;
const division = (nr1, nr2) => nr1/nr2;

export {randomColor, throwError, sum, division};