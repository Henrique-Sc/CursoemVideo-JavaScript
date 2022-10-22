// var string = "Javascript Typing Animation"; /* type your text here */
// var array = string.split("");
// var timer;

// function frameLooper () {
// if (array.length > 0) {
//     document.getElementById("text").innerHTML += array.shift();
// } else {
//     clearTimeout(timer);
//     }
// loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

// }
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
        clearTimeout(timer);
    }

    console.log(string)
    LoopTimer = setTimeout('typing()', 100);
}
