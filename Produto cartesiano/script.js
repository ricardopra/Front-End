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