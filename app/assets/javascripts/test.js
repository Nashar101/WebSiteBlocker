function SayHI(){
    console.log("hi")
}
function decrementDays(idvalue, duedate){
    let value = document.getElementById('days ' + idvalue).innerHTML
    setInterval(function() {
        var d = Math.floor((new Date(duedate)-Date.now())/1000)
        value = display_days(d); document.getElementById('days ' +idvalue).innerHTML = value }, 1000)
}

function decrementHours(idvalue, duedate){
    let value = document.getElementById('hours ' + idvalue).innerHTML
    setInterval(function() {
        var d = Math.floor((new Date(duedate)-Date.now())/1000)
        value = display_hours(d); document.getElementById('hours ' +idvalue).innerHTML = value }, 1000)
}

function decrementMinutes(idvalue, duedate){
    let value = document.getElementById('minutes ' + idvalue).innerHTML
    setInterval(function() {
        var d = Math.floor((new Date(duedate)-Date.now())/1000)
        value = display_minutes(d); document.getElementById('minutes ' +idvalue).innerHTML = value }, 0)
}

function decrementSeconds(idvalue, duedate){
    let value = document.getElementById('seconds ' + idvalue).innerHTML
    setInterval(function() {
        var d = Math.floor((new Date(duedate)-Date.now())/1000)
        value = display_seconds(d);
        /*console.log(display_minutes(d))
        console.log(display_hours(d))
        console.log(display_days(d))*/
        if(display_days(d) <= 0 && display_minutes(d) <= 0 && display_hours(d) <= 0 && display_days(d)){
            console.log("im in here")
            document.getElementById('delete ' + idvalue).click()
            return;
        }
        document.getElementById('seconds ' +idvalue).innerHTML = value }, 1000)
}
function display_days(duedate){
    return Math.floor(duedate / (3600 * 24));
}

function display_hours(duedate){
    return Math.floor((duedate % (3600 * 24)) / 3600);
}
function display_minutes(duedate){
    return Math.floor(((duedate % (3600*24))%3600)/60);
}

function display_seconds(duedate){
   return  duedate%60;
}

function sendData(WebsiteLink){
    let link = document.getElementById('blockedsite_link').value
    console.log(link)
    let days = document.getElementById("blockedsite_days").value
    let hours = document.getElementById("blockedsite_hours").value
    let minutes = document.getElementById("blockedsite_minutes").value
    let seconds = document.getElementById("blockedsite_seconds").value

    if(days === undefined){
        days = 0;
    }
    if(hours === undefined){
        hours = 0;
    }
    if(minutes === undefined){
        minutes = 0;
    }
    if(seconds === undefined){
        seconds = 0;
    }
    console.log(days)
    console.log(hours)
    console.log(minutes)
    console.log(seconds)
    let dueDate = (Date.now() + (days*24*60*60*1000) +(hours*60*60*1000) + (minutes*60*1000) + (seconds*1000))

    console.log(dueDate)
    chrome.runtime.sendMessage("mcghgdbfphaojfifabbkbfokiefooboj", {message: [link, dueDate]}, function(response){
        alert(response)
    })
}

function init(){
    var counter = 2
    var interval = setInterval(function(){
        counter--;
        if(counter <= 0){
            document.querySelector("#hide").addEventListener("click", () => {
                var test = document.getElementById('timer-settings')
                test.style.display = "none";
                console.log("im being clicked")
            });
            document.querySelector("#show").addEventListener("click", () => {
                var test = document.getElementById('timer-settings')
                test.style.display = '';
                console.log("im being clicked")
            });
            clearInterval(interval)
        }

    },1000)

}
init()