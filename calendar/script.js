let today = new Date();

let populateCalendar = function() {
    let h1 = document.querySelectorAll("h1")[1];
    h1.innerText = today.getFullYear() + " - " + 
                        (today.getMonth() + 1);

    let monthly = document.querySelector('.monthly');
    monthly.innerHTML = "";
    let todayClone = new Date(today);
    todayClone.setDate(1);
    todayClone.setMonth(todayClone.getMonth() + 1);
    todayClone.setDate(0);

    let numDays = todayClone.getDate();

    todayClone.setDate(1);

    let firstDay = todayClone.getDay();

    for(let i = 0; i < firstDay; i ++) {
        let day = document.createElement("div")
        day.innerText = "";
        day.style.background = "transparent";
        monthly.appendChild(day)
    }

    for(let i = 0; i < numDays; i ++){
        let day = document.createElement("div")
        day.innerText = i + 1;
        if( i == today.getDate() - 1 
        && today.getMonth() == new Date().getMonth()
        && today.getFullYear() == new Date().getFullYear()) 
        {
            day.style.background = "orange";
        }
        day.addEventListener('click', function() {
            today.setDate(i + 1);
            populateCalendar();
            day.style.background = "orange";

        });
        monthly.appendChild(day);
    }
}
populateCalendar();

let prevBtn = document.querySelector("button");
let nextBtn = document.querySelectorAll("button")[1];

nextBtn.addEventListener('click', function() {
    today.setMonth(today.getMonth() + 1);
    populateCalendar();
});
prevBtn.addEventListener('click', function() {
    today.setMonth(today.getMonth() - 1);
    populateCalendar();
});



let prevYr = document.querySelectorAll("button")[2];
let nextYr = document.querySelectorAll("button")[3];

nextYr.addEventListener('click', function() {
    today.setFullYear(today.getFullYear() + 1);
    populateCalendar();
});
prevYr.addEventListener('click', function() {
    today.setFullYear(today.getFullYear() - 1);
    populateCalendar();
});



let todayBtn = document.querySelectorAll("button")[4];
todayBtn.addEventListener('click', function() {
    today = new Date();
    populateCalendar();
});