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
    
    for (let count = 0; count < secondnamelength; count++) {
        let letter2 = secondname.substring(count, count + 1);
        if (letter2 == 'L') loveCount += 2;
        if (letter2 == 'O') loveCount += 2;
        if (letter2 == 'V') loveCount += 2;
        if (letter2 == 'E') loveCount += 2;
        if (letter2 == 'Y') loveCount += 3;
        if (letter2 == 'O') loveCount += 1;
        if (letter2 == 'U') loveCount += 3;
    }

    compatibility = 0;
    if (loveCount > 0) compatibility = 5 - ((firstnamelength + secondnamelength) / 2);
    if (loveCount > 2) compatibility = 10 - ((firstnamelength + secondnamelength) / 2)
    if (loveCount > 4) compatibility = 20 - ((firstnamelength + secondnamelength) / 2)
    if (loveCount > 6) compatibility = 30 - ((firstnamelength + secondnamelength) / 2)
    if (loveCount > 8) compatibility = 40 - ((firstnamelength + secondnamelength) / 2)
    if (loveCount > 10) compatibility = 50 - ((firstnamelength + secondnamelength) / 2)
    if (loveCount > 12) compatibility = 60 - ((firstnamelength + secondnamelength) / 2)
    if (loveCount > 14) compatibility = 70 - ((firstnamelength + secondnamelength) / 2)
    if (loveCount > 16) compatibility = 80 - ((firstnamelength + secondnamelength) / 2)
    if (loveCount > 18) compatibility = 90 - ((firstnamelength + secondnamelength) / 2)
    if (loveCount > 20) compatibility = 100 - ((firstnamelength + secondnamelength) / 2)
    if (loveCount > 22) compatibility = 110 - ((firstnamelength + secondnamelength) / 2)
    
    function capitalizeName(name) {
        return name.replace(/\b(\w)/g, s => s.toUpperCase());
    }

    console.log(`${capitalizeName(name1)} & ${capitalizeName(name2)} are ${compatibility}% Compatible`);
}



loveCalc("liam", "heather");