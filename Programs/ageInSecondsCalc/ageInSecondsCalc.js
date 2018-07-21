function ageInSeconds(years, months, days) {
    let leapYearSeconds = ((years / 4) * 24 * 60 * 60);

    let yourAgeInSecondsByYear = (years * 365 * 24 * 60 * 60);
    let yourAgeinSecondsByMonth = (months * 24 * 60 * 60);
    let yourAgeInSecondsByDay = (days * 60 * 60);

    let yourFullAgeInSeconds = yourAgeInSecondsByYear + yourAgeinSecondsByMonth + yourAgeInSecondsByDay + leapYearSeconds;

    return yourFullAgeInSeconds;
}

console.log(ageInSeconds(26, 1, 18));
