const btn = document.querySelector('#btn');

btn.addEventListener ('click', () => validate());

function validate() {
    let choice;
    while (choice !== 1 && choice !== 2) {
        choice = Number(prompt('Qual o seu plano?\n\nDigite 1 para: Fazer um show de mágica\nDigite 2 para: Fazer todos dormirem'));

        (choice === 1) ? location.href = 'plankton-choice1-page1.html' :
        (choice === 2) ? location.href = 'plankton-choice2-page1.html' :
        alert("Favor digitar apenas '1' ou '2' dependendo da sua escolha.");
    } 
}