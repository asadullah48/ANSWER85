// Q 85
// This function finds where "code" first shows up in a text
function findCodePosition(str) {
    return str.indexOf("code"); // Looks for "code" and tells where it found it
}
;
console.log(findCodePosition("Learning to code with JavaScript"));
console.log(findCodePosition("Learn to code with JavaScript"));
console.log(findCodePosition("spending lot of time to code "));
console.log(findCodePosition("code ends"));
// Outputs the start position of "code"
// Example: Searching within a sentence
// It tells us the position number where "code" starts.
