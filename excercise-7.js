function hitungJumlahKata(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var isFind = false;
        if (str[i] === ' ') {
            isFind = true;
            if (i === 0 || str[i + 1] === ' ') {
                isFind = false;
            }

        }
        if (i === str.length - 1) {
            if (str[i] === ' ') {
                isFind = false;
            }
            count++;
        }
        if (isFind === true) {
            count++;

        }

    }
    return count;
}
  
// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
console.log(hitungJumlahKata(' I have a dream a   song to    sing     ')); // 8
