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
    console.log("decrement called on " +idvalue)
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
    return Math.floor((duedate % 3600) / 60);
}

function display_seconds(duedate){
   return  duedate%60;
}
