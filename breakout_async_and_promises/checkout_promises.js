const checkout = (customerNum, item) => {
  console.log(`(${customerNum}) 🛒 Thank you for buying ${item}`);
} 

const askCustomerService = (item) => {
  console.log(`\t🤷 Hello, customer service, where can I find ${item}`);
  const timer = Math.round(Math.random() * 3) * 1000;
  console.log(`\t🕵️‍♀️ let me go grab those ${item} for you.... it will only take me ${timer/1000} seconds`)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() < 0.8) {
        reject(`\t🚨🕵️‍♀️  Sorry, I couldn't find any ${item}`)
      } else {
        console.log("\t🕵️‍♀️  Here is that item for you!")
        resolve(item);
      }
    }, [timer])
  })

}

const checkoutAllItems = (customerNum, cart) => {
  for(const item of cart) {
    checkout(customerNum, item)
  }
}

const groceryCart = [];
askCustomerService('🍕')
  .then((item) => {
    groceryCart.push(item);
    console.log(groceryCart);
    return askCustomerService('🌮')
  })
  .then((item) => {
    groceryCart.push(item);
    console.log(groceryCart);
    checkoutAllItems(1, groceryCart)
  })
  .catch((err) => {
    console.log(err);
    checkoutAllItems(1, groceryCart)
  })