/*
Створити масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений
він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
   Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
   Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
 */

let products = [
    {name: 'Apples',
    amount: 13,
    isBought: false,
    pricePerOne: 2.3,
    },
    {name: 'Bananas',
        amount: 35,
        isBought: true,
        pricePerOne: 5.3,
    },
    {name: 'Oranges',
        amount: 5,
        isBought: true,
        pricePerOne: 7.2,
    },
    {name: 'Strawberry',
        amount: 43,
        isBought: false,
        pricePerOne: 1.3,
    }
];

function ShowProducts() {
    products.sort((a, b) => a.isBought - b.isBought);
    for (let product of products) {
        console.log(product);
    }
}
ShowProducts();

let prodName = prompt("Enter the name of the product to buy:");
function BuyProduct() {
    let productFound = false;
    for (let product of products) {
        if (prodName === product.name) {
            productFound = true;
            if (product.isBought === false) {
                product.isBought = true;
                console.log(product.name + " is now bought.");
            } else {
                console.log(product.name + " is already bought.");
            }
            break;
        }
    }
    if (!productFound) {
        console.log('No such product found.');
    }

    ShowProducts();
}
BuyProduct();


/*
Видалення продукту зі списку (видалення повинно проводитися шляхом створення  нового масиву, в якому продукт,
що ми шукаємо, буде відсутнім)
 */
let productNameToDelete = prompt("Enter the name of the product to delete:");
function deleteProduct(productName) {
    let newProducts = products.filter(product => product.name !== productName);
    console.log("Updated new array:", newProducts);
}
deleteProduct(productNameToDelete);


/*
3 Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно
збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад,
якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
*/
function addPurchase(name, amount, pricePerOne) {
    let product = products.find(p => p.name === name);

    if (product) {
        // Якщо продукт вже є у списку, оновлюємо його кількість та суму
        product.amount += amount;
        product.pricePerOne = pricePerOne; // Оновлюємо ціну за одиницю, якщо це необхідно
    } else {
        // Якщо продукту ще немає у списку, додаємо його
        products.push({ name: name, amount: amount, isBought: false, pricePerOne: pricePerOne });
    }

    console.log("Оновлений список продуктів:", products);
}

addPurchase("Apples", 5, 2.3);

