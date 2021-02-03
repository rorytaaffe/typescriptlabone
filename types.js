var myNumber = 55;
console.log("MyNumber is: " + myNumber);
//  name:type
var color = "Hello World";
console.log(color);
var myBool = false;
console.log(myBool);
//  name array strings   // 3 strings
var list = ["hello", "3", "false"];
for (var i = 0; i < list.length; i++) {
    console.log("String " + (i + 1) + " is " + list[i]);
}
var listB = ["hello", "3", "false"];
for (var i = 0; i < listB.length; i++) {
    console.log("String " + (i + 1) + " is " + listB[i]);
}
//   can handle any type of data
var notSure = 4;
console.log(notSure);
var listAny = [2, "test", false];
for (var i = 0; i < listAny.length; i++) {
    console.log("String " + (i + 1) + " is " + listAny[i]);
}
