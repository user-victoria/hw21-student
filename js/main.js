/*
    Вам потрібно зробити конструктор сутності "Студент".

    Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
    І є можливість отримати вік студента та його середній бал – це методи.

    Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений,
    але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод
    .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false.
    Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
    Масив – це властивість, present та absent – ​​методи.

    Останній метод: .summary(), перевіряє середню оцінку
    і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90,
    а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
    якщо одне з цих значень менше, то - "Добре, але можна краще",
    якщо обидва нижче - "Редиска!".

    Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів)
    і показати використання цих методів.
*/

class Student {
    arrayOfStudentAttendance = []; // 25 елементів
    constructor(name, surname, yearOfBirth, arrayOfGrades) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.arrayOfGrades = arrayOfGrades;
    }
    ageOfStudent() { // вік студента
        return new Date().getFullYear() - this.yearOfBirth;
    }
    meanGradeOfStudent() { // середній бал
        let result = this.arrayOfGrades.reduce(function (sum, elem) {
            return sum + elem;
        }, 0);
        return result / this.arrayOfGrades.length;
    }
    present() {
        if (this.arrayOfStudentAttendance.length < 25) {
            this.arrayOfStudentAttendance.push(true);
        }
        else {
            console.log('Внесено більше ніж 25 елементів');
        }
    }
    meanAttendanceOfStudent() { // середнє відвідування
        let result = this.arrayOfStudentAttendance.reduce(function (sum, elem) {
            return sum + elem;
        }, 0);
        return result / this.arrayOfStudentAttendance.length;
    }
    absent() {
        if (this.arrayOfStudentAttendance.length < 25) {
            this.arrayOfStudentAttendance.push(false);
        }
        else {
            console.log('Внесено більше ніж 25 елементів');
        }
    }
    summary() {
        if (this.meanGradeOfStudent() >= 90 && this.meanAttendanceOfStudent() >= 0.9) {
            return 'Молодець!';
        }
        else if (this.meanGradeOfStudent() < 90 && this.meanAttendanceOfStudent() < 0.9) {
            return 'Редиска!';
        }
        else {
            return 'Добре, але можна краще';
        }
    }
}

let student1 = new Student('Maria', 'Prokopenko', 2005, [95, 90, 95, 85, 90]);
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
console.log('student1', student1);

console.log('student1 вік =', student1.ageOfStudent());
console.log('student1 середня оцінка =', Number(student1.meanGradeOfStudent().toFixed()));
console.log('student1 середнє відвідування =', student1.meanAttendanceOfStudent());
console.log('student1 метод summary =', student1.summary());
console.log(' ');

let student2 = new Student('Ivan', 'Vovk', 2003, [60, 60, 70, 70, 80]);
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
console.log('student2', student2);

console.log('student2 вік =', student2.ageOfStudent());
console.log('student2 середня оцінка =', Number(student2.meanGradeOfStudent().toFixed()));
console.log('student2 середнє відвідування =', student2.meanAttendanceOfStudent());
console.log('student2 метод summary =', student2.summary());
console.log(' ');

let student3 = new Student('David', 'Fomenko', 2001, [90, 95, 90, 95, 90, 85, 80, 95, 95, 85, 90, 95]);
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
console.log('student3', student3);

console.log('student3 вік =', student3.ageOfStudent());
console.log('student3 середня оцінка =', Number(student3.meanGradeOfStudent().toFixed()));
console.log('student3 середнє відвідування =', student3.meanAttendanceOfStudent());
console.log('student3 метод summary =', student3.summary());