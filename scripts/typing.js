function typingVar() {
    document.getElementById('content-animation-typing').style.visibility = 'hidden'
    element = document.getElementById('animation-typing');
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
        document.getElementById('content-animation-typing').style.visibility = 'visible'
        clearTimeout(0);
        setTimeout(a = () => {}, 300)
    }
}
