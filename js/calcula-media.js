var alunos = document.querySelectorAll('.aluno');


for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];

    var notaP0 = aluno.querySelector('.nota-P0').textContent;
    var notaP1 = aluno.querySelector('.nota-P1').textContent;
    var notaP2 = aluno.querySelector('.nota-P2').textContent;

    var P0EhValida = validaP0(notaP0)
    var P1EhValida = validaP1(notaP1)
    var P2EhValida = validaP2(notaP2)

    if (!P0EhValida) {
        aluno.querySelector('.nota-P0').textContent = 'Nota P0 inválida!';
        aluno.classList.add('dado-invalido');
    }

    if (!P1EhValida) {
        aluno.querySelector('.nota-P1').textContent = 'Nota P1 inválida!';
        aluno.classList.add('dado-invalido');
    }

    if (!P2EhValida) {
        aluno.querySelector('.nota-P2').textContent = 'Nota P2 inválida!';
        aluno.classList.add('dado-invalido');
    }

    if (P0EhValida && P1EhValida && P2EhValida) {
        var media = calculaMedia(notaP0, notaP1, notaP2);
        aluno.querySelector('.media').textContent = media;
    } else {
        aluno.querySelector('.media').textContent = 'Indisponível';
    }

}

function calculaMedia(x, y, z) {
    var media = 0;

    var media = (parseFloat(x) + parseFloat(y) + parseFloat(z)) / 3;

    return media.toFixed(2);
}

function validaP0(P0) {
    if (P0 >= 0 && P0 <= 10) {
        return true;
    } else {
        return false;
    }
}

function validaP1(P1) {
    if (P1 >= 0 && P1 <= 10) {
        return true;
    } else {
        return false;
    }
}

function validaP2(P2) {
    if (P2 >= 0 && P2 <= 10) {
        return true;
    } else {
        return false;
    }
}





