
let login = prompt("Who's there?");

if(login==null){
    alert("Canceled");
}else if(login == "Admin"){
     let password = prompt("Password");
     if(password == null){
        alert("Canceled");
     }else if(password == "I am in charge"){
        alert("Hello!");
     }else{
        alert("Wrong password!");
     }
}else{
    alert("I don't recognise you!");
}

