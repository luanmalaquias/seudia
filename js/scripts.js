var url = (window.location.href).split("#")[1];
if(url == "motivacionais"){
    irParaMotivacionais()
} else {
    irParaDesmotivacionais()
}

function irParaMotivacionais() {
    window.location.href = "#motivacionais";
    document.getElementById("motivacional").hidden = false
    document.getElementById("desmotivacional").hidden = true
}

function irParaDesmotivacionais() {
    window.location.href = "#desmotivacionais";
    document.getElementById("motivacional").hidden = true
    document.getElementById("desmotivacional").hidden = false
}

var negativePhrases = [
    "Você não vai conseguir.", 
    "Você é fraco.", 
    "Isso não é para você.",
    "Com certeza você está totalmente errado.", 
    "Só vai dar errado se você tentar.", 
    "É só uma fase ruim, logo vai piorar.", 
    "Você é mais fraco do que pensa.", 
    "O pior está por vir, acredite.", 
    "Nunca é tarde para desistir.", 
    "Nunca se esqueça que você é limitado.", 
    "Com grandes poderes, vem grandes derrotas.", 
    "Só dará errado se você tentar.", 
    "Vai, e se der medo volta.", 
    "Errar, superar, aprender e desistir.", 
    "Para ficar ruim você terá que melhorar muito.", 
    "Nada é tão horrível que não possa piorar muito.", 
    "A vida te derruba hoje preparando para a queda de amanhã.", 
    "Nada como um dia pior do que o outro.", 
    "Nunca é tarde para começar a desistir.", 
    "Acreditar que você pode já é meio caminho errado.", 
    "Pare de desejar e comece a desistir.", 
    "Procrastinar é acreditar no potencial do seu eu do amanhã.", 
    "O não você já tem, só falta buscar a humilhação.", 
    "Não deixe para desistir amanhã quando pode desistir hoje.", 
    "Seja feliz.. A base de remédios.", 
    "Nem todo mundo será Astronauta quando crescer.", 
    "Plágio economiza tempo.", 
    "Aproveite os seus pequenos bons momentos, não terá muitos.", 
    "Pare de achar que ninguém gosta de você, tenha certeza disso.", 
    "Daqui para frente é só ladeira abaixo.", 
    "Pode ser que o seu propósito na vida seja servir de aviso para os outros.", 
    "As piores coisas da sua vida provavelmente ainda não aconteceram com você ainda.", 
    "Desistentes nunca vencem e os vencedores nunca param de falar sobre como venceram.", 
    "Nunca é tarde para falhar.", 
    "Tente bastante e não se preocupe se falhar, todos esperavam por isso mesmo.", 
    "Quando as coisas ficam difíceis, as difíceis ficam ainda mais difíceis.", 
    "Seu pai só teria um dia feliz se não tivesse você como filho.", 
    "As pessoas só te incentivam para rir do seu fracasso.", 
    "Seus sonhos nunca se realizarão.", 
    "Elx só te pegou por falta de opção.", 
    "Elx não é difícil, você que é feio.", 
    "Elx saiu com você para comer de graça.", 
    "As vezes a vida te levanta só para você cair de novo.", 
    "Você é um erro.", 
    "Para de se masturbxr para desenho.", 
    "Para de tentar criar polêmica para chamar atenção. Todo mundo te acha um b**ta.", 
    "para ser inútil você tem que melhorar muito.", 
    "Você é um desperdício.", 
    "Qualquer companhia é melhor que a sua.", 
    "Sua sombra só te segue porque é obrigada.", 
    "Azar no amor, azar no jogo, azar no dinheiro e sorte no azar.", 
    "Você vai morrer infeliz e sozinho.", 
    "Elx pediu um tempo porque queria dar para outro.", 
    "A tendência é piorar.", 
    "A vida é curta e mesmo assim você vai continuar trabalhando duro e ganhando pouco.", 
    "Seu dia vai ser ruim.", 
    "Sua mãe deveria ter eng0lido.", 
    "Você só faz peso na terra.", 
    "As pessoas só te respondem para você parar de encher o saco.", 
    "Elx só te usou para fazer ciúme no ex.", 
    "Ta todo mundo tr**sand0 menos você.", 
    "Nasceu para ser feito de ot**io.", 
    "Agradeça seu pai por ele te amar mesmo você sendo um m**da.", 
    "Comer que nem um filho da p*ta não vai esconder o fracasso da sua vida.", 
    "Você nunca vai conseguir.", 
    "Calma, o pior ainda está por vir.", 
    "Ninguém acha graça no que você diz.", 
    "Mais um dia que passa e tua insignificância prevalece.", 
    "Elx gosta do seu melhor amig0.", 
    "Nunca diga que sua vida não pode ficar pior.", 
    "A inteligência artificial não é páreo para a estupidez natural.", 
    "Se você não conseguir de primeira, remova todas as evidências de que você ao menos tentou.", 
    "Finalmente elx olhou para você. E te achou fei0.", 
    "Aquela festa parece legal... Ninguém te convidou.", 
    "Uma mulher te cantou... era um travesti.", 
    "Sua cara metade virou gay.", 
    "Elx ainda se lembra de você.. E sente n0jo.", 
    "Não desanime com a derrota de hoje. Amanhã tem outra.", 
    "Não importa as escolhas que você faça, você vai estragar tudo do mesmo jeito.", 
    "Nem sua mãe acredita no seu sucesso.", 
    "Vai dar tudo certo! ...menos para você.", 
    "Seu primo mais novo tá ganhando bem mais que você.", 
    "Sua vida social no The Sims não conta como uma.", 
    "A vida é bela, mas você não.", 
    "Tente ser feliz sem seus remédios.", 
    "Seja um fracassado, culpe seus pais pelo seu fracasso.", 
    "Nunca subestime sua incapacidade.", 
    "Nunca é tarde para desistir.", 
    "Não tenha medo do fracasso, tenha certeza.", 
    "Depois do sacrifício vem a derrota.", 
    "Sorria para não chorar.", 
    "Quando disserem que não vai dar certo, acredite.", 
    "Até o cheque é especial e você não.", 
    "Não há saúde sem saúde mental.", 
    "Nunca fica mais difícil, é você que fica mais fraco.", 
    "Você ainda não chegou lá, mas olha o quanto você já se f*deu.", 
    "O problema não é dia do azar, é a sua incompetência.", 
    "Tentar é o primeiro passo rumo ao fracasso.", 
    "Você nasceu para ser o amigo de todos, mas nunca o amor de alguém.", 
    "Você nunca foi o bastante para alguém", 
    "Você nunca será o bastante para alguém",  
]

var positivePhrases = [
    "Você vai conseguir.", 
    "Você é forte.", 
    "Isso é para você.", 
    "Com certeza você está totalmente certo.", 
    "Só vai dar certo se você tentar.", 
    "É só uma fase ruim, logo vai passar.", 
    "Você é mais forte do que pensa.", 
    "O pior já passou, acredite.", 
    "Nunca é tarde para seguir em frente.", 
    "Nunca se esqueça de quem você é.", 
    "Com grandes poderes, vem grandes responsabilidades.", 
    "Só dará certo se você tentar.", 
    "Vai, e se der medo continua. O medo é só um passo pro sucesso.", 
    "Errar, superar, aprender e resistir.", 
    "A vida te derruba hoje preparando para a vitória de amanhã.", 
    "Nada como um dia após o outro.", 
    "Nunca é tarde para recomeçar.", 
    "Acreditar que você pode já é meio caminho andado.", 
    "Pare de desejar e comece a agir.", 
    "Procrastinar é não acreditar no seu potencial.", 
    "O não você já tem, o sim é questão de conquistar.", 
    "Não deixe para começar amanhã o que você pode começar hoje.", 
    "Nem todo mundo será Astronauta quando crescer.", 
    "Plágio reduz o seu tempo.", 
    "Aproveite os bons momentos.", 
    "Pare de achar que ninguém gosta de você e comece a tentar.", 
    "O que passou é aprendizado.", 
    "Desistentes nunca vencem.", 
    "Nunca deixe alguém impor limites em você.", 
    "Nunca é tarde para recomeçar.", 
    "Tente bastante e não se preocupe se falhar, amanhã pode tentar novamente.", 
    "Quando as coisas ficam difíceis é porque está no caminho certo.", 
    "Seus sonhos serão realizados.", 
    "Não se rebaixe por ser negado por alguém, sempre existe alguém disposto a te fazer feliz.", 
    "Desapegue de pessoas difíceis, quem te quer de verdade reserva um lugarzinho no coração sem fazer esforço.", 
    "Mantenha distância de pessoas invejosas.", 
    "As vezes a vida te derruba só para testar sua resistência.", 
    "Você é luz.", 
    "Diga seu/sua crush o que você sente. Se não for correspondido ao menos você tirou um peso das costas.", 
    "Você é vida.", 
    "Nenhuma companhia é melhor que a tua.", 
    "Existem pessoas que fariam de tudo para ter tua companhia.", 
    "Existem pessoas que fariam de tudo para ser ao menos a tua sombra.", 
    "Sorte no amor, sorte no jogo, sorte no financeiro é só questão de tempo.", 
    "Não se preocupe com o futuro, se preocupe com o presente.", 
    "Se elx pediu um tempo, é hora de seguir em frente.", 
    "A tendência é melhorar.", 
    "A vida é curta, aproveite os bons momentos.", 
    "Você terá um ótimo dia.", 
    "Agradeça seu pais por eles te amarem.", 
    "Você vai conseguir.", 
    "Calma, o melhor ainda está por vir.", 
    "Mais um dia que passa e tua força prevalece.", 
    "Elx gosta de você.", 
    "Se você não conseguir de primeira vez, tente da segunda. A primeira foi experiência.", 
    "Finalmente elx olhou para você.", 
    "Sua cara metade ainda te espera.", 
    "Elx ainda se lembra de você.", 
    "Não desanime com a derrota de hoje. Amanhã terá vitória.", 
    "Não importa as escolhas que você faça, mas sim o caminho que irá seguir.", 
    "Seus pais acreditam e trabalham pro seu sucesso.", 
    "Vai dar tudo certo! Confie em si.", 
    "Cada um tem seu tempo.", 
    "A vida é bela.", 
    "Nunca subestime sua capacidade.", 
    "Nunca é tarde para continuar.", 
    "Não tenha medo do fracasso, todos que chegaram lá passaram por isso.", 
    "Depois do sacrifício vem a vitória.", 
    "Sorria.", 
    "Quando disserem que não vai dar certo, mostre o contrário.", 
    "Você ainda não chegou lá, mas olha o quanto você já percorreu.", 
    "Tentar é o primeiro passo.", 
    "Você nasceu para ser o amor de alguém.", 
    "Você será o suficiente para alguém", 
    "Os problemas são oportunidades para se mostrar o que sabe.", 
    "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.", 
    "Tente de novo. Fracasse de novo. Mas fracasse melhor.", 
    "É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo.", 
    "O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido.", 
    "Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer.", 
    "Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos.", 
    "A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz.", 
    "Nada acontece a menos que sonhemos antes.", 
    "É sempre divertido fazer o impossível.", 
    "Experiência é o nome que cada um dá a seus erros.", 
    "Lembre-se sempre que a sua vontade de triunfar é mais importante do que qualquer outra coisa.", 
    "Prefira os erros do entusiasmo à indiferença da sabedoria.", 
    "A arte de ser ora audacioso, ora prudente, é a arte de vencer.", 
    "Seja corajoso. Mesmo que você não seja, finja ser. Ninguém nota a diferença.", 
    "Não somos responsáveis apenas pelo que fazemos, mas também pelo que deixamos de fazer.", 
    "Quando você contrata pessoas mais inteligentes do que você, prova que é mais inteligente do que elas.", 
    "Um objetivo nada mais é do que um sonho com limite de tempo.", 
    "Sorte é o que acontece quando a preparação encontra a oportunidade.", 
    "O único lugar que o sucesso vem antes do trabalho é no dicionário.", 
    "Existe o risco que você jamais pode correr. Existe o risco que você jamais pode deixar de correr.", 
    "A qualidade do seu trabalho tem tudo a ver com a qualidade da sua vida.", 
    "Somos o que repetidamente fazemos. Portanto, a excelência não é um feito, é um hábito.", 
    "Persistência é irmã gêmea da excelência. Uma é mãe da qualidade, a outra a mãe do tempo.", 
    "Comemore os seus sucessos. Veja com humor os seus fracassos.", 
    "Autorrespeito, autoconhecimento e autocontrole conduzem a vida ao poder supremo.", 
    "É tentando o impossível que se chega à realização do possível.", 
    "A confiança em si mesmo é o primeiro segredo do sucesso.", 
    "Aquele que pretende ser um líder tem que ser uma ponte.", 
    "Muda tuas ideias e mudarás teu mundo.", 
    "Devemos prometer somente aquilo que podemos entregar e entregar mais do que prometemos.", 
    "Nada de importante no mundo foi realizado sem paixão.", 
    "Uma das melhores maneiras de convencer os outros é ouvindo. Ouça todos.",  
    "O importante é mudar sempre, mesmo que estejamos crescendo e ganhando o jogo.", 
    "Se não puder destacar-se pelo talento, vença pelo esforço.", 
    "Em busca do ótimo não se faz o bom.", 
    "Se existe uma forma de fazer melhor, descubra-a.", 
    "Não deixe o ruído das opiniões dos outros abafar a sua própria voz interior.", 
    "Somente os que ousam errar muito podem realizar muito.", 
    "Aceite os desafios para que possa sentir o sabor da vitória.", 
    "A sorte favorece a mente preparada.", 
    "Pessoas com meta têm sucesso pois sabem onde estão indo.",  
    "A pessoa comum é exigente com os outros. A superior é exigente consigo mesmo.", 
    "Não há sucesso sem dificuldade.", 
    "Um grande prazer na vida é fazer aquilo que dizem que você não é capaz de fazer.",  
    "Toda glória advém de ousar começar.", 
    "A pessoa que não acredita em si mesmo não acredita em mais nada.", 
    "Grandes mentes estão prontas não apenas para explorar oportunidades, mas para criá-las.",  
    "O primeiro passo indispensável para conseguir coisas na vida é decidir o que você quer.", 
    "A percepção quando chega a ser julgada por outros é a realidade.", 
    "O pior fracassado do mundo é aquele que perdeu o entusiasmo.", 
    "A maior recompensa pelo trabalho não é o que a pessoa ganha, é o que ela se torna através dele.",  
    "Aquele que cometeu um erro e não corrigiu está cometendo outro erro.",  
    "A vitória sempre foi de quem nunca duvidou dela.", 
    "Os satisfeitos nada mais fazem. Os insatisfeitos são os únicos propulsores do mundo.", 
    "Todas as coisas são possíveis àqueles que creem.", 
    "O problema é que a maioria das pessoas prefere um elogio que prejudique do que uma crítica que beneficie.", 
    "A decepção surge da disparidade entre a expectativa de uma experiência agradável e a experiência real.", 
    "Prefira a angústia da busca do que a paz da acomodação.", 
    "Conhecimento não é aquilo que você sabe, mas o que você faz com aquilo que sabe.", 
    "O que merece ser feito, merece ser bem feito.",  
    "Não encontre defeitos, encontre soluções. Qualquer um sabe queixar-se.", 
    "Para evitar críticas: não faça nada, não diga nada, não seja nada.", 
    "A natureza nos deu uma língua e dois ouvidos para que ouçamos mais do que falamos.", 
    "Feliz aquele que sabe adquirir experiência com o erro dos outros.", 
    "Querer ser de seu tempo é já estar ultrapassado.", 
    "Planeje o seu trabalho hoje para todos os dias trabalhar o seu plano.", 
    "Sucesso é apenas sorte; pergunte para qualquer fracassado.", 
    "Destino não é exterior a nós; somos nós que criamos nosso próprio destino dia após dia.",  
    "O homem que removeu a montanha começou carregando as pedras.", 
    "A covardia é o medo aceito; a coragem é o medo dominado.", 
    "Todos os dias me levanto para vencer.", 
    "Meu sucesso se deve ao fato de me cercar de pessoas competentes.", 
    "Não atrase o seu progresso com medo de fracassar.", 
    "Quem não tem inteligência para criar tem que ter coragem para copiar.", 
    "Ninguém pode ferir você sem o seu consentimento.", 
    "O verdadeiro risco é não fazer nada.", 
    "Aquele que domina os outros é forte; aquele que domina a si mesmo é todo-poderoso.", 
    "Faça o que puder, com o que tiver, onde estiver.", 
]

var fraseNegativa = negativePhrases[Math.floor(Math.random() * negativePhrases.length)];
document.getElementById("text-des").innerHTML = fraseNegativa

var frasePositiva = positivePhrases[Math.floor(Math.random() * positivePhrases.length)];
document.getElementById("text-mot").innerHTML = frasePositiva