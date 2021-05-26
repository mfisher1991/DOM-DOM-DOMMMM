document.addEventListener('DOMContentLoaded', function() {
    let container = document.createElement('div');
    container.className = 'header-container';
    document.body.appendChild(container);
    let liBitn = document.getElementsByClassName('li-btn')[0];
    let button = document.createElement("buttton");
    let btnText = document.createTextNode("Add Square");
    button.className = "button";
    button.appendChild(btnText);
    document.body.appendChild(button);
    let counter = 0;
    let container = document.createElement('div');
    document.body.appendChild(container);
    button.addEventListener("click, buttonClick");

    function buttonClick() {
        let square = document.createElement('div');
        square.id = counter++
    }
})