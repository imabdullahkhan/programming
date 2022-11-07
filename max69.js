const res = `${num}`;
    
for(const char of res) {
    const is6 = char === '6';
    
    if(is6) {
        return +res.replace(char,'9');
    }   
}

return +res;