function typingVar() {
    document.body.style.color = 'white';
    element = document.getElementById('animation-typing');
    element.style.color = 'black';
    string = element.innerHTML.split('');
    element.innerHTML = ''
    typingText()
}

function typingText() {
    if (string.length > 0) {
        element.innerHTML += string.shift();
        setTimeout('typingText()', 100);
    } else {
        element.innerHTML += '_'
        document.body.style.color = 'black'
        clearTimeout(0);
        setTimeout(a = () => {}, 300)
    }
}
