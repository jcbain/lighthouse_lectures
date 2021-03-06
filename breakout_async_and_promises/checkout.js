const store = ['š®', 'š', 'š„', 'š„', 'š§', 'š§', 'š«', 'š„¦', 'š„', 'š', 'šÆ', 'š„', 'š£', 'š©', 'š„®', 'š¦'];

const grabItem = (store) => {
  const numOptions = store.length;
  const randomId = Math.round(Math.random() * (numOptions - 1));
  const randomItem = store[randomId];
  return randomItem;
};


const checkout = (customerNum, item) => {
  console.log(`(${customerNum}) š Thank you for buying ${item}. Have a nice day!`);
}; 

const askCustomerService = (item, callback) => {
  console.log(`\tš¤· Hello, customer service, where can I find ${item}`);
  const timer = Math.round(Math.random() * 3) * 1000;
  console.log(`\tšµļøāāļø let me go grab those ${item} for you.... it will only take me ${timer/1000} seconds`)

  setTimeout(() => {
    if(Math.random() < 0.5) {
      callback(`\tšØšµļøāāļø  Sorry, I couldn't find any ${item}`)
    } else {
      console.log("\tšµļøāāļø  Here is that item for you!")
      callback(null, item);
    }
  }, [timer])
}





// checkout(1, grabItem(store))
// askCustomerService(grabItem(store), (err, data) => {
//   if(err) {
//     return console.log(err);
//   }
//   checkout(2, data);
// })
// checkout(3, grabItem(store))
// checkout(4, grabItem(store))
// checkout(5, grabItem(store))


const checkoutAllItems = (customerNum, cart) => {
  for(const item of cart) {
    checkout(customerNum, item)
  }
}
const groceryCart = [];
askCustomerService(grabItem(store), (err, data) => {
  if(err) {
    return console.log(err);
  }
  groceryCart.push(data);
  askCustomerService(grabItem(store), (err, data) => {
    if(err) {
      console.log(err);
      return checkoutAllItems(1, groceryCart);
    }

    groceryCart.push(data);
    checkoutAllItems(1, groceryCart);
  })
})