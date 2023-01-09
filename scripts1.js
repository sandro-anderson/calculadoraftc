// PERSONALIZAÇÃO JS INICIO

let nome_equipe_digitado = ""

const nome_equipe = document.querySelector("#nome_equipe") //imput txt

const nome_novo = document.querySelector("#nome_novo_equipe") //subs nome

// OPÇÕES DAS CORES
const collor01 = document.getElementById("collor01")
const collor02 = document.getElementById("collor02")
const collor03 = document.getElementById("collor03")
const collor04 = document.getElementById("collor04")
const collor05 = document.getElementById("collor05")
const collor06 = document.getElementById("collor06")
const collor07 = document.getElementById("collor07")
const collor08 = document.getElementById("collor08")
const collor09 = document.getElementById("collor09")
const collor10 = document.getElementById("collor10")

const collor11 = document.getElementById("collor11")
const collor12 = document.getElementById("collor12")
const collor13 = document.getElementById("collor13")
const collor14 = document.getElementById("collor14")
const collor15 = document.getElementById("collor15")
const collor16 = document.getElementById("collor16")
const collor17 = document.getElementById("collor17")
const collor18 = document.getElementById("collor18")
const collor19 = document.getElementById("collor19")
const collor20 = document.getElementById("collor20")

const collor21 = document.getElementById("collor21")
const collor22 = document.getElementById("collor22")

const btn_config = document.querySelector("#btn-config") 

btn_config.addEventListener("click" , function(){
    nome_equipe_digitado = nome_equipe.value
    if( nome_equipe_digitado.length != 0 & nome_equipe_digitado.length > 3 & nome_equipe_digitado.length < 12  ){
        nome_novo.textContent = nome_equipe_digitado.toUpperCase()
    btn_config.textContent = "  MODIFICADO  "
    btn_config.style.backgroundColor = 'green'
    }
})

function mudar_btn_config(){
    btn_config.textContent = "MODIFICAR"
    btn_config.style.backgroundColor = 'rgba(37, 31, 31, 0.534)'
    btn_reset.textContent = "RESETAR"
    btn_reset.style.backgroundColor = 'rgba(37, 31, 31, 0.534)'
}

collor01.addEventListener("click", function(){
    //azul fundo
    document.documentElement.style.setProperty('--collor_base01', '#1D395B')
})
collor02.addEventListener("click", function(){
    //marron fundo
    document.documentElement.style.setProperty('--collor_base01', '#8B4513')
})
collor03.addEventListener("click", function(){
    //verde fundo
    document.documentElement.style.setProperty('--collor_base01', '#008000')
})
collor04.addEventListener("click", function(){
    //laranja fundo
    document.documentElement.style.setProperty('--collor_base01', '#F66808')
})
collor05.addEventListener("click", function(){
    //pink fundo
    document.documentElement.style.setProperty('--collor_base01', '#FF1493')
})
collor06.addEventListener("click", function(){
    //roxo fundo
    document.documentElement.style.setProperty('--collor_base01', '#800080')
})
collor07.addEventListener("click", function(){
    //vermelho  fundo
    document.documentElement.style.setProperty('--collor_base01', '#FF0000')
})
collor08.addEventListener("click", function(){
    //Amarelo fundo
    document.documentElement.style.setProperty('--collor_base01', '#FFEA00')
})
collor09.addEventListener("click", function(){
    //preto fundo
    document.documentElement.style.setProperty('--collor_base01', '#000')
})
collor10.addEventListener("click", function(){
    //preto branco
    document.documentElement.style.setProperty('--collor_base01', '#fff')
})

 ////////////////////////////////////////////

 collor11.addEventListener("click", function(){
    //azul tabela
    document.documentElement.style.setProperty('--collor_base02', '#1D395B')
})
collor12.addEventListener("click", function(){
    //marron tabela
    document.documentElement.style.setProperty('--collor_base02', '#8B4513')
})
collor13.addEventListener("click", function(){
    //verde tabela
    document.documentElement.style.setProperty('--collor_base02', '#008000')
})
collor14.addEventListener("click", function(){
    //laranja tabela
    document.documentElement.style.setProperty('--collor_base02', '#F66808')
})
collor15.addEventListener("click", function(){
    //pink tabela
    document.documentElement.style.setProperty('--collor_base02', '#FF1493')
})
collor16.addEventListener("click", function(){
    //roxo tabela
    document.documentElement.style.setProperty('--collor_base02', '#800080')
})
collor17.addEventListener("click", function(){
    //vermelho  tabela
    document.documentElement.style.setProperty('--collor_base02', '#FF0000')
})
collor18.addEventListener("click", function(){
    //Amarelo tabela
    document.documentElement.style.setProperty('--collor_base02', '#FFEA00')
})
collor19.addEventListener("click", function(){
    //preto tabela
    document.documentElement.style.setProperty('--collor_base02', '#000')
})
collor20.addEventListener("click", function(){
    //branco tabela
    document.documentElement.style.setProperty('--collor_base02', '#fff')
})

//FONTES
collor21.addEventListener("click", function(){
    //PRETO fontes
    document.documentElement.style.setProperty('--collor_base03', '#000')
})
collor22.addEventListener("click", function(){
    //BRACO fontes
    document.documentElement.style.setProperty('--collor_base03', '#fff')
})

//PERSONALIZAÇÃO JS FINAL

// TABELA AUTONOMO JS INICIO

const linha01 = document.querySelector("#linha01")
const linha02 = document.querySelector("#linha02")
const linha03 = document.querySelector("#linha03")
const linha04 = document.querySelector("#linha04")
const linha05 = document.querySelector("#linha05")
const linha06 = document.querySelector("#linha06")
const linha07 = document.querySelector("#linha07")
const linha08 = document.querySelector("#linha08")
const linha09 = document.querySelector("#linha09")

const coluna01 = document.getElementById("coluna01")
const coluna02 = document.getElementById("coluna02")
const coluna03 = document.getElementById("coluna03")
const coluna04 = document.getElementById("coluna04")
const coluna05 = document.getElementById("coluna05")
const coluna06 = document.getElementById("coluna06")
const coluna07 = document.getElementById("coluna07")
const coluna08 = document.getElementById("coluna08")
const coluna09 = document.getElementById("coluna09")

const btn_autonomo = document.querySelector("#btn-autonomo")

const result_autonomo = document.querySelector("#result") 

let soma_autonomo = 0
let aux_autonomo = 0

btn_autonomo.addEventListener("click", function(){
    atualizar_autonomo()
})
function atualizar_autonomo(op){
    soma_autonomo = mult_linha01_auto() + mult_linha02_auto() + mult_linha03_auto() 
    + mult_linha04_auto() + mult_linha05_auto() + op1_autonomo() + op2_autonomo() 
    + op3_autonomo() + op4_autonomo()
    result_autonomo.textContent = "- " + soma_autonomo + " -"
    soma_round = soma_autonomo + soma_teleoperado + soma_retafinal
    result_round.textContent = soma_round
    limiteconesa1(op)

}
function atualizar_autonomo1(){
    soma_autonomo = mult_linha01_auto() + mult_linha02_auto() + mult_linha03_auto() 
    + mult_linha04_auto() + mult_linha05_auto() + op1_autonomo() + op2_autonomo() 
    + op3_autonomo() + op4_autonomo()
    result_autonomo.textContent = "- " + soma_autonomo + " -"
    soma_round = soma_autonomo + soma_teleoperado + soma_retafinal
    result_round.textContent = soma_round


}


function mult_linha01_auto(){
    aux_autonomo =  linha01.selectedIndex * 1
    coluna01.textContent = aux_autonomo
    return aux_autonomo
}
function mult_linha02_auto(){
    aux_autonomo =  linha02.selectedIndex * 2
    coluna02.textContent = aux_autonomo
    return aux_autonomo
    
    
}
function mult_linha03_auto(){
        aux_autonomo =  linha03.selectedIndex * 3
        coluna03.textContent = aux_autonomo
        return aux_autonomo
   
}
function mult_linha04_auto(){
    aux_autonomo =  linha04.selectedIndex * 4
    coluna04.textContent = aux_autonomo
    return aux_autonomo
    
    
}
function mult_linha05_auto(){
    aux_autonomo =  linha05.selectedIndex * 5
    coluna05.textContent = aux_autonomo
    return aux_autonomo
    
    
}
function op1_autonomo(){
    if( linha06.selectedIndex == 0){
        coluna06.textContent = "false"
        return 0}
    coluna06.textContent = "10"
    return 10
}

function op2_autonomo(){
    if( linha07.selectedIndex == 0){
        coluna07.textContent = "false"
        return 0}
    coluna07.textContent = "20"
    return 20
}

function op3_autonomo(){
    if( linha08.selectedIndex == 0){
        coluna08.textContent = "false"
        return 0}
    coluna08.textContent = "2"
    return 2
}

function op4_autonomo(){
    if( linha09.selectedIndex == 0){
        coluna09.textContent = "false"
        return 0}
    coluna09.textContent = "2"
    return 2
}

// TABELA AUTONOMO JS FINAL

// TABELA TELEOPERADO JS INICIO

const telelinha01 = document.querySelector("#telelinha01")
const telelinha02 = document.querySelector("#telelinha02")
const telelinha03 = document.querySelector("#telelinha03")
const telelinha04 = document.querySelector("#telelinha04")
const telelinha05 = document.querySelector("#telelinha05")
const telelinha06 = document.querySelector("#telelinha06")
const telelinha07 = document.querySelector("#telelinha07")
const telelinha08 = document.querySelector("#telelinha08")
const telelinha09 = document.querySelector("#telelinha09")

const telecoluna01 = document.getElementById("telecoluna01")
const telecoluna02 = document.getElementById("telecoluna02")
const telecoluna03 = document.getElementById("telecoluna03")
const telecoluna04 = document.getElementById("telecoluna04")
const telecoluna05 = document.getElementById("telecoluna05")

const btn_teleoperado = document.querySelector("#btn-teleoperado")

const result_teleoperado = document.querySelector("#result-teleoperado") 

let soma_teleoperado = 0
let aux_tele = 0

function mult_linha01_tele(){
    aux_tele =  telelinha01.selectedIndex * 1
    telecoluna01.textContent = aux_tele
    return aux_tele
}
function mult_linha02_tele(){
    aux_tele =  telelinha02.selectedIndex * 2
    telecoluna02.textContent = aux_tele
    return aux_tele
}
function mult_linha03_tele(){
    aux_tele =  telelinha03.selectedIndex * 3
    telecoluna03.textContent = aux_tele
    return aux_tele
}
function mult_linha04_tele(){
    aux_tele =  telelinha04.selectedIndex * 4
    telecoluna04.textContent = aux_tele
    return aux_tele
}
function mult_linha05_tele(){
    aux_tele =  telelinha05.selectedIndex * 5
    telecoluna05.textContent = aux_tele
    return aux_tele
}

btn_teleoperado.addEventListener("click", function(){
    atualizar_tele()
})

function atualizar_tele(op){
    soma_teleoperado = mult_linha01_tele() + mult_linha02_tele() + mult_linha03_tele()
    + mult_linha04_tele() + mult_linha05_tele()
    result_teleoperado.textContent = "- " + soma_teleoperado + " -"
    soma_round = soma_autonomo + soma_teleoperado + soma_retafinal
    result_round.textContent = soma_round
    limiteconesa1(op)
}
function atualizar_tele1(){
    soma_teleoperado = mult_linha01_tele() + mult_linha02_tele() + mult_linha03_tele()
    + mult_linha04_tele() + mult_linha05_tele()
    result_teleoperado.textContent = "- " + soma_teleoperado + " -"
    soma_round = soma_autonomo + soma_teleoperado + soma_retafinal
    result_round.textContent = soma_round
    
}


// TABELA TELEOPERADO JS FINAL 

// TABELA RETA FINAL JS INICIO

const rtlinha01 = document.querySelector("#rtlinha01")
const rtlinha02 = document.querySelector("#rtlinha02")
const rtlinha03 = document.querySelector("#rtlinha03")
const rtlinha04 = document.querySelector("#rtlinha04")

const rtcoluna01 = document.getElementById("rtcoluna01")
const rtcoluna02 = document.getElementById("rtcoluna02")
const rtcoluna03 = document.getElementById("rtcoluna03")
const rtcoluna04 = document.getElementById("rtcoluna04")

const btn_rt = document.querySelector("#btn-retafinal")

const result_rt = document.querySelector("#result-retafinal") 

let soma_retafinal = 0
let aux_rt = 0

function op1_rt(){
    if( rtlinha01.selectedIndex == 0){
        rtcoluna01.textContent = "false"
        return 0}
    rtcoluna01.textContent = "3"
    return 3
}

function op2_rt(){
    if( rtlinha02.selectedIndex == 0){
        rtcoluna02.textContent = "false"
        return 0}
    rtcoluna02.textContent = "10"
    return 10
}

function op3_rt(){
    if( rtlinha03.selectedIndex == 0){
        rtcoluna03.textContent = "false"
        return 0}
    rtcoluna03.textContent = "20"
    return 20
}

function op4_rt(){
    if( rtlinha04.selectedIndex == 0){
        rtcoluna04.textContent = "false"
        return 0}
    rtcoluna04.textContent = "2"
    return 2
}

btn_rt.addEventListener("click", function(){
    atualizar_rt()
})

function atualizar_rt(){
    soma_retafinal = op1_rt() + op2_rt() + op3_rt() + op4_rt()
    soma_round = soma_autonomo + soma_teleoperado + soma_retafinal
    result_rt.textContent = "- " + soma_retafinal + " -"
    result_round.textContent = soma_round 
}

// TABELA RETA FINAL JS FINAL 

// PONTUAÇÃO FINAL DA PÁGINA

const result_round = document.querySelector("#result-round") 

let soma_round = 0

function atualizar_geral(){
   atualizar_autonomo1()
   atualizar_tele1()
   atualizar_rt()
   console.log("feito")
}

//FUNÇÃO ZERAR

const btn_reset = document.querySelector("#btn-reset") 

btn_reset.addEventListener("click", function(){

    linha01.value = 0
    linha02.value  = 0
    linha03.value  = 0
    linha04.value  = 0
    linha05.value  = 0
    linha06.value  = "NÃO"
    linha07.value  = "NÃO"
    linha08.value = "NÃO"
    linha09.value = "NÃO"

    telelinha01.value = 0
    telelinha02.value  = 0
    telelinha03.value  = 0
    telelinha04.value  = 0
    telelinha05.value  = 0

    rtlinha01.value = "NÃO"
    rtlinha02.value = "NÃO"
    rtlinha03.value = "NÃO"
    rtlinha04.value = "NÃO"


    atualizar_geral()
    
    btn_reset.textContent = "  RESETADO  "
    btn_reset.style.backgroundColor = 'green'
})
var img_mudando = document.querySelector("#img_logo2");
function mudar_foto1(){
    img_mudando.style.display = 'none'
    img_mudando.setAttribute('src', 'logo_null.png');
}
function mudar_foto2(){
    img_mudando.style.display = 'inline'
    img_mudando.setAttribute('src', 'logo_roboben.png');
}
function mudar_foto3(){
    img_mudando.style.display = 'inline'
    img_mudando.setAttribute('src', 'logo_ftben.png');
}
function mudar_foto4(){
    img_mudando.style.display = 'inline'
    img_mudando.setAttribute('src', 'logo_a.png');
}
function mudar_foto5(){
    img_mudando.style.display = 'inline'
    img_mudando.setAttribute('src', 'logo_b.png');
}
function mudar_foto6(){
    img_mudando.style.display = 'inline'
    img_mudando.setAttribute('src', 'logo_c.png');
}


function limiteconesa1(op1){
    if( linha01.selectedIndex + linha02.selectedIndex + linha03.selectedIndex + linha04.selectedIndex + linha05.selectedIndex
        + telelinha01.selectedIndex + telelinha02.selectedIndex + telelinha03.selectedIndex 
        + telelinha04.selectedIndex + telelinha05.selectedIndex  > 60  ) {
            alert("ULTRAPASSOU O LIMITE DE 60 CONES!")
            switch(op1){
                case 1:
                    linha01.value = 0
                    break
                case 2:
                    linha02.value = 0
                    break
                case 3:
                    linha03.value = 0
                    break
                case 4:
                    linha04.value = 0
                    break
                case 5:
                    linha05.value = 0
                break
                case 6:
                    telelinha01.value = 0
                    break
                case 7:
                    telelinha02.value = 0
                 break
                 case 8:
                    telelinha03.value = 0
                 break
                 case 9:
                    telelinha04.value = 0
                 break
                 case 10:
                    telelinha05.value = 0
                 break

                default:
              

            }
        }
}
