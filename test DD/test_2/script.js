function getDayInfo(){
    // приняли с инпут дату
    let inputDate = document.getElementById('date-input').value;

    // переформатировали дату
    let newInputDate = new Date(inputDate);

    // запомнили год
    let year = newInputDate.getFullYear()

    // запомнили дату
    let Day = newInputDate.getDate()
    
    // запомнили месяц в текстовом варианте
    monthsNumber = newInputDate.getMonth()
    var months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    month = months[monthsNumber]

    // узнали какой день недели принятая дата и запомнили в тектовом варианте
    let WeekDay = newInputDate.getDay();
    var days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    week=days[WeekDay]

    // узнаем какой день недели 1ое число данной даты
    let MonthsFirstDay = new Date(newInputDate.getFullYear(), newInputDate.getMonth() , 1);
    let dayWeek = MonthsFirstDay.getDay();

    // высчитываем номер недели(более гениального к сожалению не придумал), да февраль тоже учел
    // пн
    if (dayWeek === 1){
        if (Day>=1 && Day<=7){
            numberWeek = 1
        }
        else if (Day>=8 && Day<=14){
            numberWeek = 2
        }
        else if (Day>=15 && Day<=21){
            numberWeek = 3
        }
        else if (Day>=22 && Day<=28){
            numberWeek = 4
        }
        else {
            numberWeek = 5
        }
    }
    // вт
    else if (dayWeek === 2){
        if (Day>=1 && Day<=6){
            numberWeek = 1
        }
        else if (Day>=7 && Day<=13){
            numberWeek = 2
        }
        else if (Day>=14 && Day<=20){
            numberWeek = 3
        }
        else if (Day>=21 && Day<=27){
            numberWeek = 4
        }
        else {
            numberWeek = 5
        }
    }
    // среда
    else if (dayWeek === 3){
        if (Day>=1 && Day<=5){
            numberWeek = 1
        }
        else if (Day>=6 && Day<=12){
            numberWeek = 2
        }
        else if (Day>=13 && Day<=19){
            numberWeek = 3
        }
        else if (Day>=20 && Day<=26){
            numberWeek = 4
        }
        else {
            numberWeek = 5
        }
    }
    // чт
    else if (dayWeek === 4){
        if (Day>=1 && Day<=4){
            numberWeek = 1
        }
        else if (Day>=5 && Day<=11){
            numberWeek = 2
        }
        else if (Day>=12 && Day<=18){
            numberWeek = 3
        }
        else if (Day>=19 && Day<=25){
            numberWeek = 4
        }
        else {
            numberWeek = 5
        }
    }
    // пт
    else if (dayWeek === 5){
        if (Day>=1 && Day<=3){
            numberWeek = 1
        }
        else if (Day>=4 && Day<=10){
            numberWeek = 2
        }
        else if (Day>=11 && Day<=17){
            numberWeek = 3
        }
        else if (Day>=18 && Day<=24){
            numberWeek = 4
        }
        else {
            numberWeek = 5
        }
    }
    // сб
    else if (dayWeek === 6){
        if (Day>=1 && Day<=2){
            numberWeek = 1
        }
        else if (Day>=3 && Day<=9){
            numberWeek = 2
        }
        else if (Day>=10 && Day<=16){
            numberWeek = 3
        }
        else if (Day>=17 && Day<=23){
            numberWeek = 4
        }
        else if (Day>=24 && Day<=30){
            numberWeek = 5
        }
        else {
            numberWeek = 6
        }
    }
    // вс
    else if (dayWeek === 0){
        if (Day===1){
            numberWeek = 1
        }
        else if (Day>=2 && Day<=8){
            numberWeek = 2
        }
        else if (Day>=9 && Day<=15){
            numberWeek = 3
        }
        else if (Day>=16 && Day<=22){
            numberWeek = 4
        }
        else if (Day>=23 && Day<=29){
            numberWeek = 5
        }
        else {
            numberWeek = 6
        }
    }
    
    result = week + ', ' + numberWeek + ' неделя ' + month + ' ' + year + ' года';

    document.getElementById('result').innerHTML = result;
 }

