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

function showTimer(){
    console.log("im being called")
    if (document.getElementById("timer-settings").innerHTML.trim() === '') {
        return document.getElementById("timer-settings").innerHTML = '<input\n' +
            '                  type="number"\n' +
            '                  id="days"\n' +
            '                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"\n' +
            '                  min="0"\n' +
            '                  max="99"\n' +
            '                  maxlength="2"\n' +
            '                  class="size"\n' +
            '                  placeholder="0" \n' +
            '                />' +
            '<b style="font-size: 30px; margin-top: -6px">:</b>' +
            '<input\n' +
            '                  type="number"\n' +
            '                  id="hours"\n' +
            '                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"\n' +
            '                  min="0"\n' +
            '                  max="99"\n' +
            '                  maxlength="2"\n' +
            '                  class="size"\n' +
            '                  placeholder="0" \n' +
            '                />' +
            '<b style="font-size: 30px; margin-top: -6px">:</b>' +
            '<input\n' +
            '                  type="number"\n' +
            '                  type="minutes"\n' +
            '                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"\n' +
            '                  min="0"\n' +
            '                  max="99"\n' +
            '                  maxlength="2"\n' +
            '                  class="size"\n' +
            '                  placeholder="0" \n' +
            '                />' +
            '<b style="font-size: 30px; margin-top: -6px">:</b>' +
            '<input\n' +
            '                  type="number"\n' +
            '                  type="seconds"\n' +
            '                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"\n' +
            '                  min="0"\n' +
            '                  max="99"\n' +
            '                  maxlength="2"\n' +
            '                  class="size"\n' +
            '                  style="margin-right: 25px"\n' +
            '                  placeholder="0" \n' +
            '                />'
    }
}

function hideTimer(){
    return document.getElementById("timer-settings").innerHTML = ''
}
