import chalk from "chalk"
import fs from "fs"

const file = process.argv[2];

if (!file) {
    console.log('No .txt file given as input. Please use: node main.js <file>')
    process.exit()
}

const text = fs.readFileSync(file, "utf-8")

function getWords(text){
    return text.split(/[,; .\n\t]+/);
}

async function countWords(text){
    const array = await getWords(text);

    return array.length;
}

console.log(await countWords(text))