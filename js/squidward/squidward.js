const btn = document.querySelector('#btn');

btn.addEventListener ('click', () => validate());

function validate() {
    let choice;
    while (choice !== 1 && choice !== 2) {
        choice = Number(prompt('Qual a sua escolha?\n\nDigite 1 para: Ir para o evento\nDigite 2 para: Ir para casa'));

        (choice === 1) ? location.href = 'event1/squidward-page1.html' :
        (choice === 2) ? location.href = 'event2/squidward-page1.html' :
        alert("Favor digitar apenas '1' ou '2' dependendo da sua escolha.");
    } 
}