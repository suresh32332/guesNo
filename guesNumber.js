var Result = document.getElementById("Result")
var inputbox = document.getElementById("inputbox")
function submitButton(){
    var random = Math.floor(Math.random() * 10 ) + 1
    console.log(random)
    let input = parseInt(inputbox.value);
  //  let input = inputbox.value
    if( input <= 9){  
         if(random==input){
            Result.innerHTML= "✅Correct..."
        }
        else{ 
          Result.textContent="❗️Incorrect..."
        }  
    }
    else {
        alert("❌Incorrect. Please enter a number between 1 and 10.")
        
    }
     location.reload();
   
}
