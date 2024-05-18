function multiplication(A, B){
    const TRANSPOSE_B = [];
    let k=0;
    while(k<B[0].length){
        const vect = [];
        for(let i=0; i<B.length; i++)
            vect.push(B[i][k])

        TRANSPOSE_B.push(vect);
        k++;
    }

    const result = [];

    for(let i=0; i<A.length; i++){
        result.push([]);
        for(let j=0; j<TRANSPOSE_B.length; j++){
            result[i].push(A[i].reduce((r, a, m) => r+a*TRANSPOSE_B[j][m], 0));
        }
    }

    return result;
}

module.exports = multiplication;
