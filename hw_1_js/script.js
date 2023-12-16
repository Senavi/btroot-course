// Створіть об'єкт room з параметри
let room = {
    height: 3,
    tv: 'Samsung',
    big: true
};

// Виведіть в alert тип даних параметра big
//alert(typeof room.big);


// Перевірте, що цей об'єкт не є порожнім і що в ньому є ключ age.
if ('age' in room) {
    console.log("This key exists in the object.");
} else {
    console.log("No such key found");
}


// Отримайте з цього об'єкту елемент, де name == "Bob" і збережіть це в будь-якій змінній.
let users = {
    user_1: {
        name: "John",
        age: 30
    },
    user_2: {
        name: "Bob",
        age: 21
    },
    user_3: {
        name: "Anna",
        age: 19
    }
};

for (let key in users) {
    if (users.hasOwnProperty(key) && users[key].name === 'Bob') {
        let userName = users[key].name;
        console.log(`Name: ` + userName);
        break;
    }
}


// Видаліть із об'єктів (завдання 4) об'єкт з name == "Anna".
for (let key in users) {
    if (users.hasOwnProperty(key) && users[key].name === 'Anna') {
        delete users[key];
        console.log(users);
        break;
    }
}


// Отримайте з об'єкта obj значення id у констанду id, не використовуючи вираз obj.id

const obj = {
    id: 5,
    token: 12343423
};

const {id} = obj;
console.log(id);


/*
Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня
витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
- Метод, який виводить на екран інформацію про автомобіль.
- Додавання ім’я водія у список
- Перевірка водія на наявність його ім’я у списку
- Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що
через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
*/

let car = {
    producer: 'Nissan',
    model: 'Skyline GT-R',
    'release year': 2002,
    'Avg speed': 340,
    'Tank volume': 74,
    'Avg Fuel Consumption': 15,
    drivers: {
        'Driver 1': {
            name: 'Addy Smith',
            age: 44
        },
        'Driver 2': {
            name: 'Frank Cooper',
            age: 65
        },
        'Driver 3': {
            name: 'Anthony Maison',
            age: 34
        }
    }
};


// Виводимо на екран інформацію про автомобіль
let carInfo = document.querySelector('.info');
let driverInfo = document.querySelector('.drivers');

function CheckCarInfo() {
    carInfo.innerHTML = '';
    driverInfo.innerHTML = '';
    for (let key in car) {
        let info = AddCarInfo(key);

        if (key === "drivers") {
            for (let driver in car.drivers) {
                let html = `<div class="point">
            <h4>${driver}</h4>
            <h4>${car.drivers[driver].name}, ${car.drivers[driver].age}</h4>
            </div>`;

                driverInfo.innerHTML += html;
            }
        } else {
            let html = `<div class="point">
        <h4>${key}</h4>
        <h4>${info}</h4>
        </div>`;

            carInfo.innerHTML += html;
        }
    }
}

function AddCarInfo(key) {
    let info = car[key];

    if (key === "Avg speed") {
        return info + " km/h";
    } else if (key === "Tank volume") {
        return info + " lt";
    } else if (key === "Avg Fuel Consumption") {
        return info + " lt/100km";
    } else {
        return car[key]
    }
}

// Додавання ім’я водія у список
let driverName = document.getElementById('addDriver');
let driverAge = document.getElementById('age');
let addBtn = document.getElementById('addBtn');

function Driver(name, age) {
    this.name = name;
    this.age = age;
}

function AddDriverToList() {
    let name = driverName.value;
    let age = driverAge.value;

    let driverKey = `Driver ${Object.keys(car.drivers).length + 1}`;
    car.drivers[driverKey] = new Driver(name, age);

    CheckCarInfo();
}

addBtn.addEventListener('click', AddDriverToList);


// Перевірка водія на наявність його ім’я у списку
let searchInput = document.getElementById('searchDriver');
let searchBtn = document.getElementById('searchBtn');
let resultBox = document.querySelector('.result');

function CheckDriver() {
    resultBox.textContent = '';

    let driverName = String(searchInput.value);

    for (let key in car.drivers) {
        if (car.drivers[key].name === driverName) {
            resultBox.style.backgroundColor = '#b5deb7';
            resultBox.textContent = `${driverName} is on the list`;
            break;
        } else if (!driverName) {
            resultBox.style.backgroundColor = '';
            resultBox.textContent = `You typed nothing`;
        } else {
            resultBox.style.backgroundColor = '#deb5b5';
            resultBox.textContent = `${driverName} is not on the list`;
        }
    }
}

searchBtn.addEventListener('click', CheckDriver);

CheckCarInfo();


/*
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що
через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
*/

let distanceValue = document.getElementById('distance');
let calculateBtn = document.getElementById('Calculate');
let resultCalc = document.querySelector('.resultCalculation');


function CalculateTimeAndFuel() {
    let time = Number((distanceValue.value / car['Avg speed'])).toFixed(1);
    let fuelSpent = Math.floor((distanceValue.value * car['Avg Fuel Consumption']) / 100);

    if (!distanceValue.value) {
        resultCalc.textContent = `No distance typed.`
    } else {resultCalc.textContent = `You need ${time} hours and ${fuelSpent} Lt of fuel to cover 
    ${distanceValue.value} km.`}
}

calculateBtn.addEventListener('click', CalculateTimeAndFuel);












