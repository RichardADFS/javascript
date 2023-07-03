function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 14 ){
                img.setAttribute('src', 'imagens/crianca_m.png')
            }else if (idade < 25){
                img.setAttribute('src', 'imagens/jovem_m.png')
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto_m.png')
            }else{ 
                img.setAttribute('src', 'imagens/idoso_m.png')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 14 ){
                img.setAttribute('src', 'imagens/crianca_f.png')
            }else if (idade < 25){
                img.setAttribute('src', 'imagens/jovem_f.png')
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto_f.png')
            }else{
                img.setAttribute('src', 'imagens/idoso_f.png')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}