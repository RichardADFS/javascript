function tabu(){
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    if (num.value.length == 0){
        alert('Por favor, digite um número válido.')
    }else{
        var n = Number(num.value)
        res.innerHTML = ""
        for (c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)

        }
            
    }
 
}