const readLine = require("readline-sync");
function start() {
    const content = {};
    content.seacrTerm = askndReturnSeachTerm();
    content.prefix = askndReturnPrefix();

    function askndReturnSeachTerm() {
        return readLine.question("Type a Wikipedia search term: ");
    }
    function askndReturnPrefix() {
        const prefix = ["Who is", "What is", "the history of"];
        const selectPrefixIndex = readLine.keyInSelect(prefix, "chooce one option: ");
        const selectPrefixText = prefix[selectPrefixIndex];
        return selectPrefixText;
    }
}

start();
