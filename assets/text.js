function numele_tau() {

    var person = prompt("Cum te numesti?");
    var temp = document.title;
    document.title = "Salut, " + person + "!"
    setTimeout(function () {
        document.title = temp;
    }, 2000);

}

numele_tau();

var i = 0;
var j = 0;
var txt = 'Pentru a determina tipul de ten, se recomanda curatarea tenului cu un demachiant usor.Apoi, dupa 30 de minute, se aplica pe frunte, nas, obraji si barbie o foita curata.Daca pe foita nu apar urme de grasime, atunci tenul este uscat.Tenul uscat este rugos si predispus la aparitia de linii fine si riduri premature. Daca tenul este gras pe anumite portiuni si uscat in altele, atunci ai un ten mixt. Tenul normal este de obicei neted si nu este predispus la acnee. Tenul gras este uleios la atingere si luceste. Tenul gras este predispus la aparitia punctelor negre si apustulelor. Tenul sensibil necesita o atentie mai speciala, intrucat poate fi sensibil la anumite ingrediente existente in majoritatea cosmeticelor.Persoanele cu ten sensibil ar trebui intotdeauna sa foloseasca produse de ingrijire hipoalergenice, pentru a proteja tenul de reactiile alergice.';
var txt2 = 'Tenul sensibil necesita o atentie mai speciala, intrucat poate fi sensibil la anumite ingrediente existente in majoritatea cosmeticelor.Persoanele cu ten sensibil ar trebui intotdeauna sa foloseasca produse de ingrijire hipoalergenice, pentru a proteja tenul de reactiile alergice.'
var speed = 1000 / 3;

var wordArray = txt.split(' ');
var wordArray1 = txt2.split(' ');

function typeWriter() {

    if (i < wordArray.length) {
        document.getElementById("demo1").innerHTML += wordArray[i];
        document.getElementById("demo1").innerHTML += ' ';
        if (j < wordArray1.length) {
            document.getElementById("demo2").innerHTML += wordArray1[j];
            document.getElementById("demo2").innerHTML += ' ';
        }


        i++;
        j++;
        setTimeout(typeWriter, speed);
    }
}

const messages = ["Astazi este o zi minunata!", "Bine ai venit pe pagina LOULOU", "Ingrijeste-ti tenul cu atentie!",
    "Gaseste Produsul tau preferat", "Buna ziua!", "La noi poti gasi cadoul perfect!", "Bucura-te de orice moment!"
];
const randomIndex = Math.round(Math.random() * messages.length);
document.getElementById("mesaje").innerHTML = messages[randomIndex];