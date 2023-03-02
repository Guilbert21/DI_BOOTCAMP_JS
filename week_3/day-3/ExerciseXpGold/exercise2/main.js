// Ask the user for their grade.
grade = prompt("enter your grade:")

// If the grade is bigger than 90, console.log “A”
if (grade > 90 && grade < 101) {
    console.log("A")
}

// Else If the grade is bigger than 80, console.log “B”
else if (grade > 79) {
    console.log("B")
}

// If the grade is between 70(included) and 80 (included), console.log “C”
else if (grade > 69 && grade <80) {
    console.log("C")
}

// If the grade is lower than 70, console.log “D”
else if (grade < 70 && grade > 0) {
    console.log("D")
}

else {
    console.log("error")
}