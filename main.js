const button = document.getElementById("btn");
const color = document.querySelector(".color");

// const colors =['#ff5733', '#f9ff33', '#3371ff', 'red', 'green','rgb(85, 255, 51'];
// button.addEventListener('click', () =>{
//   let hexColor = colors[getRandomNumber()]
//   document.body.style.backgroundColor = hexColor;
//   color.textContent =hexColor;
// } );
// function getRandomNumber() {
//   return Math.floor(Math.random()  * colors.length);
//  }

 const hex =[ '0', '1', '2', '3','4','5','6','7','8','9','A','B','C','D','E','F'];

 button.addEventListener('click', () =>{
  let hexColor = generateHex();
  document.body.style.backgroundColor = hexColor;
  color.textContent =hexColor;
} );
 function generateHex() {
  let hexColors ='#';
  for(let i =0; i < 6; i++){
    hexColors +=hex[getRandomNumber()];
  }
  return hexColors;
}

function getRandomNumber() {
 return Math.floor(Math.random()  * hex.length);
}

