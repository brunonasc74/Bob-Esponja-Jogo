const btn = document.querySelector('#btn');

btn.addEventListener ('click', () => validate());

function validate() {
    let choice;
    while (choice !== 1 && choice !== 2) {
        choice = Number(prompt('Aonde ir primeiro?\n\nDigite 1 para: Visitar a Sandy\nDigite 2 para: Ir na casa do Lula Molusco'));

        (choice === 1) ? location.href = 'event1/spongebob-page1.html' :
        (choice === 2) ? location.href = 'event2/spongebob-page1.html' :
        alert("Favor digitar apenas '1' ou '2' dependendo da sua escolha.");
    } 
}