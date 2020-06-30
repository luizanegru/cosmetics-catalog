var ElementRevolver = (function () {
    function getPosition(settings, ellapsedTime) {
        var angle = getAngle(settings, ellapsedTime);
        return {
            x: Math.round(settings.center.x + settings.radius * Math.cos(angle)) + 80,
            y: Math.round(settings.center.y + settings.radius * Math.sin(angle)) + 300
        };

    }

    //viteza
    function getAngle(settings, ellapsedTime) {
        return (
            (ellapsedTime / settings.interval) * 1 * Math.PI * settings.direction -
            settings.startPositionRad
        );
    }

    function start(id, settings) {
        var el = document.getElementById(id),
            startTime = new Date().getTime(),
            //preluam dimensiunea din css
            width = el.offsetWidth,
            height = el.offsetHeight;
        if (el["#rev:tm"] !== null) stop(id);
        el.style.position = settings.cssPosition || "absolute";
        if (!settings.startPositionRad)
            settings.startPositionRad = (settings.startPositionDeg / 180) * Math.PI;
        el["#rev:tm"] = setInterval(function () {
            var pos = getPosition(settings, new Date().getTime() - startTime);
            //pozitia din pagina

            el.style.left = pos.x - Math.round(width / 2) + "px";
            el.style.top = pos.y - Math.round(height * 3) + "px";
        }, settings.updateInterval);
        if (settings.iterations > -1)
            setTimeout(function () {
                stop(id);
            }, settings.iterations * settings.interval);
    }

    function stop(id) {
        var el = document.getElementById(id);
        if (el["#rev:tm"] === null) return;
        clearInterval(el["#rev:tm"]);
        el["#rev:tm"] = null;
    }

    return {
        start: start,
        stop: stop
    };
})();

ElementRevolver.start("moveMe", {
    radius: 80,
    center: {
        x: 150,
        y: 150
    },
    interval: 1000,

    direction: 1,

    iterations: -1,
    startPositionDeg: 90,
    updateInterval: 50
});


let quiz = [{
        question: 'Cand trebuie sa te demachiezi?',
        answers: [
            ['Doar dimineata.', false],
            ['Doar seara.', false],
            ['Dimineata si seara.', true],
            ['Atunci cand sunt machiata si ajung acasa.', true]
        ]
    },
    {
        question: 'Trebuie sa imi exfoliez tenul:',
        answers: [
            ['o data sau de doua ori pe saptamana', true],
            ['in fiecare zi', false],
            ['cu un exfoliant cu pH pozitiv', false],
            ['cu un produs foarte abraziv', false],
            ['cu un exfoliant cu pH neutru', true]
        ]
    },
    {
        question: 'Pentru a hidrata tenul trebuie sa:',
        answers: [
            ['exfoliem tenul foarte des', false],
            ['sa bem suficienta apa', true],
            ['nu folosim crema, pielea se hidrateaza si fara ajutor', false],
            ['sa folosim crema hidratanta', true]
        ]
    }
]

document.addEventListener('DOMContentLoaded', (event) => {
    let html = ""

    html += '<ol class="question">'
    quiz.forEach(item => {
        html += '<li  class = "question2">'
        html += item.question

        html += '<ol class="incercare">'
        item.answers.forEach((answer, key) => {
            html += '<li><label><input type="checkbox" name="' + item.question + '" value="' + answer[1] + '">' + answer[0] + '</label></li>'
        })
        html += '</ol>'
        html += '</li>'
    });
    html += '</ol>'
    html += '<button type="submit"> Submit Quiz</button>'

    document.querySelector('div.questions').innerHTML = html
})

function quizSubmit() {
    // Disable checkboxes
    let allCheckboxes = document.querySelectorAll('input[type=checkbox]');
    for (let i = 0; i < allCheckboxes.length; i++) {
        allCheckboxes[i].disabled = true;
    }

    // Calculate score
    let answerChecboxes = document.querySelectorAll('form[name=quiz] input[type=checkbox]:checked');
    let score = 0;
    let aux = 0;
    let maximOfScore = 6;

    for (var i = 0; i < answerChecboxes.length; i++) {
        if (answerChecboxes[i].value == "true") {
            aux = aux + 1;

        }
    }
    score = aux * 100 / 6;
    // Show score 
    document.querySelector('span.score').innerHTML = score;
}