function typingVar() {
    document.body.style.color = 'white';
    element = document.getElementById('animation-typing');
    element.style.color = 'black';
    string = element.innerHTML.split('');
    element.innerHTML = ''
    var timer;
    typingText()
}

function typingText() {
    if (string.length > 0) {
        element.innerHTML += string.shift();
    } else {
        document.body.style.color = 'black'
        clearTimeout(timer);
    }

    LoopTimer = setTimeout('typing()', 100);
}
