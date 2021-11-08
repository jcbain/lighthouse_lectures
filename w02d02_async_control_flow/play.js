const higherOrderFunction = (callback) => {
  const data = {
    userName: 'Mulder'
  }
  console.log('(1) before the settimeout')

  setTimeout(() => {
    data.userName = 'Scully';
    callback(data)
    // return data; // no one here to capture the value so the return value returns undefined
  }, 1000)

  console.log('(2) after the settimeout')
  // return data // doesn't work/ executed syncronously/ still Mulder
}

higherOrderFunction((data) => {
  data.checkIn = new Date();
  console.log(`${data.userName} check in at ${data.checkIn}`)


})
