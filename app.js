function inputNum(num){
    var result = document.getElementById('num');
    result.value += num;
}
function clearField(){
    var clr = document.getElementById('num')
    clr.value = "";
}
function result(){
    var result = document.getElementById('num');
    result.value = eval(result.value);
}
function backspace(num){
    var pop = document.getElementById('num');
    pop.value = pop(pop.value)
}
