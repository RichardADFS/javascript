let num = [5,8,2,9,3]
//num[6] = 6
//num.push(7)

console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num}`)
console.log(`O ultimo valor do vetor é: ${num.pop()}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
}else{
console.log(`O valor 8 está na posição ${pos}`)
}
