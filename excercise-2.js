function kataBalik (kata) {
    var kataBaru = [''];
    for (var i = kata.length - 1; i >= 0; i--) {
        kataBaru += kata[i];
    }
    return kataBaru;
}
console.log(kataBalik('hello world!'));

