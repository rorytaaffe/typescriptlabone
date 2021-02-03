let myNumber: number = 55;
console.log("MyNumber is: " + myNumber);

//  name:type
let color: string = "Hello World";
console.log(color);

let myBool: boolean = false;
console.log(myBool);

//  name array strings   // 3 strings
let list: Array<string> = ["hello", "3", "false"];
for (let i = 0; i < list.length; i++) {
    console.log("String " + (i + 1) + " is " + list[i]);
}

let listB: string[] = ["hello", "3", "false"];
for (let i = 0; i < listB.length; i++) {
    console.log("String " + (i + 1) + " is " + listB[i]);
}

//   can handle any type of data
let notSure: any = 4;
console.log(notSure);

let listAny: any[] = [2, "test", false];
for (let i = 0; i < listAny.length; i++) {
    console.log("String " + (i + 1) + " is " + listAny[i]);
}

/* Commenting */

// Auto Indent Code
// Shift + Alt + F