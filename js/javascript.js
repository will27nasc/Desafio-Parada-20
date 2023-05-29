let calculoMedia = () => {
    var inNome = document.querySelector('#nome');
    var nota1 = document.querySelector('#nota1');
    var nota2 = document.querySelector('#nota2');
    var nota3 = document.querySelector('#nota3');
    var saida = document.querySelector('.saida');

    var nome = inNome.value;
    var nota_1 = Number(nota1.value);
    var nota_2 = Number(nota2.value);
    var nota_3 = Number(nota3.value);  

    if(nome === "" || nota1.value === "" || nota2.value === "" || nota3.value === ""){
        alert('Digite o valor corretamente!');
        inNome.focus();
        return;
    } else if(isNaN(nota_1) || isNaN(nota_2) || isNaN(nota_3)){
        alert('Notas tem que conter números!');
        inNome.focus();
        return;
    }
    
    var media = (nota_1 + nota_2 + nota_3) / 3;

    if(media >= 6){
        saida.innerHTML = (`<h2>Sua média é ${media.toFixed(1)}</h2> <h3>Parabéns ${nome}! Você está aprovado(a)</h3>`);
        saida.style.backgroundColor = '#f9f7f3';
        saida.style.color = '#3a86ff';
        saida.style.opacity = '1';
    }else if(media >= 4){
        saida.innerHTML = (`<h2>Sua média é ${media.toFixed(1)}</h2><h3>Atenção ${nome}! Você está em recuperação</h3>`);
        saida.style.backgroundColor = '#f9f7f3';
        saida.style.color = '#31572c';
        saida.style.opacity = '1';
    } else {
        saida.innerHTML = (`<h2>Sua média é ${media.toFixed(1)}</h2><h3>Infelizmente ${nome}! Você está reprovado</h3>`);
        saida.style.backgroundColor = '#f9f7f3';
        saida.style.color = '#d00000';
        saida.style.opacity = '1';
    }

    inNome.value = "";
    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
    inNome.focus();
}

var enviar = document.querySelector('#enviar');
enviar.addEventListener('click', calculoMedia);
