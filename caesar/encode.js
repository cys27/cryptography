function cipher(str, n){
    if(typeof str !== "string" || !Number.isInteger(n))
        return false;

    str = str.toLowerCase();
    str = str.replace(/ /g, "");

    const letters = "abcdefghijklmnopqrstuvwxyz";

    let resultText = "";
    for(let i=0; i<str.length; i++){
        let idx = (letters.indexOf(str[i]) + n)%letters.length;
        
        resultText += letters[idx];
    }

    return resultText;
}

console.log(
    cipher("hello world", 3)
    // Result: khoorzruog
)