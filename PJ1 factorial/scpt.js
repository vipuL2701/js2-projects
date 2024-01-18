document.getElementById('clickme').addEventListener('click', function(e){
    //console.log(alert);
    e.innerHTML = alert("YOU CLICK THE BUTTON")
})

///////  2nd part/////////////////////////

const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
  e.preventDefault()

  let num = parseInt(document.querySelector('#input').value)
  var result=1;
    if (num === 0 || num === 1) {
      e.innerHTML = alert(`the factorial of ${num} is 1`);
   }else{
        for(var i=1;i<=num;i++){
             result = result * i;
      }
      e.innerHTML = alert(`the factorial of ${num} is ${result}`);
   }
})
