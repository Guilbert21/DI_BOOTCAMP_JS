// Prompt the user for a string. It must be a verb.
verb = prompt("Enter a verb")

// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
if (verb.length >= 3 && verb.slice(-3) != "ing") {
    console.log(verb + "ing")
}

// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
else if (verb.length >= 3 && verb.slice(-3) == "ing") {
    console.log(verb + "ly")
}

// If the length of the string is less than 3, leave it unchanged.
else if (verb.length < 3) {
    console.log(verb)
}
