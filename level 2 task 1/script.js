document.getElementById("inp").disabled = true;
document.getElementById("inp").style.overflow = scroll;



let val = document.querySelector("body");
val.addEventListener("keyup", function (e) {
    let x = e.key;
    if ((x >= '0' && x <= '9') || x == '+' || x == '-' || x == '*' || x == '/' || x == '%' || x == '(' || x == ')') {
        pressed(x);
    }
    else if (x == '=' || x == "Enter") {
        display_answer();
    }
    else if (x == "Backspace") {
        del_last_elem();
    }
    else if (x == 'c' || x == 'C') {
        clear_display();
    }
    else if (x == '^') {
        pressed("**");
    }
    else {
        console.log(x);
    }
});


function pressed(x) {
    let val = document.querySelector("input").value;
    val += x;
    document.getElementById("inp").setAttribute("value", val);
    document.querySelector("input").scrollLeft = document.querySelector("input").scrollWidth;
    let str = "./sounds/click" + Math.floor(Math.random() * 6) + ".mp3"
    let aud = new Audio();
    aud.src = str;
    aud.play();
}

function display_answer() {
    let val = document.querySelector("input").value;
    try {
        let result = Function("return " + val + ";")();
        if (result == val || result == "undefined") {
            document.getElementById("inp").setAttribute("value", "Error");
            if(result == "69"){document.getElementById("inp").setAttribute("value", "Holy Number");}
        }
        else {
            document.getElementById("inp").setAttribute("value", result);
        }
    }
    catch (err) {
        document.getElementById("inp").setAttribute("value", "Error");
    }
    let str = "./sounds/click" + Math.floor(Math.random() * 6) + ".mp3"
    let aud = new Audio();
    aud.src = str;
    aud.play();
}

function del_last_elem() {
    let val = document.querySelector("input").value;
    val = val.substring(0, val.length - 1);
    document.getElementById("inp").setAttribute("value", val);
    let str = "./sounds/click" + Math.floor(Math.random() * 6) + ".mp3"
    let aud = new Audio();
    aud.src = str;
    aud.play();
}

function clear_display() {
    document.getElementById("inp").setAttribute("value", "");
    let str = "./sounds/click" + Math.floor(Math.random() * 6) + ".mp3"
    let aud = new Audio();
    aud.src = str;
    aud.play();
}