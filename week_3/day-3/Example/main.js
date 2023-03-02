// // let newsfeed = [{
// //     username:"Guilbert",
// //     password:"1234"
// // }
// // ]

// // let database = "obj"
// // newsfeed.username = "alexis"
// // newsfeed.timeline = "null"

// // // let age = prompt("how old are you?")

// // // age = parseInt(age)

// // // console.log(age)


// // // exercise-1
// // // let age = prompt("What is your age?");

// // // if (age < 18) {
// // //   alert("Sorry, you are too young to drive this car. Powering off.");
// // // } 

// // // else if (age == 18) {
// // //   alert("Congratulations on your first year of driving. Enjoy the ride!");
// // // } 

// // // else {
// // //   alert("Powering On. Enjoy the ride!");
// // // }


// // exercise-2
// const user = {
//     username: "myUsername",
//     password: "myPassword"
//   };
  
  
//   const database = [user];
  
//   const newsfeed = [
//     { username: "user1", timeline: "This is my first post" },
//     { username: "user2", timeline: "Just had a great day!" },
//     { username: "user3", timeline: "Feeling excited about my upcoming trip!" },
//   ];




let str = "Happy BirthDay";
let patt = /birthday/i;
let result = str.match(patt);
console.log(result); //returns true

if (result){
    console.log('Yes')
} else{
    console.log('No');
}