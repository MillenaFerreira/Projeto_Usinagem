'use strict'


// var pegandovalor = function (e) {
//     myInput.value = e.target.value

//     console.log(myInput.value);
// }



export const btn = () => {

    const labelCalendar = document.getElementById("label_calendar");
    const myInput = document.getElementById("date_input");
    const myInput2 = document.getElementById("time_input");
    const labelTime = document.getElementById("label_time");

    labelCalendar.addEventListener('click', () => {
        myInput.showPicker();
    })

    labelTime.addEventListener('click', () => {
        myInput2.showPicker();
    })
}


