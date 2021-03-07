function getDIff(value) {
    let str=''
    let result= 0;
    for (let i = 0; i < value.length; i++){
        let char = value.charAt(i);
        let index = value.indexOf(char);
        if (index === -1) {
            str += char;
            result = result < str.length ? str.length : result;
        } else {
            str = str.substr(index + 1) + char;
        }
    }
    console.log(result)
}
getDIff('abcabc')