nome = prompt('Insira seu nome completo: ');

quantNome = prompt('Insira um numero que represente a quantidade de impressões do seu nome: ')

while ((nome == "") || (nome == null)) {
    alert("Favor informar seu nome completo")
    nome = prompt('Insira seu nome completo: ');
}

while ((quantNome == "") || (quantNome == null)) {
    alert("Favor informar um valor para impressão")
    quantNome = prompt('Insira um numero que represente a quantidade de impressões do seu nome: ')
}

numCaracteres = nome.length;

firstLetter = nome.charAt(0);

nomeMaiusculo = nome.toUpperCase();

palavras = nome.split(' ');

quantidadeDePalavras = palavras.length;

document.write(`<h1>Aplicação 01</h1>`);

document.write(`<p>Seu nome possui ${numCaracteres} caracteres</p>`);

document.write(`<p> A primeira letra do seu nome é "${firstLetter}"</p>`);

document.write(`<p>Seu nome convertido para letras maiúsculas ${nomeMaiusculo}</p>`);

document.write(`<p>Seu nome possui ${quantidadeDePalavras} palavras</p>`);

document.write(`<p>Seu nome <spam style="color: red;">${nome}</spam> na cor vermelho </p>`);

document.write(`<p>Seu nome ${quantNome} vezes na cor azul: </p>`);


for (i = 0; i < quantNome; i++) {
    document.write(`<li style="color: blue;">${nome}</li>`);
}

document.write(` <div>
                   <a href="" class="botao">Reiniciar</a>
                 </div>`);




