

function matchPassword(){
    let pw1= document.getElementById("password")
    let pw2=document.getElementById("c-password")
   
    if(pw1.value!=pw2.value){
        alert("passwords did not match!")
    }else{
        alert("Account created successfully!")
    }
}