var botaoAdicionar = document.querySelector('#adicionar-aluno');
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    var form = document.querySelector('.formulario');

    var aluno = obtemAlunoDoForm(form);

    var erros = validaAlunoForm(aluno);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var tr = montaTr(aluno);

    var tabelaBody = document.querySelector('#tabela-alunos');

    tabelaBody.appendChild(tr);

    form.reset()

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

})

function obtemAlunoDoForm(form) {
    var infoAluno = {
        nome: form.nome.value,
        notaP0: form.notaP0.value,
        notaP1: form.notaP1.value,
        notaP2: form.notaP2.value,
        media: calculaMedia(form.notaP0.value, form.notaP1.value, form.notaP2.value)
    }

    return infoAluno;
}

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(aluno) {
    var tr = document.createElement('tr');
    tr.classList.add('aluno');

    tr.appendChild(montaTd(aluno.nome, 'nome'));
    tr.appendChild(montaTd(aluno.notaP0, 'nota-P0'));
    tr.appendChild(montaTd(aluno.notaP1, 'nota-P1'));
    tr.appendChild(montaTd(aluno.notaP2, 'notaP2'));
    tr.appendChild(montaTd(aluno.media, 'media'));

    return tr;

}

function validaAlunoForm(aluno) {
    var erros = [];

    if (aluno.nome.length == 0) {
        erros.push('O nome não pode estar em branco!')
    }

    if (aluno.notaP0.length == 0) {
        erros.push('A nota da P0 não pode estar em branco!')
    }

    if (aluno.notaP1.length == 0) {
        erros.push('A nota da P1 não pode estar em branco')
    }

    if (aluno.notaP2.length == 0) {
        erros.push('A nota da P2 não pode estar em branco')
    }

    if (!validaP0(aluno.notaP0)) {
        erros.push('Nota da P0 inválida!')
    }

    if (!validaP1(aluno.notaP1)) {
        erros.push('Nota da P1 inválida!')
    }

    if (!validaP2(aluno.notaP2)) {
        erros.push('Nota da P2 inválida!')
    }

    return erros;

}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';
    erros.forEach(function (erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}




