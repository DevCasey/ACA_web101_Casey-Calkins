function gettingDate(){
    
    let day = document.getElementById('getting-day');
    let month = document.getElementById('getting-month');
    let myTime = document.getElementById('getting-time');

    if (day.textContent == '') {
        console.log('true');
        let d = new Date();
        let n = d.getDate();
        day.textContent = n;
    } else {
        console.log('false');
    }

    if (month.textContent == '') {
        let d = new Date();
        let n = d.getMonth();
        month.textContent = n;
    } 

    if (myTime.textContent == '') {
        let d = new Date();
        let newTime = d.getHours() + ' : ' + d.getMinutes();
        myTime.textContent = newTime;
        setInterval(10);
    }
}

gettingDate();

