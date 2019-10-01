// 1.


class Author {
    constructor(name, email, gender) {
        this._name = name;
        this.email = email;
        this.gender = gender;
    }

get name() {
    return this._name;
    }

set name(value) {
    this._name = value;
    }

toString() {
    return `you can write us - ${this.email} `
    }
}

class Book extends Author {
    constructor(title, price, quantity) {
        super()
        this._title = title;
        this.price = price;
        this.quantity = quantity;
        this.author = author.name     
    }

    get title() {
        return this._title;
        }
    set title(value) {
        this._title = value;
        }

    toString(){
        return   `Hello, the author of ${book.title} is ${book.author}.
        If you want to buy or have questions about the book,
        ${author.toString()} The price is ${book.price}$.`
    }

    getProfit() {
        return this.price * this.quantity ;
    }
}

let author = new Author('Scott Fitzgerald', 'books@gmail.com', 'male')
let book = new Book('"The Great Gatsby"', 23, 110)

console.log(book.toString())
console.log('The profit will be',book.getProfit()+'$.')

// 2.

class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance
    }
   
    get id() {
        return this._id;
        }

    get name() {
            return this._name;
            }

    set name(value) {
            this._name = value;
                }

    get balance() {
            return this._balance;
                }

    set balance(value) {
            this._balance = value;
                    }

    credit(amount) {
             return this.balance + amount;
                    }

    debit(amount) {
        if(this.balance < amount) {
            return 'Amount exceeded balance';
        }
        return this.balance - amount
    }

    transferTo(anotherAccount, amount) {
        if(this.balance < amount) {
            return 'Amount exceeded balance';
        }
        this._balance -= amount;
        return anotherAccount += amount;
    }
    static identifyAccounts(accountFirst, accountSecond) {
             if(accountFirst === this._id || accountSecond === this._id) {
                  return true;
                     } else {
                         return false;
                         }
    }
    toString() {
      return `${this._name} has ${this._balance}$ in his balance.`
    }
    
}

let accounts = [
    new Account('123211','Ani',1500),
    new Account('123212','Arthur',4500),
    new Account('123213','Aram',500)
]
console.log(accounts[1].credit(150));
console.log(accounts[1].transferTo(1230,12));
console.log(accounts[2].debit(550));
console.log(accounts[1].toString());
console.log(Account.identifyAccounts());


// 3.

class Person {
    constructor(fn,ln,gender,age){
        this._fn = fn;
        this._ln = ln;
        this.gender = gender;
        this.age = age;
    }
    get fn() {
        return this._fn;
         }
    set fn(value) {
        this._fn = value;
    }
    get ln() {
             return this._ln;
         }
    set ln(value) {
         this._ln = value;
    }
    
toString() {
    return `${this._fn} ${this._ln} is ${this.age} years old.`
}
}


class Student extends Person {
constructor(_fn, year = 2019, fee) {
    super(_fn)
    this._year = year;
    this.fee = fee;
    this.program = function() {
        let arr = ['English','Russian','Math'];
        return arr.join(' ');
    }
}
get year() {
    return this._fn
     }
set year(value) {
    this._year = value
}
passExam(program = this.program, grade) {
     program = this.program;
    
    if(grade >= 50) {
        return ++this._year;
    }
    return `grade is less 50`
}

toString() {
    return `${this._fn} passed all exames - ${this.program()},and will go to university on ${this._year}.`
    }
}


class Teacher extends Person {
    constructor(_fn,pay) {
super(_fn);
this._pay = pay;
this.program = function() {
return ' ';
}
    }
    get pay() {
        return this._pay
         }
    set pay(value) {
        this._pay = value
    }
    toString() {
return `${this._fn} earn ${this._pay}$.`
    }

}


let person = new Person('Ani','Petrosyan','female',21)
let student = new Student("Ani")
let teacher = new Teacher("Mr.Brown",2400)

student.passExam(student.program(),0)

console.log(person.toString())
console.log(student.toString())
console.log(teacher.toString())
