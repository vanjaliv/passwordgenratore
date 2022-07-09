var sc, sa, ca, no, len;
function genratepassword(){
    const smallalpha = ["a" , "b" ,"c" , "d","e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q" , "r", "s","t", "u","v", "w", "x" ,"y","z" ]
    const capitalalpha = ["A" , "B" ,"C" , "D","E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q" , "R", "S","T", "U","V", "W", "X" ,"Y","Z" ]
     const specialcharacter = ["!", "@" , "#", "$", "%", "^", "&","*","(", ")", "+"]
     var password  = "";
     var charac = 0;
     for(let i = 0; i<=len; i++)
     if(charac !==len){
        if(sa ===  true){
            password = password + smallalpha[Math.floor(Math.random()*25)]
        }
        if(ca ===  true){
            password = password + capitalalpha[Math.floor(Math.random()*25)]
        }
        if(sc ===  true){
            password = password + specialcharacter[Math.floor(Math.random()*25)]
        }
        if(no ===  true){
            password = password + [Math.floor(Math.random()*100)]
        }
       charac = charac + 1 
     }
     password = password.slice(0, len);
     document.getElementById("password").innerHTML = "password : " + password
}

function getvalue(){
    sc = document.getElementById("sc").checked;
    sa = document.getElementById("sa").checked;
    ca = document.getElementById("ca").checked;
    no = document.getElementById("no").checked;
    len = document.getElementById("length").value;
    if(len < 4){
        alert("the minimum length is 4 please reenter the length")
    } else if(len > 15){
        alert("the minimum length is 15 please reenter the length")

    }

    else {
        genratepassword()
    }
}