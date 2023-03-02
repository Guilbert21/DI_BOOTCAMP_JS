// let str = prompt("your advice?")
// str = parseInt(str)
let str = 'This dinner is bad !' 

let wordNot = str.indexOf("not")
console.log(wordNot)
let wordBad = str.indexOf("bad")
console.log(wordBad)

if (wordBad>wordNot){
   console.log(str.replace("not that bad", "good"));
//    console.log(str)
} else {
    console.log(str)
}







