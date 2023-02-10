const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "

const exercicio2 = (frase) => {
    const novaFrase = frase.trim()
    
    console.log(novaFrase)
    return novaFrase
}

    const novaString = exercicio2(minhaString)


    //B
    console.log(minhaString.length)
    console.log(novaString.length)

//C

const trocaPalavra = minhaString.replaceAll("________" , "sticioso")
console.log(trocaPalavra)

