function Person(FIO, age, heigth) {
    this.FIO = FIO
    this.age = age
    this.heigth = heigth
    this.display = function () {
        var html = "<table><tr><td>ФИО</td><td>" + person.FIO + "</td></tr><tr><td>возраст</td><td>" + person.age + "</td></tr>"
        html += "<tr><td>рост</td><td>" + person.heigth + "</td><tr></table>"
        alert("ФИО: " + person.FIO + "\nвозраст" + person.age + "\nрост:" + person.heigth)
        document.write(html)
    }
}

let person = new Person()
person.FIO = prompt("Укажите ваше ФИО")
person.age = prompt("Сколько вам лет")
person.heigth = prompt("Какой у тебя рост")

person.display();
