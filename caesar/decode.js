// If you do not know shift (n), you can decrypt the ciphertext using brute force.
function bruteforce(encryptedText){
    if(typeof encryptedText !== "string")
        return false;

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const maxN = letters.length;

    encryptedText = encryptedText.toLowerCase();
    encryptedText = encryptedText.replace(/ /g, "");

    const resultTexts = [];
    for(let i=0; i<maxN; i++){
        let result = "";
        for(let j=0; j<encryptedText.length; j++){
            let idx = (letters.indexOf(encryptedText[j]) + i)%letters.length;

            result += letters[idx];
        }
        resultTexts.push([result, i]);
    }

    return resultTexts;
}

console.log(
    bruteforce("khoorzruog")
    /*
        Result:
        [
            [ 'khoorzruog', 0 ],  [ 'lippsasvph', 1 ],
            [ 'mjqqtbtwqi', 2 ],  [ 'nkrrucuxrj', 3 ],
            [ 'olssvdvysk', 4 ],  [ 'pmttwewztl', 5 ],
            [ 'qnuuxfxaum', 6 ],  [ 'rovvygybvn', 7 ],
            [ 'spwwzhzcwo', 8 ],  [ 'tqxxaiadxp', 9 ],
            [ 'uryybjbeyq', 10 ], [ 'vszzckcfzr', 11 ],
            [ 'wtaadldgas', 12 ], [ 'xubbemehbt', 13 ],
            [ 'yvccfnficu', 14 ], [ 'zwddgogjdv', 15 ],
            [ 'axeehphkew', 16 ], [ 'byffiqilfx', 17 ],
            [ 'czggjrjmgy', 18 ], [ 'dahhksknhz', 19 ],
            [ 'ebiiltloia', 20 ], [ 'fcjjmumpjb', 21 ],
            [ 'gdkknvnqkc', 22 ], [ 'helloworld', 23 ],
            [ 'ifmmpxpsme', 24 ], [ 'jgnnqyqtnf', 25 ]
        ]

        You can find;

            [ 'helloworld', 23 ]
            Shift: 26(length of alphabet) - 23 = 3

            encode("hello world", 3) = khoorzruog
    */
)