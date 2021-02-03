// function that returns the length of the string
function str_len(value) {
    var num = value.length;
    return num;
}
// length of string without whitespace
function str_len_nospaces(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
//                  2 arguments
function str_len_both(value, spaces) {
    var num;
    if (spaces) // if spaces == true
     {
        num = value.length;
    }
    else {
        num = value.replace(/\s+/, "").length;
    }
    return num;
}
// will return '6' it includes whitespaces
console.log(str_len('test 1'));
// will return '5' no whitespaces
console.log(str_len_nospaces('test 1'));
console.log(str_len_both('test 1', true));
console.log(str_len_both('test 1'));
