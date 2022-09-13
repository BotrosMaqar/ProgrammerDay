function getDayOfProgrammer(year) {
    var missedDaysAfterConversion = 14;
    var day = 12;
    if (year < 1700 || year > 2700)
        return '';
    if (year == 1918) {
        day += missedDaysAfterConversion;
    }

    else if (year < 1918) //Julian calendar
    {
        if (year % 4 !== 0)
            day++;
    }
    else  // Gregorian calendar
    {
        if (!(year % 400 === 0 || (year % 4 == 0 && year % 100 != 0)))
            day++;
    }
    console.log('test')
    return day + '.09.' + year
}

getDayOfProgrammer(1970);