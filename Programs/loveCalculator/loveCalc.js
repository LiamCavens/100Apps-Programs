function loveCalc(name1, name2) {
    let loveCount = 0;
    const firstname = name1.toUpperCase();
    const firstnamelength = name1.length;
    const secondname = name2.toUpperCase();
    const secondnamelength = name2.length;

    for (let count = 0; count < firstnamelength; count++) {
        let letter1 = firstname.substring(count, count + 1);
        if (letter1 == 'L') loveCount += 2;
        if (letter1 == 'O') loveCount += 2;
        if (letter1 == 'V') loveCount += 2;
        if (letter1 == 'E') loveCount += 2;
        if (letter1 == 'Y') loveCount += 3;
        if (letter1 == 'O') loveCount += 1;
        if (letter1 == 'U') loveCount += 3;
    }
    
    console.log(loveCount);
    
    
}

loveCalc("liam", "heather");