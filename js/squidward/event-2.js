const btn = document.querySelector('#btn');

btn.addEventListener ('click', () => validate());

function validate() {
    let choice;
    while (choice !== 1 && choice !== 2) {
        choice = Number(prompt('Qual a sua escolha?\n\nDigite 1 para: "Brincar" com Bob Esponja e Patrick\nDigite 2 para: Dar uma super missão para Bob Esponja e Patrick'));

        (choice === 1) ? location.href = 'squidward-choice1-page1.html' :
        (choice === 2) ? location.href = 'squidward-choice2-page1.html' :
        alert("Favor digitar apenas '1' ou '2' dependendo da sua escolha.");
    } 
}