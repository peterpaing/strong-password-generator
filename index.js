const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword(){
  let result = "";
  for (let i  = 0 ; i < 15 ; i++){
    let random = Math.floor(Math.random()*characters.length)
   result +=  characters[random]
  } 
  return result; 
}

function showPasswords(){
    const password = document.querySelectorAll('.password-display')

    const passwordOne = generatePassword();
    const passwordTwo=generatePassword();
    password[0].innerText = passwordOne; 
    password[1].innerText = passwordTwo; 
}

function copyPassword(element){

    const passwordCopy = element.innerText;

    if (passwordCopy.trim() === ""){
        return;
    }

    navigator.clipboard.writeText(passwordCopy);

    alert("Copied");
}