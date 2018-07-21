function ageInSeconds(years, months, days) {
    let yourAgeInSecondsByYear = (years * 365.25 * 24 * 60 * 60);
    let yourAgeinSecondsByMonth = (months * 24 * 60 * 60);
    let yourAgeInSecondsByDay = (days * 60 * 60);

    let yourFullAgeInSeconds = yourAgeInSecondsByYear + yourAgeinSecondsByMonth + yourAgeInSecondsByDay;

    return yourFullAgeInSeconds;
}

console.log(ageInSeconds(26, 1, 18));
