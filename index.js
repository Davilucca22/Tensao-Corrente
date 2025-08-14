const btnEnviar = document.querySelector('#enviar')
const series = document.querySelector('#series')
const paralelos = document.querySelector('#paralelos')
const AH = document.querySelector('#CB')
const DivPai = document.querySelector('#resultado')


function marcaCheckbox() {
    const checkboxes = document.querySelectorAll('.tensaoBat');

    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            if (cb.checked) {
                checkboxes.forEach(other => {
                    if (other !== cb) other.checked = false;
                });
            }
        });
    });
}

function Voltagem() {
    const tensao = document.querySelectorAll('.tensaoBat')
    let tensaodecarga = 0

    if(tensao[0].checked){
        return tensaodecarga = 14.1
    }else if(tensao[1].checked){
       return tensaodecarga = 7.05
    }else if(tensao[2].checked){
       return tensaodecarga = 2.4
    }

}

function calculaTensao(series) {
    if(series > 0){
        const tensaobat = Voltagem()
        const tensaoFinal = series * tensaobat
        return tensaoFinal
    }else{
        alert(series)
    }
}

function calculaCorrente(AH,paralelo){
    const DezPorCento = (AH * 10) / 100
    let correnteFinal = 0
    if(paralelo > 0){
        return correnteFinal = DezPorCento * paralelo
    }else{
        return correnteFinal = DezPorCento
    }

}

function totalBat(series,paralelos){
    return series * paralelos
}

function mostraDados(elpai){
    apagaP()
    const corrente = calculaCorrente(AH.value,paralelos.value)
    const tensao = calculaTensao(series.value)
    const total = totalBat(series.value,paralelos.value)

    const textoCorrente = document.createElement('p')
    textoCorrente.id = 'TC'
    textoCorrente.innerText = `Corrente de Carga: ${corrente}`

    const textotensao = document.createElement('p')
    textotensao.id = 'TT'
    textotensao.innerText = `Tensao de Carga: ${tensao}`

    const totalbaterias = document.createElement('p')
    totalbaterias.id = 'total'
    totalbaterias.innerText = `Total de baterias: ${total}`


    elpai.appendChild(textoCorrente)
    elpai.appendChild(textotensao)
    elpai.appendChild(totalbaterias)
}

function apagaP(){
    const TT = document.querySelector('#TT')
    const TC = document.querySelector('#TC')
    const total = document.querySelector('#total')

    total.remove()
    TT.remove()
    TC.remove()
}

btnEnviar.addEventListener('click', () => {
  mostraDados(DivPai)
})


window.onload = marcaCheckbox
