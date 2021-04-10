function get_value(){
    var val = prompt("enter your value")
    var ele = document.getElementById("value")
    ele.innerText = (+val).toString(2)
}

document.getElementById("three").addEventListener("click" , (e) => {
    var x = e.clientX
    var y = e.clientY
    document.getElementById("coor").innerText = "X: " + x + " Y: " + y
})


document.getElementById("msg").addEventListener("input", () => {
    var len = document.getElementById("msg").value.length
    document.getElementById("count").innerText = len
})

document.getElementById("validate").addEventListener("input", (e) => {
    var val = e.target.value.length
    console.log('val: ', val);
    if (val < 10){
        document.getElementById("validate_msg").innerText = "message length should be at least 10";
    }
    else {
        document.getElementById("validate_msg").innerText = "";
    }
})

function enter(){
    document.body.requestFullscreen();
}

function exit(){
    document.exitFullscreen();
}

document.addEventListener("keypress", function(event) {
    if (event.target.value != " ") {
      alert('Invalid');
    }else{
        alert('Cool');
    }
  });

