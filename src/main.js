import chalk from "chalk"
import fs from "fs"

console.log("hi")

function getWords(text){
    return text.split(/[,; .\n\t]+/);
}

async function countWords(text){
    const array = await getWords(text);

    console.log(array)
    return array.length;
}

const t = "Era uma vez, ou melhor, talvez duas; Esqueci-me já de tudo. Espero que qualquer coisa, em qualquer lugar, seja alguém"

console.log(await countWords(t))