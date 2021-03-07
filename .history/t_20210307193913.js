function getDIff(value) {
    arr = []
    result= 0;
    for (let i = 0; i < value.length; i++){
        let char = value.charAt(i);
        let index = value.indexOf(char);
        if (index === -1) {
            str += char;
            result = result < str.length ? str.length : res;
        } else {
            str = str.substr(index + 1) + char;
        }
        return reslut
    }
}
getDIff('abcabc')