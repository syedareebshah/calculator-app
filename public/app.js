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
function back(){
    var val = document.getElementById('num');
    var nval = val.value;
    nval = nval.split("")
    nval.pop();
    nval = nval.join("")
    val.value = nval
}
