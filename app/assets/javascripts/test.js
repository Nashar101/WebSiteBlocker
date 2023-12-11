function SayHI(){
    console.log("hi")
}

function decrement(idvalue){
     console.log("decrement called on " +idvalue)
     let value = document.getElementById('seconds ' + idvalue).innerHTML
     setInterval(function() {
         value = (value)-1; document.getElementById('seconds ' +idvalue).innerHTML = value }, 1000)
}

function startTimer(){
    var trArray = []
}

