export function trim(value) {
    //let segredo = 'pomme';
    let palavra = value.split("");
    return palavra;
}

export function sort(value) {
    let palavras = ['p1','p2','p3'];
    const random = Math.floor(Math.random() * palavras.length);
    //console.log(random, palavras[random]);
    return palavras[random];
}