function getNextBirthDay(birthDay) {
    var today = new Date(); 
    var bd = new Date(birthDay);
    
    var year = today.getFullYear()
    var month = bd.getMonth() + 1
    var date = bd.getDate()
    var dateString = String(month) + '/' + String(date) + '/' + String(year)
    var BD = new Date(dateString)
    if (today > BD) {
        dateString = String(month) + '/' + String(date) + '/' + String(year+1)
        BD = new Date(dateString)
        return Math.round(Math.abs(BD-today)/(1000 * 3600 * 24));
    }
    else {
        return Math.round(Math.abs(BD-today)/(1000 * 3600 * 24));
    }

}
