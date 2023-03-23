  // Function that display value
  function solve(val) {
    var v = document.getElementById('result');
    v.value += val;
 }
 //display result
 function Result() {
    var num1 = document.getElementById('result').value;
    var num2 = eval(num1);
    document.getElementById('result').value = num2;
 }
 //clears the screen
 function clr() {
    var inp = document.getElementById('result');
    inp.value = '';
 }
 //backspace
 function back() {
   var ev = document.getElementById('result');
   ev.value = ev.value.slice(0,-1);
}
