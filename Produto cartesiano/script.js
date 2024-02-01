const productAttributes =
    [['P', 'M', 'G'],
    ['preto', 'branco'],
    ['masculino', 'feminino'],]


const cartesianProductLong = (...arrays) => {
    const [arrayA, arrayB, ...rest] = arrays;

    const result = [];
    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            if (Array.isArray(arrayA[i])) {
                result.push([...arrayA[i], arrayB[j]]);
            } else {
                result.push([arrayA[i], arrayB[j]]);
            }
        }
    }

    if (rest.length > 0) {
        return cartesianProductLong(result, ...rest);
    }

    return result;
};

console.log(cartesianProductLong(...productAttributes));


function imc (peso, altura){
    let imc = peso * altura;
    console.log(imc);
}
imc(80, 180)


// Crie uma função para verificar se um valor é Truthy

function verifica(valor){
    if (typeof valor !== 'number'){
        console.log(`${valor} Não é verdadeiro`);
        return false;
    } else
        console.log(`${valor} é verdadeiro`);
        return true;
          
}


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado


function quadrado(valor){
    const calc = (valor * valor**2)
    return calc;
}



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome


function compl (nome, sobrenome){
    const x = nome;
    const y = sobrenome;
    return x + y;
}


// Crie uma função que verifica se um número é par

function resto (numero) {
    if (numero % 2) {
        console.log('e impar');
    } else {
        console.log('e par')
        
    }   

}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)




// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
