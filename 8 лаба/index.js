var user = {
    ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
}

if (confirm("Отобразить список дней недели на английском?")) {
    document.writeln(user.en)
}
else {
    document.writeln(user.ru)
}
