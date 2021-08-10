/******** 
 * script sobre formulário com javascript
 * todos os console.log desse arquivo estão comentados
 * para testar, encontre a parte que deseja estudar e descomente o console.log desejado
 * se necessário, adicione novas linhas de código
 * *******/

//====inicio contator usando input hidden====
let btnMenos = document.querySelector('.btn-menos')
let btnMais = document.querySelector('.btn-mais')
let textoQtd = document.querySelector('.qtd')
let qtd = textoQtd.textContent
let qtdHidden = document.querySelector('#quantidade')

function aumentar() {
    qtd++
    textoQtd.textContent = qtd
    qtdHidden.value = qtd
}

function diminuir() {
    if (qtd == 1) {
        alert('quantidade minima é 1')
        return
    }
    qtd--
    textoQtd.textContent = qtd
    qtdHidden.value = qtd 
}

btnMais.addEventListener('click', aumentar)
btnMenos.addEventListener('click', diminuir)
//====fim contator usando input hidden====

let validObj = {
    nome: false,
    email: true,
}

function validarForm() {
    let btnSubmit = document.querySelector('.btn-custom')

    let validArray = Object.values(validObj)
    for (let i = 0; i < validArray.length; i++) {
        if (validArray[i] == false) {
            btnSubmit.setAttribute('disabled', true)
            break
        } else {
            btnSubmit.removeAttribute('disabled')
        }
    }  
}

//====inicio validação com regex campo nome====
let inputNome = document.querySelector('#inputNome')
inputNome.addEventListener('blur', function() {
    let regexTexto = /[A-Z][a-z]* [A-Z][a-z]*/
    
    // if (this.value.trim() == "") { sem regex
    if (regexTexto.test(this.value.trim())) {
        validObj.nome = true
        document.querySelector('.erro-nome').style.display = 'none'
        document.querySelector('.sucesso-nome').style.display = 'block'
        this.setAttribute('class', 'form-control valid')
    } else {
        validObj.nome = false
        document.querySelector('.sucesso-nome').style.display = 'none'
        document.querySelector('.erro-nome').style.display = 'block'
        this.setAttribute('class', 'form-control invalid')
    }
    validarForm()
})
//====fim validação campo nome====

//====inicio validação com regex campo Email====
let inputEmail = document.querySelector('#inputEmail')
inputEmail.addEventListener('blur', function() {
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if (regexEmail.test(inputEmail.value.trim())) {
        validObj.email = true
        document.querySelector('.erro-email').style.display = 'none'
        document.querySelector('.sucesso-email').style.display = 'block'
    } else {
        validObj.email = false
        document.querySelector('.sucesso-email').style.display = 'none'
        document.querySelector('.erro-email').style.display = 'block'
    }
    validarForm()
})
//====fim validação campo Email====


//====incio testes de eventos com o campo nome declarado na linha 29====
inputNome.addEventListener('focus', function() {
    // console.log('evento focus')
})

inputNome.addEventListener('blur', function() {
    // console.log('evento blur')
})

inputNome.addEventListener('change', function() {
    // console.log('evento change')
})

inputNome.addEventListener('input', function() {
    // console.log('evento input')
})
//====fim testes de eventos com o campo nome declarado na linha 29====

//====incio teste de captura de mudança em um select====
let selectEstado = document.querySelector('.select-custom')

selectEstado.addEventListener('change', function() {
    let selectedIndex = selectEstado.selectedIndex
    let itemSelected = selectEstado.options[selectedIndex]
    // console.log(itemSelected.value)
})
//====fim teste de captura de mudança em um select====



    
//====incio teste do evento que enviar um formulario====
let form = document.querySelector('#form-aula')
form.addEventListener('submit', function(event) {
    event.preventDefault() //cancela o comportamento padrão de enviar uma action
    //selecionar o radio que está checado
    let radio = document.querySelector('.radio-custom:checked')
    // console.log(radio.value)

    //seleciona todos os checkbox com a classe "aceite-promocoes"
    let aceitePromo = document.querySelectorAll('.aceite-promocoes')
    // console.log(aceitePromo)

    //percorre os checkbox e verifica qual está checado, criando um novo array
    aceiteChecados = []
    for (let i = 0; i < aceitePromo.length; i++) {
        if (aceitePromo[i].checked == true) {
            //momento em que adicionamos um item checado no final do array
            aceiteChecados.push(aceitePromo[i].value)
        }
    }
    //o código abaixo faz a mesma coisa que o for acima de maneira diferente
    // aceitePromo.forEach(value => {
    //     if (value.checked == true) {
    //         aceiteChecados.push(value.value)
    //     }
    // })

    // console.log(aceiteChecados)

    let textArea = document.querySelector('#exampleFormControlTextarea1')
    // console.log(textArea.value)
    
})
//====fim teste do evento que enviar um formulario====