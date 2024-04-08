function cname() {
    var n = document.getElementById("name");
    if (n.value == "") {
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("name").style.background = "white";
    }else{
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("name").style.background = "white";
    }
}
function fname(){
    document.getElementById("name").style.background = "lightgray";
}


function cusername() {
    var un = document.getElementById("username");
    if (un.value == "") {
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("username").style.background = "white";
    }else{
        document.getElementById("username").style.borderColor = "green";
        document.getElementById("username").style.background = "white";
    }
}
function fusername(){
    document.getElementById("username").style.background = "lightgray";
}


function cpass() {
    var pw = document.getElementById("password");
    if (pw.value == "") {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").style.background = "white";
    }else{
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("password").style.background = "white";
    }
}
function fpass(){
    document.getElementById("password").style.background = "lightgray";
}


function cemail() {
    var e = document.getElementById("email");
    if (e.value == "") {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.background = "white";
    }else{
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("email").style.background = "white";
    }
}
function femail(){
    document.getElementById("email").style.background = "lightgray";
}


function cadd() {
    var a = document.getElementById("add");
    if (a.value == "") {
        document.getElementById("add").style.borderColor = "red";
        document.getElementById("add").style.background = "white";
    }else{
        document.getElementById("add").style.borderColor = "green";
        document.getElementById("add").style.background = "white";
    }
}
function fadd(){
    document.getElementById("add").style.background = "lightgray";
}


function cint() {
    var i = document.getElementById("int");
    if (i.value == "") {
        document.getElementById("int").style.borderColor = "red";
        document.getElementById("int").style.background = "white";
    }else{
        document.getElementById("int").style.borderColor = "green";
        document.getElementById("int").style.background = "white";
        document.getElementById("submit").removeAttribute("disabled");
    }
}
function fint(){
    document.getElementById("int").style.background = "lightgray";
}


function cgender() {
    var g = document.getElementById("gender");
    if (g.value == "") {
        document.getElementById("gender").style.borderColor = "red";
        document.getElementById("gender").style.background = "white";
    }else{
        document.getElementById("gender").style.borderColor = "green";
        document.getElementById("gender").style.background = "white";
    }
}
function fgender(){
    document.getElementById("gender").style.background = "lightgray";
}


function sub() {
    if (n,un,pw,e,a,i != "") {
    document.getElementById("submit").removeAttribute("disabled");
    }
}


function datast() {
    var fN = document.getElementById("name").value;
    var UN = document.getElementById("username").value;
    var gender = document.getElementById("gender").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var Add = document.getElementById("add").value;
    var Int = document.getElementById("int").value;
    document.getElementById("data").innerHTML = 
    "Gender: " + gender + "<br>" + 
    "Name: " + fN + "<br>" + 
    "Preferred Username: " + UN + "<br>" +
    "Password: " + password + "<br>" + 
    "Email Address: " + email + "<br>" + 
    "Address: " + Add + "<br>" + 
    "Interests: " + Int + "<br>";
    return false;
}


function reset() {
    document.getElementById("data").innerHTML = " ";
    document.getElementById("name").style.borderColor = "black";
    document.getElementById("username").style.borderColor = "black";
    document.getElementById("password").style.borderColor = "black";
    document.getElementById("email").style.borderColor = "black";
    document.getElementById("add").style.borderColor = "black";
    document.getElementById("int").style.borderColor = "black";
    document.getElementById("gender").style.borderColor = "black";
}