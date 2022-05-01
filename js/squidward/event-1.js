const btn = document.querySelector('#btn');

btn.addEventListener ('click', () => validate());

function validate() {
    let choice;
    while (choice !== 1 && choice !== 2) {
        choice = Number(prompt('O que fazer?\n\nDigite 1 para: Desafiar Squilliam Fancyson\nDigite 2 para: Ir aproveitar o evento'));

        (choice === 1) ? location.href = 'squidward-choice1-page1.html' :
        (choice === 2) ? location.href = 'squidward-choice2-page1.html' :
        alert("Favor digitar apenas '1' ou '2' dependendo da sua escolha.");
    } 
}