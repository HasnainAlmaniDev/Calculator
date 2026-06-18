const display = document.getElementById('display');

function Values(value){
    display.value += value; 
}
function Clear(){
    display.value = "";
}
function Delete(){
    display.value = display.value.slice(0,-1);
}
function Calculate(){
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'error'
    }
}