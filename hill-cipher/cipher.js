const multiplication = require("./multip");

function hillN(A, str){
    if(!Array.isArray(A) || typeof str !== "string")
        return false;
    
    if(str.length === 0)
        return false;
    
    str = str.replace(/ /g, "");

    const strMatch = str.match(/[^0-9A-Za-z]/g);
    if(strMatch !== null)
        return false;

    const vectLen = [];
    for(const vectors of A){
        if(!Array.isArray(vectors))
            return false;

        vectLen.push(vectors.length);

        for(const items of vectors)
            if(typeof items !== "number")
                return false;
    }

    if((new Set(vectLen)).size !== 1)
        return false;

    // A[0].length === 0 ? false : true
    if(!A[0].length)
        return false;
    
    
    // Look at the HTML ASCII Reference
    const chars = [];
    let i=48, j=65, k=97;
    while(i<58 || j<91 || k<123){
        if(i !== 58){
            chars.push(String.fromCharCode(i));
            i++;
        }
        else if(j !== 91){
            chars.push(String.fromCharCode(j));
            j++;
        }
        else if(k !== 123){
            chars.push(String.fromCharCode(k));
            k++;
        }
    }

    const pNSize = A[0].length;
    
    let n = 0;
    if(str.length % pNSize !== 0)
        n = (str.length % pNSize);
    

    for(let i=0; i<n; i++)
        str += str.slice(-1);

    const regexPattern = new RegExp(".{1," + A[0].length + "}", "g");
    const pN = str.match(regexPattern);
    const pN_byIdx = pN.map(i => i.split("").map(j => [chars.indexOf(j)]));

    const matrixMultipResult = [];
    for(let i=0; i<pN_byIdx.length; i++){
        matrixMultipResult.push(multiplication(A, pN_byIdx[i]));
    }

    const indexes = matrixMultipResult.flat(2);
    const resultArr = [];
    
    for(let i=0; i<indexes.length; i++){
        if(indexes[i] > 61)
            indexes[i] = indexes[i]%62;

        resultArr.push(chars[indexes[i]]);
    }

    return resultArr.join("");
}

console.log(
    hillN([[0,1,3,4],[5,6,7,8],[9,10,11,12]], "Hello world")
    // Result: xcMm8k20a
);
