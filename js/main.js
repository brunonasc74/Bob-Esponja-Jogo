function validate(question, choice1, choice2, eventLocation1, eventLocation2) {
    let choice;
    while (choice !== 1 && choice !== 2) {
        choice = Number(prompt(`${question}\n\nDigite 1 para: ${choice1}\nDigite 2 para: ${choice2}`));

        (choice === 1) ? location.href = eventLocation1 :
        (choice === 2) ? location.href = eventLocation2 :
        alert("Favor digitar apenas '1' ou '2' dependendo da sua escolha.");
    } 
}