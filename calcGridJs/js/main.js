// var plus = document.querySelector('.actPlus');
// var minus = document.querySelector('.actMinus');
// var times = document.querySelector('.actTimes');
// var divide = document.querySelector('.actDivide');
// для автономной от HTML работы, в данном файле

// вместо вставок в html
// plus.onclick = function() {
//     insert('+');
// }
// minus.onclick = function() {
//     insert('-');
// }
// times.onclick = function() {
//     insert('*');
// }
// divide.onclick = function() {
//     insert('/');
// }
// продолжать вынос кода из HTML не стал, остановился на следующем дальше варианте\|/




function insert(num) {
    document.form.textview.value = 
    document.form.textview.value + num;
} 

function clean() {
    document.form.textview.value = ""; // функция для очистки поля ввода
}

function back() {
    var exp =  document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
} // данной функцией отнимаем один крайний символ
  // в строке ввода калькулятора;

function equal() {
    var exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp); 
    } // метод eval принимает в себя строку из переменной exp 
      // и высчитывает совершаемые в ней арифметические действия;
}


