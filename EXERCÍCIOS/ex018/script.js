let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
var valores = []


function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){ 
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }num.value = ''
    num.focus()
}

function finalizar(){
        if (valores.length == 0){
            alert('Adicione valores antes de finalizar!')
        } else {
            let tot = valores.length
            let maior = Math.max(...valores)
            let menor = Math.min(...valores)
            let soma = valores.reduce((acumulador, elemento) => acumulador + elemento, 0)
            let media = soma / valores.length
            res.innerHTML += `<p> Ao todo, ${tot} números cadastrados <p/>`
            res.innerHTML += `<p> O maior número é ${maior} <p/>`
            res.innerHTML += `<p> O menor número é ${menor} <p/>`
            res.innerHTML += `<p> A soma de todos os números é ${soma}<p/>`
            res.innerHTML += `<p> A média entre todos os números é ${media}<p/>`
            
        }
}    





