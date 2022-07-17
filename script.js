const input = document.querySelector('#phone');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
   if(input.value.length !== 10)
   {

       log.textContent = "Please enter a Valid Number";
       console.log("Please Enter a Valid Number",input.value.length);
   }
   else{
    console.log("NUmber is correct")
   }
}