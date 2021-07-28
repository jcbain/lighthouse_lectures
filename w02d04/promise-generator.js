// returns a promise that always resolves
const resolvePromise = (value, delay = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`🎉 woohoo resolved: ${value}`), delay)
  })

  return promise
}

// returns a promise that always rejects
const rejectPromise = (value, delay = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(`💩 an error occured with value: ${value}`), delay)
  })

  return promise
}

// returns a promise that 50/50 resolves or rejects
const randomPromise = (value, delay = 1000) => {
  const shouldReject = Math.floor(Math.random() * 2)
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(shouldReject) {
        reject(`💩 an error occured with value: ${value}`)
      } else {
        resolve(`🎉 woohoo resolved: ${value}`)
      }
    }, delay)
  })

  return promise;
}

module.exports = {
  resolvePromise,
  rejectPromise,
  randomPromise
}