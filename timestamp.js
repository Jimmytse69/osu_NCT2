window.onload = function() {
    setInterval(function(){
        var date = new Date();
        var displayDate = date.toLocaleDateString();
        var displayTime = date.toLocaleString('en-US', {timeZone: 'Europe/London', timeStyle:'medium', hourCycle:'h24'});

        document.getElementById('datetime').innerHTML = displayDate + " " + displayTime;
    }, 1000); // 1000 milliseconds = 1 second
}