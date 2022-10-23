function typingVar() {
    document.getElementById('content-animation-typing').style.visibility = 'hidden'
    element = document.getElementById('animation-typing');
    string = element.innerHTML.split('');
    element.innerHTML = ''
    setTimeout('typingText()', 1000);
}

function typingText() {
    if (string.length > 0) {
        element.innerHTML += string.shift();
        setTimeout('typingText()', 120);
    } else {
        element.innerHTML += '_'
        clearTimeout(0);
        setTimeout(a = () => {document.getElementById('content-animation-typing').style.visibility = 'visible'}, 500)
    }
}
