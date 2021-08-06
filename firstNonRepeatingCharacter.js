function firstNonRepeatingCharacter(vet) {
    repetem = []
    quantidade = []
    for (i in vet) {
        // passo por cada letra da palavra vet e coloco em repetem se ela aparece pela primeira vez e aproveito pra iniciar um contador para cada letra de repetem. Se a letra reaparece eu adiciono 1 ao contador dessa letra
        if (!repetem.includes(vet[i])) {
            repetem = repetem.concat(vet[i])
            quantidade = quantidade.concat(1)
        } else {
            // tudo bem percorrer repetem, já que possui no máximo 26 elementos
            quantidade[repetem.indexOf(vet[i])]++
        }
    }

    //ao final basta retornar a letra em repetem que está na mesma posição do contador 1 em quantidade
    if (quantidade.indexOf(1) != -1) {
        return repetem[quantidade.indexOf(1)]
    } else {
        return '_'
    }

}
