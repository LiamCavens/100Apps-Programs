function headsOrTails() {
    let number = Math.round(Math.random() * (1 - 0) + 0);

    if (number === 0) {
        return 'Heads';
    }

    if (number === 1){
        return 'Tails';
    }
}

console.log(headsOrTails());
