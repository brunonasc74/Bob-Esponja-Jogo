const btn = document.querySelector('#btn');

btn.addEventListener ('click', () => validate());

function validate() {
    let choice;
    while (choice !== 1 && choice !== 2) {
        choice = Number(prompt('O que fazer?\n\nDigite 1 para: Ir no show de talentos\nDigite 2 para: Dar presente para Karen'));

        (choice === 1) ? location.href = 'event1/plankton-page1.html' :
        (choice === 2) ? location.href = 'event2/plankton-page1.html' :
        alert("Favor digitar apenas '1' ou '2' dependendo da sua escolha.");
    } 
}