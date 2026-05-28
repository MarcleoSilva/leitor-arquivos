import chalk from "chalk"
import fs from "fs"

const file = process.argv[2];

if (!file) {
    console.log('No .txt file given as input. Please use: node sync.js <file>')
    process.exit()
}

const text = fs.readFileSync(file, "utf-8")

function getWords(text){
    return text.split(/[,; .\n\t]+/);
}

function countWords(text){
    const array = getWords(text);

    return array.length;
}

console.log(countWords(text))