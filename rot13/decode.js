// easy solution
function decrypt(str){
    if(typeof str !== "string")
        return false;

    str = str.replace(/ /g, "");

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

    const strToArr = str.split("");
    let result = "";

    for(let i=0; i<strToArr.length; i++){
        let idx = chars.indexOf(strToArr[i]) - 13;
        if(idx < 0)
            idx = 62 - (idx * -1);

        result += chars[idx];
    }

    return result;
}
