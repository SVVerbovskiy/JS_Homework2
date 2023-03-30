//Каталог товаров
const catalog = [
    {
        id: 1,
        name: 'Футболка',
        descriptions: 'Простая футболка с коротким рукавом',
        sizes: ['S', 'M', 'L', 'XL'],
        price: 1000,
        available: true
    },
    {
        id: 2,
        name: 'Джинсы',
        description: 'Классические джинсы',
        sizes: ['S', 'M', 'L', 'XL'],
        price: 2500,
        available: true
    },
    {
        id: 3,
        name: 'Куртка',
        description: 'Теплая зимняя куртка',
        sizes: ['S', 'M', 'L', 'XL'],
        price: 5000,
        available: false
    },
    {
        id: 4,
        name: 'Платье',
        description: 'Легкое летнее платье',
        sizes: ['XS', 'S', 'M', 'L'],
        price: 1500,
        available: true
    },
    {
        id: 5,
        name: 'Шорты',
        description: 'Короткие шорты для пляжа',
        sizes: ['S', 'M', 'L'],
        price: 800,
        available: true
    }
]

// Корзина

const cart = [
    {
        good: catalog[0],
        amount: 2
    },
    {
        good: catalog[3],
        amount: 1
    }
]

// Функция добавления товара в корзину
function addToCart(item, quantity) {
    const cartItem = cart.find(cartItem => cartItem.good.id === item.id)
    if (cartItem) {
        cartItem.amount += quantity
    } else {
        cart.push({good: item, amount: quantity})
    }
}

// Функция удаления товара из корзины
function removeFromCart(item, quantity) {
    const cartItem = cart.find(cartItem => cartItem.good.id === item.id) 
    if (cartItem) {
        cartItem.amount -= quantity
        if (cartItem.amount <= 0) {
            const index = cart.findIndex(cartItem => cartItem.good.id === index.id)
            cart.slice(index, 1)
        }
    }
}

// Функция очистки корзины
function clearCart() {
    cart.length = 0
}

// Функция вычисления общего количества и стоимости товаров
function calculateCart() {
    let totalAmount = 0;
    let totalSumm = 0;
  
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      totalAmount += item.amount;
      totalSumm += item.amount * item.good.price;
    }
  
    return { totalAmount, totalSumm };
  }

// Пример использования функций
console.log('Корзина до изменений:', cart)
addToCart(catalog[1], 2)
console.log('Корзина после добавления товара:', cart)
removeFromCart(catalog[0], 1)
console.log('Корзина после удаления товара:', cart)
const cartTotal = calculateCart()
console.log(`Общее количество товаров в корзине: ${cartTotal.totalAmount}`)
console.log(`Общая стоимость товаров в корзине: ${cartTotal.totalSumm}`)
clearCart()
console.log('Корзина после очистки:', cart)