function textWidth(text) {
    const txt = document.querySelector('svg text');
    return txt.clientWidth;
}
let width = textWidth('');
console.log(width);