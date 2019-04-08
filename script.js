

// function zmiana() {
//     var x = "z";
//     if (document.getElementById(x).innerHTML == "zmienilem sie") {

//         document.getElementById("z").innerHTML = "nie zmienilem sie";
//         document.getElementById("z").style.fontSize = "12px";
//     }
//     else if (document.getElementById("z").innerHTML == "nie zmienilem sie") {
//         document.getElementById("z").innerHTML = "zmienilem sie";
//         document.getElementById("z").style.fontSize = "36px";
//     }

// };

// function off() {

//     document.getElementById("zarowka").src = "zgaszona.png"

// }

// function on() {

//     document.getElementById("zarowka").src = "zapalona.png"

// }

var liczba1 = undefined;
var liczba2 = undefined;
var dzialanie;

function jeden(cyfra) {

    function Round(n, k) {
        var factor = Math.pow(10, k);
        return Math.round(n * factor) / factor;
    }

    switch (cyfra) {
        case '1':
            if (document.getElementById("wynik").innerHTML == '+' ||
                document.getElementById("wynik").innerHTML == '-' ||
                document.getElementById("wynik").innerHTML == '/' ||
                document.getElementById("wynik").innerHTML == '*') {

                document.getElementById("wynik").innerHTML = '';
                document.getElementById("wynik").innerHTML = 1;
            }
            else {
                document.getElementById("wynik").innerHTML += 1;
            }

            break;
        case '2':
            if (document.getElementById("wynik").innerHTML == '+' ||
                document.getElementById("wynik").innerHTML == '-' ||
                document.getElementById("wynik").innerHTML == '/' ||
                document.getElementById("wynik").innerHTML == '*') {

                document.getElementById("wynik").innerHTML = '';
                document.getElementById("wynik").innerHTML = 2;
            }
            else {
                document.getElementById("wynik").innerHTML += 2;
            }
            break;
        case '3':
            if (document.getElementById("wynik").innerHTML == '+' ||
                document.getElementById("wynik").innerHTML == '-' ||
                document.getElementById("wynik").innerHTML == '/' ||
                document.getElementById("wynik").innerHTML == '*') {

                document.getElementById("wynik").innerHTML = '';
                document.getElementById("wynik").innerHTML = 3;
            }
            else {
                document.getElementById("wynik").innerHTML += 3;
            }
            break;
        case '4':
            if (document.getElementById("wynik").innerHTML == '+' ||
                document.getElementById("wynik").innerHTML == '-' ||
                document.getElementById("wynik").innerHTML == '/' ||
                document.getElementById("wynik").innerHTML == '*') {

                document.getElementById("wynik").innerHTML = '';
                document.getElementById("wynik").innerHTML = 4;
            }
            else {
                document.getElementById("wynik").innerHTML += 4;
            }
            break;
        case '5':
            if (document.getElementById("wynik").innerHTML == '+' ||
                document.getElementById("wynik").innerHTML == '-' ||
                document.getElementById("wynik").innerHTML == '/' ||
                document.getElementById("wynik").innerHTML == '*') {

                document.getElementById("wynik").innerHTML = '';
                document.getElementById("wynik").innerHTML = 5;
            }
            else {
                document.getElementById("wynik").innerHTML += 5;
            }
            break;
        case '6':
            if (document.getElementById("wynik").innerHTML == '+' ||
                document.getElementById("wynik").innerHTML == '-' ||
                document.getElementById("wynik").innerHTML == '/' ||
                document.getElementById("wynik").innerHTML == '*') {

                document.getElementById("wynik").innerHTML = '';
                document.getElementById("wynik").innerHTML = 6;
            }
            else {
                document.getElementById("wynik").innerHTML += 6;
            }
            break;
        case '7':
            if (document.getElementById("wynik").innerHTML == '+' ||
                document.getElementById("wynik").innerHTML == '-' ||
                document.getElementById("wynik").innerHTML == '/' ||
                document.getElementById("wynik").innerHTML == '*') {

                document.getElementById("wynik").innerHTML = '';
                document.getElementById("wynik").innerHTML = 7;
            }
            else {
                document.getElementById("wynik").innerHTML += 7;
            }
            break;
        case '8':
            if (document.getElementById("wynik").innerHTML == '+' ||
                document.getElementById("wynik").innerHTML == '-' ||
                document.getElementById("wynik").innerHTML == '/' ||
                document.getElementById("wynik").innerHTML == '*') {

                document.getElementById("wynik").innerHTML = '';
                document.getElementById("wynik").innerHTML = 8;
            }
            else {
                document.getElementById("wynik").innerHTML += 8;
            }
            break;
        case '9':
            if (document.getElementById("wynik").innerHTML == '+' ||
                document.getElementById("wynik").innerHTML == '-' ||
                document.getElementById("wynik").innerHTML == '/' ||
                document.getElementById("wynik").innerHTML == '*') {

                document.getElementById("wynik").innerHTML = '';
                document.getElementById("wynik").innerHTML = 9;
            }
            else {
                document.getElementById("wynik").innerHTML += 9;
            }
            break;
        case '0':
            if (document.getElementById("wynik").innerHTML == '+' ||
                document.getElementById("wynik").innerHTML == '-' ||
                document.getElementById("wynik").innerHTML == '/' ||
                document.getElementById("wynik").innerHTML == '*') {

                document.getElementById("wynik").innerHTML = '';
                document.getElementById("wynik").innerHTML = 0;
            }
            else {
                document.getElementById("wynik").innerHTML += 0;
            }
            break;
        case '+':

            liczba1 = parseInt(document.getElementById("wynik").innerHTML);
            dzialanie = '+';
            document.getElementById("wynik").innerHTML = '+';
            break;
        case '-':

            liczba1 = parseInt(document.getElementById("wynik").innerHTML);
            dzialanie = '-';
            document.getElementById("wynik").innerHTML = '-';
            break;
        case '/':

            liczba1 = parseInt(document.getElementById("wynik").innerHTML);
            dzialanie = '/';
            document.getElementById("wynik").innerHTML = '/';
            break;
        case '*':

            liczba1 = parseInt(document.getElementById("wynik").innerHTML);
            dzialanie = '*';
            document.getElementById("wynik").innerHTML = '*';
            break;
        case '=':

            liczba2 = parseInt(document.getElementById("wynik").innerHTML);
            switch (dzialanie) {
                case '+':
                    document.getElementById("wynik").innerHTML = liczba1 + liczba2;
                    break;
                case '-':
                    document.getElementById("wynik").innerHTML = liczba1 - liczba2;
                    break;
                case '/':
                    if (liczba2 != 0) {
                        var wynik = liczba1 / liczba2;
                        document.getElementById("wynik").innerHTML = Round(wynik, 2);
                    }
                    else {
                        document.getElementById("wynik").innerHTML = "Błąd"
                    }
                    break;
                case '*':
                    document.getElementById("wynik").innerHTML = liczba1 * liczba2;
                    break;
            }
            liczba1 = undefined;
            liczba2 = undefined;
            dzialanie = '';
            break;
    }

}

function wyczysc() {
    document.getElementById("wynik").innerHTML = '';
}