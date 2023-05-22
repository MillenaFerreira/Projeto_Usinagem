'use strict'

console.log('arquivo carregado');

// var pegandovalor = function (e) {
//     myInput.value = e.target.value

//     console.log(myInput.value);
// }



export const btn = () => {
    console.log('teste');
    const labelCalendar = document.getElementById("label_calendar");
    const myInput = document.getElementById("date_input");

    labelCalendar.addEventListener('click', () => {
        myInput.showPicker();
    
     
    })
}


