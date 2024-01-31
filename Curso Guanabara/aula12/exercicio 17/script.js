function tabuada() {
    var num = Number(document.getElementById("entrada").value)
    var res = document.getElementById('res');
    var tabuada = '';

    if (num == 0) {
        alert('Por favor, digite um numero!')

    } else {
        for (var count = 1; count <= 10; count++)
            tabuada += num + " x " + count + " = " +
                num * count + "<br />";

        res.innerHTML = `<p>${tabuada}</p>`

    }

}
