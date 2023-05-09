
const appendToResult = (val) => {
    document.getElementById("result").value += val;
}

//limpia todo lo que esta en pantalla
function clearResult() {
    document.getElementById('result').value = "";
}


//utilizo la función eval() de JavaScript para evaluar la expresión matemática que se encuentra en la pantalla
function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}




