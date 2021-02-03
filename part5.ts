// function that returns the length of the string
function str_len(value: string): number {
    let num: number = value.length;
    return num;
}

// length of string without whitespace
function str_len_nospaces(value: string): number {
    let num: number = value.replace(/\s+/, "").length;
    return num;
}

//                  2 arguments
function str_len_both(value: string, spaces?: boolean): number {
    let num: number;
    if (spaces)  // if spaces == true
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