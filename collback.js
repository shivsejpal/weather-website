// setTimeout(() => {
//   console.log('Two seconds are up')
// }, 2000)

// const names = ['shiv','shubham','prayag']
// const shortNames = names.filter(name => name.length <= 4)

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     }
//     callback(data)
//   }, 2000)
// }

// geocode('Ahmedabad', (data) => {
//   console.log(data)
// })

// const add = (x, y, callback) => {
//   setTimeout(() => {    
//     callback(x + y)
//   }, 2000)
// }

// add(1, 4, (sum) => {
//   console.log(sum) //should print 5
// })

// const sub = (x, y, callback) => {
//   setTimeout(() => {
//     callback(x-y)
//   }, 2000)
// }

// sub(1, 4, (sum) => {
//   console.log(sum) //should print -3
// })

//Object property shorthand
const name = 'shiv'
const userAge = 27
const user = {
  name,
  age: userAge,
  location: 'Ahmedabad'
}
console.log(user)

//oject destructuring
const product = { 
  label: 'bread',
  price: '10',
  stock: '20',
  salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const { label: productLabel, stock, rating = 4 } = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transection = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transection('order', product)