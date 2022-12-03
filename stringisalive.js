let vowels=new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']),counter=0,n=s.length
    for(let i=0;i<n/2;i++)
        counter+=vowels.has(s[i])-vowels.has(s[n-1-i])
    return !counter