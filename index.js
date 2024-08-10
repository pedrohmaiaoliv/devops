
let notas = [5,0,0,1]

media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4



console.log("A média do aluno foi:", media)

if (media >= 6) {
    console.log("Aluno Aprovado")
}else if (media < 3) {
    console.log("Aluno reprovado")
}else {
    console.log("Aluno em recuperação")
}

