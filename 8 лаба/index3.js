class Person {
    FIO = "Unknown"
    age = 18
    constructor(newFio, newAge) {
        this.FIO = newFio
        this.age = newAge
    }
    getFieldStr() {
        var html = "<p>ФИО: " + this.FIO + "</p>"
        html += "<p>Возраст: " + this.age + "</p>"
        return html
    }
    getDataStr() {
        var httml = "<div>"
        httml += this.getFieldStr() + "</div><br>"
        return httml;
    }
}

class Employee extends Person {
    position = "none"
    constructor(FIO, age, newPosition) {
        super(FIO, age)
        this.position = newPosition
    }
    getDataStr() {
        var html = "<div>"
        html += super.getFieldStr()
        html += "<p>Должность: " + this.position + "</p></div><br>"
        return html
    }
}

// const person1=new Person("Петров Петр Петрович",18)
// const person2=new Person("Иванов Иван Иванович",22)
// const employee1=new Employee("Пупкин Пупок Пупкович",32,"Инженер")
// const employee2=new Employee("Косяк Иван Павлович",54,"Электрик")

var Arr = [];

Arr.push(new Person("Петров Петр Петрович", 18))
Arr.push(new Person("Иванов Иван Иванович", 22))
Arr.push(new Employee("Пупкин Пупок Пупкович", 32, "Инженер"))
Arr.push(new Employee("Косяк Иван Павлович", 54, "Электрик"))

Arr.forEach(element => {
    document.write(element.getDataStr())
    console.log(element.getDataStr())
});
