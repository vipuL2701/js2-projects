let form = document.querySelector('form')
let outPut = document.querySelector('#res')

form.addEventListener('submit', function(e) {
e.preventDefault()

let input = document.querySelector('#input').value;

// console.log(input);
// console.log(typeof input);

const arry = input.split(" ");
//console.log(typeof arry);

const result= arry.map(d => {
   // console.log(typeof d)
   // console.log(typeof d.split("") );
   return d.split('').reverse().join('');
})
e.innerHTML = alert(`${result}`);
outPut.innerHTML = `hi${result}`
})