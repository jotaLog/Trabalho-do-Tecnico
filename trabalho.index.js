let addSentimentos = []

function armazenarSentimento(novosSentimentos) { // Função para armazenar sentimentos
    for (let sentimento of novosSentimentos) {
        addSentimentos.push(sentimento); // Adiciona cada sentimento ao array 
    }
    console.log("Recebeu Sentimento(s)");
    return addSentimentos; // Retorna o array atualizado
}

alert("Vamos começar o jogo")

alert('Você começará em Cuba \n Seu objetivo é chegar em Paris, para as Olimpiadas \n \n')
alert('Você estava na casa de seu parente em Cuba, e recebe a noticia que foi convocado para as Olimpíadas \n ')

let local = String(prompt('Para onde você irá primeiro \n Alemanha, Inglaterra ou Espanha '))


    switch (local) {  // switch que pergunta para qual país você quer ir
        case "Alemanha": // Se selecionar a alemanha esse bloco case vai rodar
            alert('Você esta no avião para Berlim \n')
            alert('alguém tropeçou e caiu do seu lado.')
            let AjudarOuN = String(prompt("Ajudar ou Não |sim para ajudar e não para não ajudar|"))
        
            if(AjudarOuN =='sim'){ // um bloco if para ajudar ou não
                alert('Você ajudou ele.')
                alert('Você recebeuu Gratidão')
                armazenarSentimento("gratidão") // comando para adicionar algo dentro do array
    
            } else if (AjudarOuN == 'não') {
                alert("Você não ajudou ele")
                alert('ele apenas se levantou, e você recebeu culpa')
                armazenarSentimento("culpa") // comando para adicionar algo dentro do array

            } else {
                alert('resposta invalida')
            }
            alert('Você chegou no Aeroporto de Berlim-Brandemburgo')               

        let local2 // variavel do bloco while

        while (local2 !== 0) { // um enqunto que repete a pergunta até ser digitado 0
        local2 = Number(prompt("Para onde você irá agora: \n 1= Portão de Brandemburgo; \n 2= Castelo Neuschwanstein; \n 3= Catedral de Colonia \n Digite 0 para seguir viagem"))

                switch (local2) { // switch que você escolhe o lugar que você vai
                    case 1:
                        alert("você está no Portão de Brandemburgo")
                    
                        let acao

                        while (acao !== 3) {
                        acao = Number(prompt("1: ir para esquerda; \n 2: ir para direita \n 3: para voltar"))

                            if (acao == "1"){
                                let acao1 = prompt("você achou um item deseja reivindicar |s = sim | |n = não |")
                            
                                if (acao1 == "s"){
                                    alert("você recebeu uma sensação de aventura.") 
                                    armazenarSentimento("Censo de Aventura") // comando para adicionar algo dentro do array
                                } else {
                                    alert("ok")
                                }
                            }
                            if (acao == "2"){
                                alert("Não ha nada aqui.")
                            }
                        }
                        break
                    
                    case 2:
                        alert("Você está no Castelo de Neuschwantein")
                        
                        let acao3 // outra variavel do bloco while
                        while (acao3 != 5) { // laço que repitira até a resposta se 5
                            acao3 = Number(prompt("1: Ir para o salão pincipal; \n 2: Ir para o patio; \n 3: Ir para os aposentos reais; \n 4: Ir para a torre mais alta \n 5: Seguir viagem"))
                            
                            if (acao3 == "1") { // ação 1 do castelo
                                let aca0 = prompt("você está no salão principal: |deseja interagir com o trono?| \n |s = sim | |n = não |")
                                
                                if (aca0 == "s"){
                                    alert("voce reivindicou o cetro, e teve uma gloriosa sensação de poder.")
                                    armazenarSentimento("Censo de Poder") // comando para adicionar algo dentro do array
                                } else {
                                    alert("Não deve gostar muito de historia")
                                }
                            }
                            if (acao3 == 2) { // ação 2 do castelo
                                let aca00 = prompt("você está no patio: deseja observar o castelo \n |s = sim | |n = não |")
                                
                                if(aca00 == "s") {
                                    alert("Você viu três pessoas rindo ao lado do castelo: você se sentiu feliz: Recebeu felicidade")
                                    armazenarSentimento("Felicidade") // comando para adicionar algo dentro do array
                                } else {
                                    alert("você não deve gostar muito de paisagens.")
                                }                           
                            }
                            if (acao3 == "3") { // ação 3 do castelo
                                alert("A porta esta trancada.")
                            }
                            if (acao3 == "4") { // ação 4 do castelo
                                let aca000 = prompt("Você está na torre: Deseja observar \n |s = sim | |n = não |")

                                if (aca000 == "s") {
                                    alert("você olhou para baixo e sentiu um pouco de medo: Recebeu medo")                                    
                                    armazenarSentimento("Medo") // comando para adicionar algo dentro do array
                                } else {
                                    alert("você estava no meio do caminho mas, desistiu")
                                }
                            }
                            
                        }
                    break

                    case 3: // esta parte fiz mais textos
                        alert("Você estava passando e parou para admirar a catedral")
                        alert("Enquanto admirava a Catedral, um guia se aproxima, e lhe pergunta se quer entrar.")
                        let acao4 = String(prompt("Aceitar ou não |s = aceitar; n = não acertar|"))
                        if (acao4 == "s") {
                            alert("Você se junta ao guia, ele te leva para um breve tour pela catedral, e te explica como ela foi feita e porque a fizeram.")
                            alert("Recebeu Interesse")
                            armazenarSentimento("interesse") // comando para adicionar algo dentro do array

                        } else {
                            alert("Você responde que não, então o guia insisti, mas, você se mantem firme")
                            alert("diante de sua resposta, o guia sai decepcionado.")
                            alert("recebeu Decepção.")
                            armazenarSentimento("Decepção") // comando para adicionar algo dentro do array
                        }
                    break
                    
                    case 0: 
                        alert("Você seguiu viajem") 
                    break
                
                    default:
                        alert("Opção inválida.")

                    
                 
                }
    }
    alert("Você depois de um tempo na Alemanha, você vai para o aeroporto, para pegar um voo para Paris.")
    alert("Enquanto estava na area de embarque esperando para embarcar avista uma pessoa profundamente triste, e você pensa se deve ou não ajuda-lo")
    let sad5 = String("s = ajudalo; n = não ajudalo")
    if (sad5 == "s") {
        alert("você vai até ele para conversar, então ele desabafa com você.")
        alert("Você o consola")
        alert("Recebeu Empatia")
        alert("Recebu Amizade")
        armazenarSentimento("Empatia", "Amizade") // comando para adicionar algo dentro do array
        
        alert("Vocês embarcam no avião, e vão a viagem conversando sobre as Olimpíadas")
        alert("Quando chegam em Paris vocês se despedem")
        alert("Você vai o mais rápido possivel para ver a cerimonia de abertura das Olimpíadas, e consegue chegar a tempo.")
        alert("objetivo cumprido: sentimentos que conseguiu ao longo da jornada:" + addSentimentos.join(""))
    } else {
        alert("Você enrola para ir falar com ele e quando finalmente toma coragem, a porta para o embarque abre.")
        alert("Você entra no avião, e fica pensando e se eu tivesse ido falar com ele.")
        alert("Depois de um tempo pensando você se toca que já se passou muito tempo, e o avião já estava pousando.")
        alert("Quando você sai do aeroporto você pega um taxi e vai a caminho da cerimonia de abertura, você chega 5 minutos antes da cerimonia começar")
        alert("objetivo cumprido: sentimentos que conseguiu ao longo da jornada:" + addSentimentos.join(", "))

    }

    break
// Parte da Inglaterra
    case "Inglaterra": 
        alert("você foi para o aeroporto pegar um avião para Londres")
        alert("Depois do seu voo atrasar uma hora, você embarcou.")
        let pergunta = String(prompt("Você se sentou do lado de um pai e seu filho \n A mãe da criança chegou e pergunto se poderiam trocar de lugar |s = sim| |n = não|"))
        if (pergunta == "s") {
            alert("Vocês trocaram de lugar, a mãe se sentiu grata por você. você recebeu gratidão")
            armazenarSentimento("gratidão") // comando para adicionar algo dentro do array

        }  else  {
            alert("A mãe insistiu e você não cedeu, o pai que estava ao lado se levantou e foi para o lugar da mãe. |Recebeu culpa|")
            armazenarSentimento("culpa") // comando para adicionar algo dentro do array
        }

        alert("voce chegou no aeroporto de Londres")
        alert("Como você estava em Cuba visitando um parente seu, se deu conta q nunca foi em muitos lugares na Inglaterra")
        
        let local3 // variavel do laço while
        
        while (local3 !== 0) { // laço que repete até o número ser 0
        local3 = Number(prompt("para onde você gostaria de ir |1 = Stonehenge; 2 = Big Ben; 3 = London Eye; 0 = seguir viagem|"))
           
            switch (local3) { // switch para escolher o lugar que você vai
                case 1:
                    alert("você seguiu em direção do Stonehenge")
                    let Stonehenge = String(prompt("Chegando no Stonehenge você desce do carro e para em sua frente. |Deseja analisar o Stonehenge | s= sim||n = não|"))
                    if (Stonehenge == "s") {
                        alert("você observou o Stonehenge, e percebeu que átras de uma das pedras, havia uma marca que você não conhecia")
                        alert("Então começou a pensar como e o que era o Stonehenge, e não soube responder \você recebeu Mistério ")
                        armazenarSentimento("Mistério") // comando para adicionar algo dentro do array

                    } else {
                        alert("Você viu o Stonehenge e seguiu seu caminho ")
                    }
                break
                
                case 2: // tive problemas nessa parte
                    alert("Você estava refletindo sobre seu destino, e decidiu ir para o Big Ben")
                    let bigBen = String(prompt("Quando você chega no Big Ben, imediatamente olha para cima e se sente um pouco tonto, você percebe que o Big Ben está aberto para visita deseja entrar |s = sim||n = não|"))
                    if (bigBen == "s") {
                        alert("Você e mais um grupo de pessoas explraram o Big Ben. Você fez amizade com esse grupo. |Recebeu Amizade|")
                        armazenarSentimento("Amizade") // comando para adicionar algo dentro do array
                        alert("Você saiu do Big Ben, após explorar a torre.")
                        let bigBen2 = String(prompt("Logo após sair abordam você e perguntam se você gostou do passeio?  s= sim||n = não|"))
                        if (bigBen2 == "s"){
                            alert("Você responde que sim, por que consegui fazer alguns amigos")

                        } else if (bigBen2 == "n"){ // Nessa lnha 
                            alert("você responde que o passeio não estava tão agradavél quanto gostaria. A moça entende seu lado e vai embora. |Você recebeu Decepção|")
                            armazenarSentimento("Decepção") // comando para adicionar algo dentro do array

                        } else { // e nessa (não acertava a ordem do senao se e do senao)
                            alert("Você responde que sim, por que consegui fazer alguns amigos")
                        }
                    }
                break    
                
                case 3: // Essa parte foi a que eu mais gostei de fazer
                    alert("Você estava por perto e decidiu parar para ir no Lndon Eye.")
                    let londoEye = String(prompt("deseja se juntar a fila? |s = sim||n = não|"))
                    if (londoEye == "s"){
                        alert("Você foi para a fila")
                        alert("Quando chegou sua vez se sentiu nervoso. |Recebeu Nervosismo|")
                        armazenarSentimento("Nervoso")
                        let londonEye2 = String(prompt("deseja mesmo ir no London Eye: |s = sim||n = não|"))

                        if (londonEye2 == "s") {
                            alert("A roda gigante para no alto para que a pessoa de baixo possa descer, e você observa o quão alto estava e sente medo. |Recebeu Medo|")
                            armazenarSentimento("Medo")// comando para adicionar algo dentro do array
            
                        } else {
                            alert("Você se sente envergonhado e intimidado. |Recebeu {Vergonha}| |Recebeu Intimidação|")
                            armazenarSentimento("Intimidação", "Vergonha") // comando para adicionar algo dentro do array
                        }
                    
                    } else {
                        alert("Você ficou admirado pelo tamanho do Londo Eye, e seguiu seu caminho")
                    }
                break
                
                case 0: 
                    alert("Você seguiu viajem") 
                break
                
                default:
                alert("Opção inválida.")

            }
        }
        alert("Você está analisando como ir para Paris, e chegou em duas alternativas")
        let barcoAviao = Number(prompt("qual deseja ir? |1 = avião; 2 = barco|"))

        switch (barcoAviao) { // desse switch pra baixo demorei muito pra fazer
            case 1:
                alert("Você foi para o aeroporto. Enquanto esperava o voo percebeu um homem triste ao seu lado.")
                let sad = String(prompt("Deseja ir falar com ele? |s = sim||n = não| "))
                if (sad == "s") {
                    alert("ele desabafa sobre seus problemas com você ")
                    armazenarSentimento("Empatia")// comando para adicionar algo dentro do array

                } else {
                    alert("Você se sentiu triste por n ão ajuda-lo. |Recebeu {Tristeza}|")
                    armazenarSentimento("Tristeza")// comando para adicionar algo dentro do array
                }
                alert("Você entra para o voo. Algum tempo depois chega no Aeroporto de Paris.")
                alert("Você chega a tempo de ver a abertura das Olimpiadas, depois de ver as aberturas vai para a Torre Eiffel e toma um café.")
                alert("objetivo cumprido: sentimentos que conseguiu ao longo da jornada:" + addSentimentos.join(", ")) // comando para exibir o que ha dentro do array
            break
            
            case 2: // acho que vou ter problemas dessa linha pra baixo
                alert("Você foi para o porto para pegar um barco que atravessa-se para a França. Chegando no porto você fala com o barqueiro e ele concorda em te levar para o outro lado.")
                alert("Você entra na Balsa, e percebe alguém triste.")
                let sad2 = String(prompt("Deseja ir falar com ele? |s = sim||n = não| "))
                if (sad2 == "s") {
                    alert("ele desabafa sobre seus problemas com você ")
                    armazenarSentimento("Empatia") // comando para adicionar algo dentro do array

                    alert("Vocês conversam e ele lhe oferece uma carona até Paris. ")
                    let carS = String(prompt("Aceitar ou não? |s = aceitar||n = não aceitar|"))
                    if (carS == "s") {
                        alert("Você aceitou a carona dele. Chegando na França ele te leva para Paris a tempo de ver as aberturas.")
                        alert("objetivo cumprido: sentimentos que conseguiu ao longo da jornada:" + addSentimentos.join(", ")) // comando para exibir o que ha dentro do array
                        
                    } else {
                        alert("Você não aceia a carona, ele se sente um pouco triste.")
                        alert("Chegando na França ele se despede e agradece a você.")
                        alert("Você chega atrasado para a abertura mas consegue ver pelo menos uma parte dela.")
                        alert("objetivo cumprido: sentimentos que conseguiu ao longo da jornada:" + addSentimentos.join(", ")) // comando para exibir o que ha dentro do array
                    }

                } else {
                    alert("Você se sente triste por não poder ajudar. |Recebeu Tristeza|")
                    armazenarSentimento("Tristeza") // comando para adicionar algo dentro do array
                    alert("Depois de um tempo Você chega na França e vai a caminho de Paris.")
                    alert("Você perde a abertura das Olimpiadas.")
                    alert ("objetivo cumprido: sentimentos que conseguiu ao longo da jornada:" + addSentimentos.join(", ")) // comando para exibir o que ha dentro do array
                }
            break
           
            default: // Não sabia se precisava botar o default
            alert("Opção inválida.")
        }
        
        break

    default: // Não sabia se precisava botar o default
        alert("Local inválido.")
}