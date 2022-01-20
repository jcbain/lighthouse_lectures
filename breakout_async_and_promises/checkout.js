const store = ['🌮', '🍕', '🥑', '🥖', '🧄', '🧇', '🫐', '🥦', '🥟', '🍙', '🌯'];

const grabItem = (store) => {
  const numOptions = store.length;
  const randomId = Math.round(Math.random() * (numOptions - 1));
  const randomItem = store[randomId];
  return randomItem;
};


const checkout = (customerNum, item) => {
  console.log(`(${customerNum}) 🛒 Thank you for buying ${item}. Have a nice day!`);
} 

const askCustomerService = (item, callback) => {
  console.log(`\t🤷 Hello, customer service, where can I find ${item}`);
  const timer = Math.round(Math.random() * 3) * 1000;
  console.log(`\t🕵️‍♀️ let me go grab those ${item} for you.... it will only take me ${timer/1000} seconds`)

  setTimeout(() => {
    if(Math.random() < 0.5) {
      callback(`\t🚨🕵️‍♀️  Sorry, I couldn't find any ${item}`)
    } else {
      console.log("\t🕵️‍♀️  Here is that item for you!")
      callback(null, item);
    }
  }, [timer])
}




checkout(1, grabItem(store))
askCustomerService(grabItem(store), (err, data) => {
  if(err) {
    return console.log(err);
  }
  checkout(2, data);
})
checkout(3, grabItem(store))
checkout(4, grabItem(store))
checkout(5, grabItem(store))
