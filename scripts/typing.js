function typingVar() {
    document.body.style.color = 'white';
    element = document.getElementById('animation-typing');
    element.style.color = 'black';
    string = element.innerHTML.split('');
    element.innerHTML = ''
    var timer;
    typing()
}

function typing() {
    if (string.length > 0) {
        element.innerHTML += string.shift();
    } else {
        document.body.style.color = 'black'
        bar()
        clearTimeout(timer);
    }

    LoopTimer = setTimeout('typing()', 100);
}

function bar() {
    while (true) {
        element.innerHTML += '_';
        element.innerHTML = substring(0, element.innerHTML.length-1)
    }
}